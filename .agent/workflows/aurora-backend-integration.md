---
description: Canonical protocol for connecting the Frontend to the Aurora Backend (Contract-First).
---

# 🔗 Aurora Backend Integration (Master Workflow)

**Canonical Integration Protocol**

This workflow enforces a **Contract-First** and **Mock-First** development cycle to ensure decoupling between frontend and backend.
Based on the `new-feature` methodology.

---

## Phase 1: Contract Definition
**Goal:** Establish the "Source of Truth" for data structures.

1.  **Interface Definition**:
    *   Define TypeScript interfaces/types for the feature's data models.
    *   **Location**: `src/types/` or `src/interfaces/`.
    *   **Rule**: Do not start UI until types are defined.

2.  **API Contract**:
    *   Define the expected JSON response structure.
    *   Ensure alignment with Backend team (if applicable) or Database Schema.

## Phase 2: Fixture Creation (Mocks)
**Goal:** Enable independent frontend development.

1.  **Mock Data Generation**:
    *   Create static JSON or TypeScript objects that adhere strictly to the Phase 1 interfaces.
    *   **Location**: `src/mocks/` or within a `__fixtures__` folder.
    *   **Quantity**: Create varied states (Empty, Loading, Success, Error).

## Phase 3: Isolated UI Development
**Goal:** Build the interface using the mocks.

1.  **Component Construction**:
    *   Build React components that consume the Interfaces.
    *   **Props**: Pass data via props typed with the Interface.
2.  **Storybook / Prev (Optional)**:
    *   Visualize the component with the Mock Data.

## Phase 4: Integration
**Goal:** Switch from Mock to Real Data.

1.  **Data Fetching**:
    *   Implement data fetching using SWR, React Query, or Server Actions.
    *   **Endpoint**: Connect to the real Aurora Backend endpoints.
2.  **Adapter Pattern**:
    *   If the API response differs slightly from the UI Interface, write an adapter/transformer function.

## Phase 5: Verification & Close
**Goal:** Ensure stability.

1.  **Type Safety Check**:
    *   Run `tsc --noEmit` to ensure no breaks.
2.  **End-to-End Test**:
    *   Verify the flow with the running backend.
3.  **Vault Close**:
    *   Mark the feature as complete in the project tracker.

---
*Verified by Project Manager (Conductor Mode)*
