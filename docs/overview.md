---
sidebar_position: 1
slug: /
---

# What is KubePattern?

**KubePattern** is a cloud-native framework, written in Go, designed to analyze Kubernetes Resources Interactions and spot violations.

It is useful to identify Custom Resources that deviate from architectural principles and to suggest the correct pattern to apply as a remedy.

## How KubePattern works

**KubePattern** helps you identify "smells" (anti-patterns or design flaws) in your cluster defined by the applied [Patterns](core/patterns).

### The Process

1. **Define Patterns**: You define architectural patterns as Kubernetes Custom Resources ([Patterns](core/patterns)) in your cluster
2. **Apply Patterns**: You apply these patterns to your cluster.
3. **Retrieve Patterns**: KubePattern retrieves the defined patterns from the cluster
4. **Retrieve Resources**: KubePattern analyzes your cluster configuration
5. **Detect**: Identifies targets resources based on the defined patterns
6. **Warn**: Generates reports with severity levels and actionable recommendations
7. **Remediate**: Once a smell is resolved, Smells are automatically removed from the cluster

::: info

Unlike traditional linters that only verify field presence, KubePattern identifies complex patterns and relationships between resources, providing contextual suggestions with reference documentation.

:::

## Pattern as Code
KubePattern uses a **Pattern-as-Code** approach, allowing you to define architectural rules and best practices as Kubernetes Custom Resources ([Patterns](core/patterns)). This means you can codify your desired architecture directly within the cluster and have KubePattern automatically detect deviations from it.

## Comprehensive Reporting

KubePattern generates detailed reports of detected smells, including severity levels, affected resources, and actionable recommendations. These reports are stored as Kubernetes Custom Resources ([Smells](core/smells)), allowing you to query and manage them using standard Kubernetes tools.

## KubePattern & Kubernetes Patterns

### What is a Kubernetes Pattern?

**Kubernetes design patterns** are **reusable solutions** to common problems encountered when designing, implementing, and managing resources within a Kubernetes environment.

The primary goal of these patterns is to help developers and architects build systems that are more *reliable*, *scalable*, *secure*, *maintainable*.

> Kubernetes Patterns are best practices, policies, and known techniques used to improve cluster quality and address recurring problems.


