import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "KubePattern",
  description: "The Architecture Validator made for Kubernetes",
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/img/kubepattern.svg' }]
  ],

  sitemap: {
    hostname: 'https://kubepattern.dev'
  },

  rewrites: {
    'docs/overview.md': 'docs/index.md'
  },

  themeConfig: {
    logo: '/img/kubepattern.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kubepattern/kubepattern' },
      { icon: 'twitter', link: 'https://x.com/GroppoGabr82712' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/gabriele-groppo-44ab8a238/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/docs' },
          { text: 'Getting Started', link: '/docs/getting-started' },
          { text: 'Roadmap', link: '/docs/roadmap' }
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Analysis', link: '/docs/core/analysis' },
          { text: 'Pattern as Code', link: '/docs/core/pattern-as-code' },
          { text: 'Registry', link: '/docs/core/registry' },
          { text: 'Smells', link: '/docs/core/smells' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Contributions', link: '/docs/contributing' },
          { text: 'Contacts', link: '/docs/contacts' },
        ]
      }
    ],

    footer: {
      message: 'Open Source under <a href="https://github.com/kubepattern/kubepattern/blob/main/LICENSE" target="_blank">Apache 2.0 License</a>.<br><a href="/privacy">Privacy Policy</a> &nbsp;|&nbsp; <a href="/terms">Terms of Service</a>',
      copyright: `Copyright © ${new Date().getFullYear()} KubePattern.`
    },

    search: {
      provider: 'local'
    }
  }
})