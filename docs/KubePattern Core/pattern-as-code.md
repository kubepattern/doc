---
sidebar_position: 2
id: pttern-as-code
title: Pattern as Code
slug: /core/pattern-as-code
---

# KubePattern Pattern as Code
## What is Pattern-as-Code?

**Pattern-as-Code (PaC)** is a Kubernetes Custom Resource Definition (CRD) that allows you to define metrics and **patterns** to recognize Kubernetes resources that deviate from architectural principles and best practices. They also are comprehensive of a remediation reverence documentation and a severity level to prioritize the most critical issues.

# API Documentation

The **API** allows you to write **rules** to identify **Smells** and their remediation strategies within the Kubernetes Cluster.

## API version 

Current Pattern as Code api version: `v1`

## Pattern Definition Structure

### Root Level Properties

| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `apiVersion` | string | Yes | API version of the Pattern CRD (e.g., `kubepattern.dev/v1`) |
| `kind` | string | Yes | Always `Pattern` |
| `metadata` | object | Yes | Standard Kubernetes metadata (name, namespace, labels, annotations) |
| `spec` | object | Yes | Core specification of the pattern, containing detection logic and relationships |

### `metadata`
| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | Yes | Unique name of the pattern regex: `^[a-z0-9]([-a-z0-9]*[a-z0-9])?$` (e.g., `my-pattern`) |

### `spec`

| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `displayName` | string | Yes | Human-readable name for the pattern (e.g., `My Pattern`) |
| `severity` | enum | Yes | Severity level: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| `category` | string | No | Custom category for organizational purposes (e.g., `architecture`, `security`, `cost`) |
| `message` | string | No | Custom message template for detected Smells (supports placeholders) |
| `target` | object | Yes | Definition of the primary resource to analyze |
| `dependencies` | array | No | List of additional resources that interact with the target |
| `relationships` | object | No | Definition of relationships between the target and dependent resources |


### `target`
| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `kind` | string | Yes | Kubernetes resource kind (e.g., `Pod`, `Deployment`) |
| `apiVersion` | string | Yes | API version of the resource (e.g., `apps/v1`) |
| `filters` | object | No | Criteria to narrow down the target resources (e.g., namespace, labels) |

### `dependencies`
| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | string | Yes | Unique identifier for the dependency (e.g., `database`) |
| `kind` | string | Yes | Kubernetes resource kind of the dependency (e.g., `Service`) |
| `apiVersion` | string | Yes | API version of the dependency resource (e.g., `v1`) |

### `target/dependencies.filters`
| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `matchAll` | array | No | List of filter conditions that must all be satisfied |
| `matchAny` | array | No | List of filter conditions where at least one must be satisfied |
| `matchNone` | array | No | List of filter conditions that must not be satisfied |

### `target/dependencies.filters.matchAll/matchAny/matchNone`
| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `path` | string | Yes | JSONPath to the field to evaluate (e.g., `metadata.namespace`) |
| `operator` | enum | Yes | Comparison operator (e.g., `EQUALS`, `CONTAINS`) |
| `values` | array | Yes | List of values to compare against (e.g., `["default", "production"]`) |

### `relationships`
| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `matchAll` | array | No | List of relationship criteria that must all be satisfied |
| `matchAny` | array | No | List of relationship criteria where at least one must be satisfied |
| `matchNone` | array | No | List of relationship criteria that must not be satisfied |

### `relationships.matchAll/matchAny/matchNone`
| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `with` | string | Yes | Identifier of the dependency to evaluate the relationship against (e.g., `database`) |
| `type` | enum | Yes | Type of relationship to evaluate: `custom`, `owns`, `ownedBy`, `selects`, `selectedBy` |
| `criteria` | array | No | List of criteria to evaluate the relationship (custom logic based on resource fields) |

### `relationships.matchAll/matchAny/matchNone.criteria` (if `type` is `custom`)
| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `targetPath` | string | Yes | JSONPath to the field in the target resource to evaluate (e.g., `metadata.name`) |
| `dependencyPath` | string | Yes | JSONPath to the field in the dependency resource to evaluate (e.g., `metadata.name`) |
| `operator` | enum | Yes | Comparison operator (e.g., `EQUALS`, `CONTAINS`) |

