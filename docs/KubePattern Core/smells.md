---
sidebar_position: 4
id: smells
title: Smells
slug: /core/smells
---

# KubePattern Smells

The KubePattern analysis results are represented as **Smells**, which are structured findings that indicate potential issues, anti-patterns, or areas for improvement in your Kubernetes manifests. Each Smell is associated with a specific pattern from the [Pattern Registry](https://github.com/kubepattern/registry).

## Retrieving Results

### Using kubectl
```bash
# List all patterns across all namespaces
kubectl get patterns.kubepattern.dev -A

# Short form
kubectl get smells -A

# View details of specific pattern
kubectl describe smells <smell-name> -n <namespace>

# Get as YAML
kubectl get smells <smell-name> -n <namespace> -o yaml

# Filter by field, e.g. severity (requires label)
kubectl get smells -n pattern-analysis-ns --field-selector spec.severity=CRITICAL
```

---

## KubePattern Smell Custom Resource Definition

Analysis results are stored as Kubernetes Custom Resources:

| Property | Type | Description |
| :--- | :--- | :--- | :--- |
| `apiVersion` | string | API version of the Smell CRD (e.g., `kubepattern.dev/v1`) |
| `kind` | string | Always `Smell` |
| `metadata` | object | Standard Kubernetes metadata (name, namespace, labels, annotations) |
| `spec` | object | Core specification of the smell, containing detection logic and relationships |
| `spec.suppress` | boolean | Indicates whether the smell is suppressed |
| `spec.target` | object | Details about the target resource that triggered the smell (apiVersion, kind, name, namespace, uid) |
| `spec.pattern` | object | Information about the pattern that generated the smell (name, version) |
| `spec.reference` | string | Link to documentation for the smell and its remediation |
| `spec.message` | string | Custom message describing the smell |
| `spec.severity` | string | Severity level of the smell (LOW, MEDIUM, HIGH, CRITICAL) |
| `spec.category` | string | Category of the smell (e.g., Security, Performance, Maintainability) |
| `spec.name` | string | Name of the smell (e.g., "Exposed Service") |