---
sidebar_position: 1
slug: /
---

# Overview

## What is KubePattern?

**KubePattern** is a Kubernetes smells detection engine written in Go, that helps you identify and fix anti-patterns in your Kubernetes cluster.

It is useful to identify Custom Resources that deviate from architectural principles and to suggest the correct pattern to apply as a remedy.

### How KubePattern works

**KubePattern** helps you identify "smells" (anti-patterns or design flaws) in your cluster, which are defined in the **pattern-as-code** file. It then suggests you *apply* the correct **pattern** to resolve them.


How KubePattern works
1. **Scan**: KubePattern analyzes your cluster configuration
2. **Detect**: Identifies smells based on the defined patterns
3. **Suggest**: Recommends appropriate patterns based on best practices

::: info

Unlike traditional linters that only verify field presence, KubePattern identifies complex patterns and relationships between resources, providing contextual suggestions with reference documentation.

:::

### Pattern as Code
KubePattern uses a **Pattern-as-Code** approach, allowing you to define architectural rules and best practices as Kubernetes Custom Resources ([Patterns](core/patterns)). This means you can codify your desired architecture directly within the cluster and have KubePattern automatically detect deviations from it.

### Comprehensive Reporting

KubePattern generates detailed reports of detected smells, including severity levels, affected resources, and actionable recommendations. These reports are stored as Kubernetes Custom Resources ([Smells](core/smells)), allowing you to query and manage them using standard Kubernetes tools.

## KubePattern & Kubernetes Patterns

### What is a Kubernetes Pattern?

**Kubernetes design patterns** are **reusable solutions** to common problems encountered when designing, implementing, and managing resources within a Kubernetes environment.

The primary goal of these patterns is to help developers and architects build systems that are more *reliable*, *scalable*, *secure*, *maintainable*.

> Kubernetes Patterns are best practices, policies, and known techniques used to improve cluster quality and address recurring problems.


