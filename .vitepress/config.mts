import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "KubePattern",
  description: "The Architecture Validator made for Kubernetes",
  cleanUrls: true,

  head: [
    // 1. Favicon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/img/kubepattern.svg' }],

    // 2. Colore del tema per i browser mobile (puoi cambiarlo col tuo brand color)
    ['meta', { name: 'theme-color', content: '#326CE5' }],

    // 3. Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'KubePattern | The Architecture Validator' }],
    ['meta', { property: 'og:description', content: 'KubePattern helps you manage Custom Resources interactions in your clusters, ensuring best practices and improving maintainability.' }],
    ['meta', { property: 'og:url', content: 'https://kubepattern.dev/' }],
    // Nota per og:image: I social preferiscono immagini PNG/JPG 1200x630px. 
    // Se hai un banner, inseriscilo in public/img/ e aggiorna questo link!
    ['meta', { property: 'og:image', content: 'https://kubepattern.dev/img/kubepattern.svg' }],

    // 4. Twitter Cards
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'KubePattern | The Architecture Validator' }],
    ['meta', { name: 'twitter:description', content: 'The open-source Architecture validator made for Kubernetes.' }],
    ['meta', { name: 'twitter:image', content: 'https://kubepattern.dev/img/kubepattern.svg' }]
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
          { text: 'Patterns', link: '/docs/core/patterns' },
          { text: 'Smells', link: '/docs/core/smells' },
          { text: 'Registry', link: '/docs/core/registry' }
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