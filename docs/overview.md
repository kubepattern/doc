---
sidebar_position: 1
title: Overview
slug: /
---
# Overview

:::warning
The Java version is no longer maintained and will not receive updates or support. Please migrate to the Go version to benefit from improved performance, reliability, and new features.
:::

## What is KubePattern?

KubePattern is an innovative analysis tool for Kubernetes that goes beyond traditional linting, focusing on recognizing smells and suggesting cloud-native architectural patterns.

## Key Features

### Pattern-as-Code

KubePattern adopts a declarative approach where patterns are defined through external JSON files, enabling:
- **Extensibility**: Add new patterns without modifying the code
- **Customization**: Define patterns specific to corporate policies
- **Versioning**: Manage pattern evolution over time

### Architectural Pattern Recognition

Unlike traditional linters that only verify field presence, KubePattern:
- Identifies complex patterns violations such as missing **Health Probe** or **Predictable Demands**
- Analyzes relationships between multiple resources
- Provides contextual suggestions with reference documentation

### Comprehensive Reporting

Each detected pattern includes:
- **Severity**: Criticality level (INFO/WARNING/CRITICAL)
- **Category**: Classification (e.g., reliability, security, cost)
- **Message**: Customizable message to explain the issue
- **Remediation Reference**: Link to documentation for fixing the issue

## Architecture & Mechanics
The KubePattern Go engine operates as an in-cluster analyzer. It automatically builds a relational graph of your Kubernetes resources, fetches remote definitions, and evaluates them against your live cluster state.

KubePattern is developed in **Go** and consists of the following components:
- **Core Engine**: Responsible for loading patterns, analyzing cluster state, and generating reports
- **Pattern Registry**: A collection of predefined patterns that can be easily extended
- **Linter**: An utility to validate pattern definitions for correctness and consistency
- **Pattern Registry**: KubePattern evaluates the cluster against definitions stored in the **Pattern-as-Code** registry. You can browse the official definitions here: [Pattern as Code Registry](https://github.com/kubepattern/registry).
- **CRD Output**: The engine generates and manages `Smell` Custom Resources (`smells.kubepattern.dev`) to persist analysis results directly inside the cluster, natively integrating with Kubernetes RBAC and APIs.
- **Execution**: Deployed via Helm, it runs as a lightweight `CronJob`, periodically scanning the cluster without consuming idle resources.





