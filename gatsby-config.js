module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://portfolio-eight-phi-69.vercel.app/blog`,
    // Your Name
    name: 'Connor Moffatt',
    // Main Site Title
    title: `Connor Moffatt || Game Developer`,
    // Description that goes under your name in main bio
    description: `Certified idiot, always working to become a Certified less-idiot.`,
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
          'An unfinished mobile game, taking the idea of "Rougelike minigolf" and running with it. The result? a conceptually fun little game to play when you have a spare minute. Has unity ads integration built in, along with a simple score tracking/streak system. in dire need of an art pass, but it\'s pretty fun.',
        link: 'https://github.com/FatCat1978/RandomLevelBallGame',
      },
      {
        name: 'Paint Slurper',
        description:
          'An incomplete game-jam project about a little dude who loves to slurp paint. First person puzzle game involving the mixed colours of slurped paint, and painting objects in the enviroment by spitting on them - resulting in enviromental changes like doors opening or lights turning on. Never got past the conceptual stage. I did all the programatic work, art was made by Etienne Depris',
        link: 'https://github.com/FatCat1978/Paint-Slurper',
      },
      {
        name: 'Cold War',
        description:
          'A basic, first person shooter made as an academic group project with Joey Smith and Kyle Richardson. Grab snowballs, throw them at your foes. I did a lot of the work on projectiles, commissioning the model, and weapon animations.',
        link: 'https://github.com/FatCat1978/Cold-War',
      },
      {
        name: 'ConnorOids',
        description:
          'An Academic project making use of both the box2d physics library, and the Blit3D openGL framework. A lot of it was experimenting with effects like camera shaking.',
        link: 'https://github.com/FatCat1978/Connorids',
      },
      {
        name: 'Asteroids',
        description:
          'The pinnicle of my time developing 2d games in the box2d Framework. a "fully featured" 2d asteroids-esq shooter, featuring score tracking, splitting targets, and WWyse sounds - though the public repo doesn\'t have those avalible. for ease of compilation',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Auto Email Printer',
        description:
          'A productivity tool made in the .net framework. It connects to a google account, fetches new emails, and sends them to the default windows print utility - in this case, notepad. This allows me to send emails straight to a receipt printer on my desk.',
        link: 'https://github.com/FatCat1978/Auto-Email-Printer',
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
