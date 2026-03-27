---
sidebar_position: 4
id: api
title: API
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

```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: smells.kubepattern.dev
spec:
  group: kubepattern.dev
  names:
    plural: smells
    singular: smell
    kind: Smell
    shortNames:
      - smell
  scope: Namespaced
  versions:
    - name: v1
      served: true
      storage: true
      additionalPrinterColumns:
        - name: Category
          type: string
          description: "Smell category"
          jsonPath: .spec.category
        - name: Severity
          type: string
          description: "Smell severity"
          jsonPath: .spec.severity
        - name: Target Kind
          type: string
          description: "Kind of the target resource"
          jsonPath: .spec.target.kind
        - name: Target Name
          type: string
          description: "Name of the target resource"
          jsonPath: .spec.target.name
        - name: Suppressed
          type: boolean
          description: "Is the smell suppressed"
          jsonPath: .spec.suppress
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              required:
                - name
                - category
              properties:
                name:
                  type: string
                  description: "Smell name"
                category:
                  type: string
                  description: "Smell category (e.g., Security, Performance, Maintainability)."
                reference:
                  type: string
                  description: "Link to Smell docs and remediation Pattern."
                pattern:
                  type: object
                  properties:
                    name:
                      type: string
                      description: "Pattern name that generated this smell."
                    version:
                      type: string
                      description: "Pattern version."
                message:
                  type: string
                  description: "Smell warning."
                severity:
                  type: string
                  description: "Smell severity (LOW, MEDIUM, HIGH, CRITICAL)."
                  enum:
                    - LOW
                    - MEDIUM
                    - HIGH
                    - CRITICAL
                suppress:
                  type: boolean
                  description: "Resource to suppress (false positives)"
                target:
                  type: object
                  required:
                    - apiVersion
                    - kind
                    - uid
                    - name
                  properties:
                    apiVersion:
                      type: string
                      description: "Kubernetes resource API version."
                    kind:
                      type: string
                      description: "Kubernetes resource kind."
                    name:
                      type: string
                      description: "Kubernetes resource name."
                    namespace:
                      type: string
                      description: "Kubernetes resource namespace."
                    uid:
                      type: string
                      description: "Kubernetes resource UID."

```