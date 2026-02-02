// libs/elysian-sdk-genesis/src/vault/index.ts
// The Vault: Auditability & Immutable Records

import { nanoid } from 'nanoid';

// =============================================================================
// VAULT ENTRY TYPE
// =============================================================================

export interface VaultEntry<T = unknown> {
  id: string;
  hash: string;
  timestamp: string;
  composerVersion: string;
  domain?: string;
  payload: T;
}

// =============================================================================
// IN-MEMORY VAULT (for development/testing)
// In production, this would connect to Supabase/DB
// =============================================================================

const vault: Map<string, VaultEntry> = new Map();

// =============================================================================
// HASH GENERATION (SHA-256 compatible)
// =============================================================================

/**
 * Generates a deterministic hash from an object
 * Uses Web Crypto API when available, falls back to simple hash
 */
export async function generateHash(data: unknown): Promise<string> {
  const str = JSON.stringify(data, null, 0);
  
  // Try Web Crypto API (available in browsers and Node 18+)
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  
  // Fallback: Simple deterministic hash (not cryptographic)
  return simpleHash(str);
}

/**
 * Synchronous simple hash for fallback
 */
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16).padStart(8, '0') + '-' + Date.now().toString(16);
}

/**
 * Synchronous hash generation (uses simple hash)
 */
export function generateHashSync(data: unknown): string {
  const str = JSON.stringify(data, null, 0);
  return simpleHash(str);
}

// =============================================================================
// VAULT OPERATIONS
// =============================================================================

/**
 * Stores a LayoutSpec in the vault
 * Returns the vault entry with hash
 */
export async function storeInVault<T>(
  payload: T,
  composerVersion: string,
  domain?: string
): Promise<VaultEntry<T>> {
  const id = nanoid(12);
  const hash = await generateHash(payload);
  const timestamp = new Date().toISOString();
  
  const entry: VaultEntry<T> = {
    id,
    hash,
    timestamp,
    composerVersion,
    domain,
    payload,
  };
  
  vault.set(hash, entry);
  
  return entry;
}

/**
 * Retrieves an entry from the vault by hash
 * "If it's not in the Vault, it doesn't exist"
 */
export function getFromVault<T>(hash: string): VaultEntry<T> | null {
  return (vault.get(hash) as VaultEntry<T>) ?? null;
}

/**
 * Verifies if a LayoutSpec matches its declared hash
 * Used for integrity verification
 */
export async function verifyIntegrity(payload: unknown, declaredHash: string): Promise<boolean> {
  const computedHash = await generateHash(payload);
  return computedHash === declaredHash;
}

/**
 * Lists all vault entries (for audit purposes)
 */
export function listVaultEntries(): VaultEntry[] {
  return Array.from(vault.values());
}

/**
 * Gets vault statistics
 */
export function getVaultStats(): {
  totalEntries: number;
  byDomain: Record<string, number>;
  oldestEntry: string | null;
  newestEntry: string | null;
} {
  const entries = listVaultEntries();
  const byDomain: Record<string, number> = {};
  
  entries.forEach(entry => {
    const domain = entry.domain || 'unknown';
    byDomain[domain] = (byDomain[domain] || 0) + 1;
  });
  
  const sorted = entries.sort((a, b) => 
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  
  return {
    totalEntries: entries.length,
    byDomain,
    oldestEntry: sorted[0]?.timestamp ?? null,
    newestEntry: sorted[sorted.length - 1]?.timestamp ?? null,
  };
}

// =============================================================================
// AUDIT TRAIL
// =============================================================================

export interface AuditLog {
  action: 'CREATED' | 'VERIFIED' | 'RETRIEVED' | 'FAILED_VERIFICATION';
  hash: string;
  timestamp: string;
  details?: string;
}

const auditLog: AuditLog[] = [];

export function logAuditAction(
  action: AuditLog['action'],
  hash: string,
  details?: string
): void {
  auditLog.push({
    action,
    hash,
    timestamp: new Date().toISOString(),
    details,
  });
}

export function getAuditLog(): AuditLog[] {
  return [...auditLog];
}
