---
sidebar_position: 3
id: registry
title: The Pattern Registry
slug: /core/registry
---

# The Pattern Registry

The **KubePattern Registry** is a centralized repository where Pattern-as-Code (PaC) definitions are stored, versioned, and shared. 

KubePattern defines patterns as native Kubernetes Custom Resources (`kubepattern.dev/v1`, `kind: Pattern`), the registry acts as a collection of **YAML manifests** and their corresponding documentation. The registry allows teams to share architectural intent, detection logic, and remediation strategies in a standardized, machine-readable format.

---

## How KubePattern Uses the Registry

KubePattern interacts with the registry to enforce best practices automatically:

1. **Load Patterns**: KubePattern fetches the `Pattern` YAML manifests from the configured registry URL.
2. **Scan Cluster**: It analyzes your Kubernetes resources based on the `target` and `dependencies` defined in the patterns.
3. **Evaluate Relationships**: It applies the filters and relationship criteria to match the cluster state against the pattern definitions.
4. **Detect & Report**: When a deviation or "Smell" is identified, KubePattern generates reports or triggers alerts based on the defined `severity` and custom `message`.

:::note
Patterns can be applied directly to the cluster as Custom Resources. Registry helps you manage and version these patterns, but they are not required to be applied from the registry. You can create and apply custom patterns directly in your cluster as well.
:::

---

## Registry Structure

The official KubePattern registry organizes patterns in a straightforward directory structure. All pattern definitions are standard Kubernetes YAML files.

```text
kubepattern-registry/
├── definitions/
│   ├── page-not-referenced.yaml
│   ├── paragraph-not-referenced.yaml
│   └── ...
├── doc/
│   ├── page-not-referenced.md
│   ├── paragraph-not-referenced.md
│   └── ...
├── test/
|   ├── page-not-referenced.test.yaml
|   └── ...
└── K8sPatternCRD.yaml

```

- `definitions/`: Contains the Pattern-as-Code YAML manifests that define the patterns, their detection logic, and remediation strategies.
- `doc/`: Contains human-readable documentation for each pattern, explaining the problem it addresses, the rationale behind it, and how to apply it.
- `test/`: Contains test cases and example manifests that can be used to validate the pattern's detection logic and ensure it works as intended.