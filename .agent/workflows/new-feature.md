---
description: Standard operating procedure for implementing new features with a Mock-First approach
---

# Feature Implementation Workflow

This workflow enforces a **Contract-First** and **Mock-First** development cycle to ensure decoupling between frontend and backend.

### 1. Define the Contract (Interface Layer)
- **Goal**: Establish the "Source of Truth" for data structures.
- **Action**: Define TypeScript interfaces/types for the feature's data models and API interactions.
- **Location**: `types/` or `interfaces/` directory relevant to the feature.

### 2. Create Fixtures (Data Layer)
- **Goal**: Create realistic sample data for all possible states (Loading, Success, Error, Empty).
- **Action**: Create a `fixtures.ts` file alongside your component or in a shared mock folder.
- **Requirement**: Must include at least 3 variations of the data to test edge cases.

### 3. Implement Visual Component (UI Layer)
- **Goal**: Build the UI in isolation using the fixtures.
- **Action**: Develop the React component accepting data via props.
- **Tooling**: Use Storybook or a dedicated test page to render the component with the distinct fixture states defined in step 2.

### 4. Integration (Logic Layer)
- **Goal**: Connect the UI to the real data source (e.g., API, Store).
- **Action**: Implement the data fetching logic (React Query, Context, etc.) that maps the real response to the component's props.

### 5. Verification Checklist
- [ ] Component renders correctly with "Success" fixture.
- [ ] Component handles "Loading" state (Skeleton/Spinner).
- [ ] Component handles "Error" state gracefully.
- [ ] Component handles "Empty" state (No results).
- [ ] Zero logic leaks (UI component shouldn't know about API endpoints).
