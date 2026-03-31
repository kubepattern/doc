---
sidebar_position: 3
id: roadmap
title: Roadmap
slug: /roadmap
---
# Roadmap
Welcome to our public roadmap! This is where you can see what I am working on, what I have planned for the near future, and what ideas I am considering.

:::warning

This roadmap represents my current vision and priorities. It is not a delivery promise, and features or timelines may change based on user feedback, market opportunities, or technical challenges.

:::
---

## 🚀 Now (In Progress)
*The features I am currently working on, which will be released in the next few weeks.*
- [ ] Ownership and LabelSelector Relationships support: Enhance pattern definitions to allow specifying ownership and label selector relationships between resources, enabling more complex and accurate pattern detection.
## 🎯 Next (Planned)
*The features I am planning to work on after the current ones are completed.*
- [ ] Lazy Fetching: Optimize performance by only fetching resources that are relevant to the patterns being analyzed.
- [ ] Analysis General Report: Introduce a report containing all the detected smells in a single place, with filtering and sorting capabilities.
- [ ] Auto Remove Smells: Implement a mechanism to automatically remove smells that are no longer relevant, such as those that have been resolved or are outdated.
## 🤔 Later (Considering)
*The features I am considering for future development, but have not yet committed to.*
- [ ] AI-Powered Pattern Creation: Explore the use of AI to assist users in creating new patterns based on common architectural issues and best practices.
- [ ] AI-Powered Smell Resolution Suggestions: Provide AI-generated suggestions for resolving detected smells, helping users understand how to fix architectural issues in their clusters.
- [ ] AI-Powered Step in the Loop: Integrate AI into the analysis process to provide real-time insights and recommendations as patterns are being evaluated.
- [ ] CI/CD Integration: Develop integrations with popular CI/CD tools to allow automatic analysis of Kubernetes manifests during the deployment process, ensuring that architectural issues are caught early.
- [ ] Make KubePattern a Kubernetes Operator: Transform KubePattern into a Kubernetes Operator to enable more seamless integration with Kubernetes clusters and provide a more native experience for users.

## ✅ Recently Launched
*The big features recentely launched 🚀*
- [x] Initial Release: Launched the first version of KubePattern, introducing the core concept of Pattern-as-Code and providing a set of predefined patterns for detecting architectural issues in Kubernetes clusters.
- [x] Moved from KubePattern Java to Go: Rewrote the entire codebase from Java to Go, improving performance, reducing resource consumption, and enhancing the overall user experience.