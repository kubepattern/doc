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

## How use the registry
To use the KubePattern registry, you can follow these steps:
1. **Browse the Registry**: Explore the available patterns in the registry to find ones that are relevant to your architectural needs.
2. **Select a Pattern**: Choose a pattern that addresses a specific architectural concern or best practice you want to implement.
3. **Apply the Pattern**: Use the provided YAML manifest to apply the pattern to your Kubernetes cluster. This typically involves using `kubectl apply -f <pattern-file.yaml>`.
4. **Monitor and Remediate**: Once the pattern is applied, monitor your cluster for any violations of the pattern. If any issues are detected, follow the remediation steps outlined in the pattern's documentation to resolve them.

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