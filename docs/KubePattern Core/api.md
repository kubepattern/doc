---
sidebar_position: 3
id: api
title: API
slug: /kubepattern-core/api
---

# API

## K8sPattern CRD Structure

Analysis results are stored as Kubernetes Custom Resources:

```yaml

```

### Field Reference

| Field | Type | Description |
|-------|------|-------------|
| `apiVersion` | string | Pattern definition version (e.g., kubepattern.it/v1) |
| `name` | string | Pattern name (e.g., sidecar, health-probe) |
| `type` | string | Pattern type (STRUCTURAL, BEHAVIORAL, CONFIGURATION) |
| `description` | string | Detailed pattern description and use cases |
| `referenceLink` | string | Documentation URL pointing to pattern registry |
| `message` | string | Contextual recommendation or informational message specific to detected resources |
| `severity` | enum | `INFO`, `WARNING`, `CRITICAL` |
| `confidence` | enum | `LOW`, `MEDIUM`, `HIGH` |
| `category` | enum | `Reliability`, `Security`, `Performance` |
| `suppress` | boolean | Flag to suppress false positives |
| `scores` | array | Individual check scores with category name and score (0-100) |
| `resources` | array | Involved Kubernetes resources with name, namespace, role, and UID |

---

## Retrieving Results

### Using kubectl
```bash
# List all patterns across all namespaces
kubectl get k8spatterns -A

# Short form
kubectl get k8sp -n pattern-analysis-ns

# View details of specific pattern
kubectl describe k8sp sidecar--509164000 -n pattern-analysis-ns

# Get as YAML
kubectl get k8sp sidecar--509164000 -n pattern-analysis-ns -o yaml

# Filter by severity (requires label)
kubectl get k8sp -n pattern-analysis-ns --field-selector spec.severity=CRITICAL
```

---

## Integration Examples


## Analysis Workflow

1. **Request**: API receives analysis trigger (`/analysis/cluster` or `/analysis/namespace/{namespace}`)
2. **Async Execution**: Background thread starts pattern matching process
3. **Graph Construction**: Builds/updates resource and relationship graph
4. **Pattern Matching**: Evaluates all patterns from Pattern-as-Code registry
5. **Scoring**: Calculates confidence scores based on matched criteria
6. **CRD Creation**: Generates `K8sPattern` resources in `pattern-analysis-ns` namespace
7. **Results**: Available immediately via `kubectl get k8spatterns`