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

| Property | Description |
| :--- | :--- |
| `apiVersion` | API version of the Smell CRD (e.g., `kubepattern.dev/v1`) |
| `kind` | Always `Smell` |
| `metadata` | Standard Kubernetes metadata (name, namespace, labels, annotations) |
| `metadata.name` | Unique name of the smell, typically generated based on the pattern and target resource |
| `metadata.namespace` | Namespace where the smell is stored, usually the same as the target resource's namespace |
| `metadata.labels.lastScan` | UUID of the last scan during which the smell was detected (e.g., `lastScan: abc123`) |
| `spec` | Core specification of the smell, containing detection logic and relationships |
| `spec.suppress` | boolean | Indicates whether the smell is suppressed |
| `spec.target` | Details about the target resource that triggered the smell (apiVersion, kind, name, namespace, uid) |
| `spec.pattern` | Information about the pattern that generated the smell (name, version) |
| `spec.reference` | Link to documentation for the smell and its remediation |
| `spec.message` | Custom message describing the smell |
| `spec.severity` | Severity level of the smell (LOW, MEDIUM, HIGH, CRITICAL) |
| `spec.category` | Category of the smell (e.g., Security, Performance, Maintainability) |
| `spec.name` |  Name of the smell (e.g., "Exposed Service") |


::: tip
If `metadata.labels.lastScan` is missing or is out of date, it means the smell has been detected in a previous scan and has not been updated in the current scan. This could indicate that the smell is no longer relevant (e.g., the underlying issue has been resolved) or that it is an old finding that needs to be reviewed. KubePattern automatically removes smells that are no longer relevant.
:::
