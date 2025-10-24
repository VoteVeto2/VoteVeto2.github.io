// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "For my latest resume, click the PDF icon above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-verhoogde-tegemoetkoming-increased-reimbursemnet",
      
        title: "Verhoogde Tegemoetkoming(Increased Reimbursemnet)",
      
      description: "All you need to know about Verhoogde Tegemoetkoming",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Verhoogde_Tegemoetkoming/";
        
      },
    },{id: "post-pitch-for-thesis-topic",
      
        title: "Pitch For Thesis Topic",
      
      description: "this is for the Science Communication project",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Pitch/";
        
      },
    },{id: "post-knowledge-distillation-putting-ai-giants-in-your-pocket",
      
        title: "Knowledge Distillation: putting AI Giants in Your Pocket",
      
      description: "Intro to LLM",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Knowledge-Distill/";
        
      },
    },{id: "post-analysis-ii-tutorial-notes",
      
        title: "Analysis II Tutorial Notes",
      
      description: "Tutorial Notes on Topology and Spaces for entry level analysis",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Analysis_Tutorial/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%6E%79%75.%79%61%6E%67@%73%74%75%64%65%6E%74.%6B%75%6C%65%75%76%65%6E.%62%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/VoteVeto2", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xinyu-christopher-yang-7a688825a", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