## Operators Reference
### Filter Operators
| Operator | Description |
| :--- | :--- |
| `EQUALS` | Checks if the field value is equal to any of the specified values |
| `IS_EMPTY` | Checks if the field value is empty or not defined |
| `EXISTS` | Checks if the field exists in the resource |
| `GREATER_THAN` | Checks if the field value is greater than the specified value (numeric comparison) |
| `GREATER_OR_EQUAL` | Checks if the field value is greater than or equal to the specified value (numeric comparison) |
| `LESS_THAN` | Checks if the field value is less than the specified value (numeric comparison) |
| `LESS_OR_EQUAL` | Checks if the field value is less than or equal to the specified value (numeric comparison) |
| `ARRAY_SIZE_EQUALS` | Checks if the size of the array field is equal to the specified value |
| `ARRAY_SIZE_GREATER_THAN` | Checks if the size of the array field is greater than the specified value |
| `ARRAY_SIZE_GREATER_OR_EQUAL` | Checks if the size of the array field is greater than or equal to the specified value |
| `ARRAY_SIZE_LESS_THAN` | Checks if the size of the array field is less than the specified value |
| `ARRAY_SIZE_LESS_OR_EQUAL` | Checks if the size of the array field is less than or equal to the specified value |

### Criteria Operators (for custom relationships)
| Operator | Description |
| :--- | :--- |
| `EQUALS` | Checks if the value at `targetPath` is equal to the value at `dependencyPath` |

# Custom Resource Definition for Pattern-as-Code
```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: patterns.kubepattern.dev
spec:
  group: kubepattern.dev
  names:
    plural: patterns
    singular: pattern
    kind: Pattern
    shortNames:
      - pat
  scope: Cluster
  versions:
    - name: v1
      served: true
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              x-kubernetes-preserve-unknown-fields: true
```

# Example Pattern-as-Code Definition

```yaml
apiVersion: kubepattern.dev/v1
kind: Pattern
metadata:
  name: page-not-referenced
spec:
  message: "Page {{target.metadata.name}} in namespace {{target.metadata.namespace}} is not managed by any NavMenuItem."
  displayName: Page Not Referenced
  category: Architecture
  severity: HIGH
  target:
    kind: Page
    apiVersion: widgets.templates.krateo.io/v1beta1
    filters:
      matchNone:
        - path: "metadata.namespace"
          operator: EQUALS
          values:
            - krateo-system

  dependencies:
    - id: navmenuitem
      kind: NavMenuItem
      apiVersion: widgets.templates.krateo.io/v1beta1

  relationships:
    matchNone:
      - with: navmenuitem
        type: custom
        criteria:
          - targetPath: "metadata.name"
            dependencyPath: "spec.resourcesRefs.items[*].name"
            operator: EQUALS
          - targetPath: "metadata.namespace"
            dependencyPath: "spec.resourcesRefs.items[*].namespace"
            operator: EQUALS

---
apiVersion: kubepattern.dev/v1
kind: Pattern
metadata:
  name: paragraph-not-referenced
spec:
  message: "Paragraph {{target.metadata.name}} in namespace {{target.metadata.namespace}} is not managed by any widgets."
  displayName: Paragraph Not Referenced
  category: Architecture
  severity: HIGH
  target:
    kind: Paragraph
    apiVersion: widgets.templates.krateo.io/v1beta1
    filters:
      matchNone:
        - path: "metadata.namespace"
          operator: EQUALS
          values:
            - krateo-system

  dependencies:
    - id: panel
      kind: Panel
      apiVersion: widgets.templates.krateo.io/v1beta1
    - id: column
      kind: Column
      apiVersion: widgets.templates.krateo.io/v1beta1
    - id: row
      kind: Row
      apiVersion: widgets.templates.krateo.io/v1beta1
      
  relationships:
    matchNone:
      - with: panel
        type: custom
        criteria:
          - targetPath: "metadata.name"
            dependencyPath: "spec.resourcesRefs.items[*].name"
            operator: EQUALS
          - targetPath: "metadata.namespace"
            dependencyPath: "spec.resourcesRefs.items[*].namespace"
            operator: EQUALS
      - with: column
        type: custom
        criteria:
          - targetPath: "metadata.name"
            dependencyPath: "spec.resourcesRefs.items[*].name"
            operator: EQUALS
          - targetPath: "metadata.namespace"
            dependencyPath: "spec.resourcesRefs.items[*].namespace"
            operator: EQUALS
      - with: row
        type: custom
        criteria:
          - targetPath: "metadata.name"
            dependencyPath: "spec.resourcesRefs.items[*].name"
            operator: EQUALS
          - targetPath: "metadata.namespace"
            dependencyPath: "spec.resourcesRefs.items[*].namespace"
            operator: EQUALS
```
