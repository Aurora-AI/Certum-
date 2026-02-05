import os
import psycopg2
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

class ElysianIntegrator:
    """
    Protocol Reference: [elysian-integrator.md]
    Handles connection to Supabase via Postgres (Preferred) or REST API (Fallback).
    """
    def __init__(self):
        self.db_uri = os.getenv("SUPABASE_URI")
        self.url = os.getenv("NEXT_PUBLIC_SUPABASE_URL")
        self.key = os.getenv("SUPABASE_SERVICE_KEY")
        
        self.conn = None
        self.client: Client = None
        self.mode = "OFFLINE"

    def connect(self):
        # 1. Try Postgres (Direct/Pooler)
        if self.db_uri:
            try:
                self.conn = psycopg2.connect(self.db_uri)
                self.mode = "SQL"
                print("✅ Elysian Integrator: Connected via Postgres (SQL Mode).")
                return True
            except Exception as e:
                print(f"⚠️ Postgres Connection Failed: {e}")
                
        # 2. Try Supabase Client (REST)
        if self.url and self.key:
            try:
                self.client = create_client(self.url, self.key)
                self.mode = "REST"
                print("✅ Elysian Integrator: Connected via Supabase Client (REST Mode).")
                return True
            except Exception as e:
                print(f"❌ Supabase Client Failure: {e}")
        
        print("❌ Elysian Integrator: No valid credentials found.")
        return False

    def execute_query(self, query, params=None):
        """
        Executes a query.
        - SQL Mode: Runs raw SQL.
        - REST Mode: WARN: Cannot run raw SQL via Client without RPC.
        """
        if self.mode == "OFFLINE":
             if not self.connect():
                 return None

        if self.mode == "SQL" and self.conn:
            try:
                cur = self.conn.cursor()
                cur.execute(query, params)
                self.conn.commit()
                return cur
            except Exception as e:
                print(f"SQL Execution Failed: {e}")
                self.conn.rollback()
                return None
        
        if self.mode == "REST" and self.client:
            print("⚠️ REST Mode: Raw SQL execution requires 'rpc' function. Please implement 'exec_sql' in Supabase.")
            return None
            
    def get_table(self, table_name):
        """
        Helper for REST mode to fetch data.
        """
        if self.mode == "OFFLINE":
            self.connect()
            
        if self.mode == "REST" and self.client:
            return self.client.table(table_name)
            
        print("❌ REST Client not active.")
        return None
