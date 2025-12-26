// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KubePattern',
  tagline: 'Kubernetes Pattern Recognition Made Simple',
  favicon: 'img/kubepattern.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.kubepattern.dev',
  baseUrl: '/',

  organizationName: 'kubepattern',
  projectName: 'kubepattern-doc',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/kubepattern/doc/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/kubepattern/doc/tree/main/',
        },
        pages: {
          // Enable pages for privacy and terms
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/kubepattern-social-card.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'KubePattern',
        logo: {
          alt: 'KubePattern Logo',
          src: 'img/kubepattern.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'kubepatternSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/getting-started',
            label: 'Getting Started',
            position: 'left',
          },
          {
            to: '/docs/kubepattern-core/api',
            label: 'API Reference',
            position: 'left',
          },
          {
            href: 'https://github.com/kubepattern/registry',
            label: 'Pattern Registry',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/kubepattern/kubepattern',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Overview',
                to: '/docs/overview',
              },
              {
                label: 'API Reference',
                to: '/docs/kubepattern-core/api',
              },
              {
                label: 'Pattern Catalog',
                href: 'https://github.com/kubepattern/registry',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kubepattern/kubepattern',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/kubepattern/kubepattern/issues',
              },
              {
                label: 'Contributing',
                to: '/docs/contributing',
              },
              {
                label: 'Roadmap',
                to: '/docs/roadmap',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/GroppoGabr82712',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/gabriele-groppo-44ab8a238/',
              },
              {
                label: 'Author',
                href: 'https://gabrielegroppo.it',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'License',
                href: 'https://github.com/kubepattern/kubepattern/blob/main/LICENSE',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'Terms of Service',
                to: '/terms',
              },
            ],
          },
        ],
        logo: {
          alt: 'KubePattern Logo',
          src: 'img/kubepattern.svg',
          href: 'https://kubepattern.dev',
          width: 50,
          height: 50,
        },
        copyright: `
          <div style="margin-top: 1rem;">
            Copyright © ${new Date().getFullYear()} KubePattern. Built with Docusaurus.<br/>
            Open Source under <a href="https://github.com/kubepattern/kubepattern/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Apache 2.0 License</a>
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'java', 'shell-session'],
      },
      announcementBar: {
        id: 'star_on_github',
        content:
          '⭐️ If you like KubePattern, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kubepattern/kubepattern">GitHub</a>! ⭐️',
        backgroundColor: '#326CE5',
        textColor: '#ffffff',
        isCloseable: true,
      },
    }),

  scripts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js',
      async: true,
    },
  ],
};

export default config;