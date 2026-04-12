# Getting started
Welcome to KubePattern! This guide will help you get up and running with KubePattern in no time. Whether you're a Kubernetes novice or an experienced operator, this guide will walk you through the essential steps to start using KubePattern effectively.

## Installation

### Method 1: Helm (Recommended)

KubePattern is packaged and distributed as an OCI Helm chart via the GitHub Container Registry (GHCR). This method automatically installs the necessary CRDs, RBAC permissions, and the analyzer CronJob.

To **install KubePattern using Helm**, run the following command:

```bash
helm upgrade --install kubepattern oci://ghcr.io/kubepattern/charts/kubepattern \
   --version <VERSION> \
   --namespace kubepattern-system \
   --create-namespace \
   --set image.tag=<VERSION>
```

::: info **Customize the Schedule:**
   By default, the analysis runs every hour. You can override the schedule:
   ```bash
   --set schedule="*/30 * * * *"
   ```
:::

## Writing Custom Patterns
KubePattern allows you to define custom patterns to detect specific architectural issues in your Kubernetes cluster. To create a new pattern, you can write a YAML manifest that defines the pattern's name, description, and the logic for detecting the issue.

Here is the guide to write a custom pattern: [API Reference](/docs/core/patterns).

Further examples of custom patterns can be found in the [KubePattern Registry](https://github.com/kubepattern/registry).

## Applying Custom Patterns
Once you have defined your custom pattern in a YAML file, you can apply it to your cluster using `kubectl`:

```bash
kubectl apply -f my-custom-pattern.yaml
```

## Viewing Results

Once the CronJob completes a run, KubePattern saves the detected architectural issues as `Smell` resources. You can inspect them using standard `kubectl` commands:

```bash
# List all detected smells across the cluster
kubectl get smells -A

# View detailed information about a specific smell
kubectl describe smell <smell-name> -n <namespace>
```

## About the Author

This project was created and is currently maintained by **Gabriele Groppo** ([@GabrieleGroppo](https://github.com/GabrieleGroppo)) as part of a Bachelor's Thesis project.
