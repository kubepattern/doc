---
sidebar_position: 2
id: getting-started
title: Getting Started
slug: /getting-started
---
# Getting started
Welcome to KubePattern! This guide will help you get up and running with KubePattern in no time. Whether you're a Kubernetes novice or an experienced operator, this guide will walk you through the essential steps to start using KubePattern effectively.

---

## Installation

### Method 1: Helm (Recommended)

KubePattern is packaged and distributed as an OCI Helm chart via the GitHub Container Registry (GHCR). This method automatically installs the necessary CRDs, RBAC permissions, and the analyzer CronJob.

1. **Install the chart:**
   ```bash
   helm upgrade --install kubepattern oci://ghcr.io/kubepattern/charts/kubepattern \
     --version <VERSION> \
     --namespace kubepattern-system \
     --create-namespace
   ```

2. **Accessing Private Pattern Registries (Optional):**
   If your patterns are stored in a private GitHub repository, provide a Personal Access Token (PAT) during installation:
   ```bash
   --set patternRegistry.repo.token="<YOUR_GITHUB_TOKEN>"
   ```

3. **Customize the Schedule:**
   By default, the analysis runs every hour. You can override the schedule:
   ```bash
   --set schedule="*/30 * * * *"
   ```

### Method 2: Local Container Execution (Without Helm)

If you prefer to run the analyzer locally or in CI/CD pipelines without installing cluster resources, you can execute the container directly. You must mount your local `kubeconfig` to allow the engine to authenticate and query the cluster.

```bash
docker run -rm --name kubepattern-app \
  -v ~/.kube/config:/root/.kube/config:ro \
  -e KUBECONFIG=/root/.kube/config \
  -e GITHUB_TOKEN="<YOUR_GITHUB_TOKEN>" \
  ghcr.io/kubepattern/kubepattern-go:latest
```
*(Note: You can swap `docker` with `podman` depending on your local setup).*

---

## Viewing Results

Once the CronJob completes a run, KubePattern saves the detected architectural issues as `Smell` resources. You can inspect them using standard `kubectl` commands:

```bash
# List all detected smells across the cluster
kubectl get smells -A

# View detailed information about a specific smell
kubectl describe smell <smell-name> -n <namespace>
```

---

## About the Author

This project was created and is currently maintained by **Gabriele Groppo** ([@GabrieleGroppo](https://github.com/GabrieleGroppo)) as part of a Bachelor's Thesis project.
