---
sidebar_position: 2
id: getting-started
title: Getting Started
slug: /getting-started
---
# Getting started
:::warning

KubePattern is also my Bachelor Degree Thesis Project and is **currently under development**. 
It will be fully open source on march 2026.

Have a look and stay tuned if you have further question please [contact me](https://kubepattern.dev/docs/contacts).

A special thanks to [Sigemi](https://www.sigemi.it/) and for the knoledge the tools and the opportunity to build KubePattern during my internship.

:::

## Deploy KubePattern Using Helm

This is the convenient way to deploy KubePattern on your Kubernetes cluster.

### Prerequisites
- A Kubernetes cluster (v1.24+)
- Helm (v3.0+)
- kubectl (v1.24+)
- Access to the cluster with sufficient permissions to create resources

### Steps to Deploy

[Artifact Hub](https://artifacthub.io/packages/helm/kubepattern/kubepattern-chart).

To install KubePattern using Helm (Default Values), follow these steps:

```bash
helm install my-kubepattern-chart oci://ghcr.io/kubepattern/kubepattern-chart --version <version>
```
To install KubePattern with custom values, create a `values.yaml` file with your desired configurations and run:

```bash
helm install my-kubepattern-chart oci://ghcr.io/kubepattern/kubepattern-chart --version <version> -f values.yaml
```

Example `values.yaml`:

```yaml
replicaCount: 1

image:
  repository: kubepattern # Image repository GHCR
  pullPolicy: Always # Container Image pull policy
  tag: "latest" # Target KubePattern version

analysis:
  # Save in involved resoureces namespace 
  saveInNamespace: false
  # Default output namespace if option save-in-namespace == false for namespaced resources
  # Default output namespace for cluster scoped resources
  targetNamespace: pattern-analysis-ns
  # Deploy Cronjob
  schedule: false
  # Periodic analysis frequecy es: @hourly
  jobFrequency: "0 * * * *"

patternRegistry:
  orgName: "kubepattern"
  # kubepattern official pattern registry: https://github.com/kubepattern/registry 
  repo:
    branch: "main"
    name: "registry"
    # For private repositories access
    token: ""

```
