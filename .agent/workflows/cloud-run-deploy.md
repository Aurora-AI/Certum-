---
description: Deploy the current project to Google Cloud Run using MCP.
---

# 🚀 Cloud Run Deployment

This workflow orchestrates the deployment of the current application to Google Cloud Run.

## Prerequisites
-   **Google Cloud Project ID** (You will be prompted if not set).
-   **GCloud CLI** authenticated (`gcloud auth login`).
-   **Cloud Run API** enabled on the project.

## Workflow Steps

1.  **Identify Project ID**:
    -   Check if `GOOGLE_CLOUD_PROJECT` env var is set.
    -   If not, ask the user for the Project ID.

2.  **Determine Deployment Source**:
    -   **Source Code**: Deploy from the current directory (requires Dockerfile or Buildpacks).
    -   **Image**: Deploy a pre-built container image.

3.  **Execute Deployment**:
    -   Use `deploy-local-folder` (if local source).
    -   Use `deploy-container-image` (if image URL).

## Usage Example (Agent)

```python
# Agent Prompt
project_id = ask_user("Please provide the Google Cloud Project ID")
deploy_result = tools.mcp_cloudrun_deploy_local_folder(
    project=project_id,
    folderPath=os.getcwd(),
    service="my-service-name",
    region="us-central1"
)
```

## Manual Trigger
To manually trigger this deployment via CLI:

```bash
gcloud run deploy --source .
```
