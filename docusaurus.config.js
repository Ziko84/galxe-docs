// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Project Galaxy Developer Documentation",
  // TODO: Update url and baseUrl once we move to custom domain
  url: "https://docs.galaxy.eco",
  baseUrl: "/galaxy-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ProjectGalaxyHQ",
  projectName: "galaxy-docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "developer", // Serve the docs at the site's root
          path: "docs-developer",
          id: "default",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
          editUrl: "https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   content: "wow",
      // },
      navbar: {
        logo: {
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "into-the-galaxy/overview",
            docsPluginId: "product",
            label: "Product",
            position: "left",
          },
          {
            type: "doc",
            docId: "getting-started/introduction",
            label: "Developer",
            position: "left",
          },
          {
            href: "https://projectgalaxyhq.github.io/galaxy-proposals/",
            label: "Proposals",
            position: "left",
          },
          {
            href: "https://galaxy.eco",
            label: "Home",
            position: "right",
          },
          {
            href: "https://help.galaxy.eco/",
            label: "Help Center",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Governance",
            items: [
              {
                label: "Forum",
                href: "https://forum.galaxy.eco/",
              },
              {
                label: "Vote",
                href: "https://vote.galaxy.eco/",
              },
              {
                label: "Proposals",
                href: "https://github.com/ProjectGalaxyHQ/galaxy-proposals",
              },
            ],
          },
          {
            title: "Developer",
            items: [
              {
                label: "Github",
                href: "https://github.com/ProjectGalaxyHQ",
              },
              {
                label: "Developer Docs",
                to: "developer/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/projectgalaxy",
              },
              {
                label: "Twitter",
                href:
                  "https://twitter.com/intent/follow?screen_name=ProjectGalaxyHQ",
              },
              {
                label: "Telegram",
                href: "https://t.me/ProjectGalaxyHQ",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Help Center",
                href: "https://help.galaxy.eco/",
              },
              {
                label: "Blog",
                href: "https://blog.galaxy.eco/",
              },
              {
                label: "Newsletter",
                href: "http://newsletter.galaxy.eco/",
              },
            ],
          },
          {
            title: "About Us",
            items: [
              {
                label: "Home",
                href: "https://galaxy.eco/",
              },
              {
                label: "Brand Assets",
                href: "https://bulletlabs.com/project-galaxy-brand",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project Galaxy`,
      },
      prism: {
        darkTheme: darkCodeTheme,
      },
      // docusaurus-plugin-image-zoom
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),

  plugins: [
    [
      "@edno/docusaurus2-graphql-doc-generator",
      {
        schema: "https://graphigo.prd.galaxy.eco/query",
        // docs will be generated under rootPath/baseURL
        rootPath: "./docs/4-graphql-api",
        baseURL: "references",
        // needed because we use 4-graphql-api with alias graphql-api
        linkRoot: "../..",
        loaders: {
          UrlLoader: "@graphql-tools/url-loader",
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "product",
        path: "docs-product",
        routeBasePath: "/",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        indexDocs: true,
        indexBlog: false,
        hashed: true,
        docsRouteBasePath: "/",
        docsDir: "docs-developer",
      },
    ],
  ],
};

module.exports = config;
