// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DB-GPT',
  tagline: 'Revolutionizing Database Interactions with Private LLM Technology',
  favicon: 'img/eosphoros.jpeg',

  // Set the production url of your site here
  url: 'http://dbgpt.site',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eosphoros', // Usually your GitHub org/user name.
  projectName: 'DB-GPT', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/eosphoros-ai/DB-GPT/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/eosphoros-ai/DB-GPT/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      defaultClassicDocs: '/docs/getting_started',
      // Replace with your project's social card
      navbar: {
        logo: {
          alt: 'DB-GPT Logo',
          src: 'img/dbgpt_logo.png',
          srcDark: 'img/DB-GPT_LOGO_White.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'DOC',
          },
          {to: '/blog', label: 'BLOG', position: 'right'},
          {
            to: 'https://github.com/eosphoros-ai/DB-GPT',
            label: 'GITHUB',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting_started',
              },
              {
                label: 'Modules',
                to: '/docs/modules',
              },
              {
                label: 'Use Cases',
                to: '/docs/use_cases/sql_generation_and_diagnosis',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/erwfqcMP',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/mirrors/DB-GPT',
              },
              {
                label: 'Github',
                href: 'https://github.com/eosphoros-ai/DB-GPT',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Hacker News',
                href: 'https://news.ycombinator.com/item?id=36038815',
              },
              {
                label: 'Bilibili',
                href: 'https://www.bilibili.com/video/BV1mu411Y7ve/?spm_id_from=333.337.search-card.all.click',
              },
              {
                label: 'Zhihu',
                href: 'https://www.zhihu.com/people/chen-wen-60-40',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DB-GPT`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
