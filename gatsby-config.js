module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://portfolio-eight-phi-69.vercel.app/blog`,
    // Your Name
    name: 'Connor Moffatt',
    // Main Site Title
    title: `Connor Moffatt || Game Developer`,
    // Description that goes under your name in main bio
    description: `Certified idiot.`,
    // Optional: Twitter account handle
    author: `@Connor__Moffatt`,
    // Optional: Github account URL
    github: `https://github.com/FatCat1978`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/connor-moffatt-b00a55180/`,
    // Content of the About Me section
    about: `Hello. I'm a game developer who greatly enjoys learning new technologies, tinkering with existing ones, and - in general, making things - ranging from systems in Video games, to physical devices that can sit on my desk. In my spare time, I'm probably either playing games, or neck deep in a project that may or may not be related to games.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Dungeon Baller',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Paint Slurper',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Cold War',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ConnorOids',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Asteroids',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Boids',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'NBCC',
        description: 'Information Technology: Electronic Game Development | 2020 -> 2022',
        link: 'https://nbcc.ca/programs-courses/program-details?baseCurriculumId=c553d7a7-c12b-4eef-8591-552124a7e0df',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Python, C#, C++, LUA, ',
      },
      {
        name: 'Other',
        description:
          'Unity, BYOND, Blender, Fusion360, Office Suite, Photoshop, Git',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
