import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "2026 Midterms Forecast",
      description: "Building a statistical model to forecast the 2026 U.S. midterm elections using polling data, economic indicators, and historical trends. Weekly methodology updates and predictions.",
      tags: ["Python", "R", "Statistical Modeling", "Political Data Science"],
      link: "#",
      isComingSoon: true,
      category: "blog" as const,
    },
    {
      title: "2024 Presidential Election Blog",
      description: "Weekly forecasting blog analyzing the 2024 presidential election. Built with R, featuring data visualizations, polling analysis, and probabilistic predictions.",
      tags: ["R", "Statistical Modeling", "Data Visualization", "Forecasting"],
      link: "https://grantbw4.github.io/election-blog/",
      external: true,
      category: "blog" as const,
    },
    {
      title: "Senior Thesis with Professor Raj Chetty",
      description: "Harvard Statistics Department senior thesis under Professor Raj Chetty and Matthew Staiger exploring the spatial relationship between Latter-day Saint adherence, upward mobility, and social capital using areal interpolation and spatial regression models. Sample available here; email me for full access.",
      tags: ["Spatial Statistics", "R", "Social Capital", "Economic Mobility"],
      link: "https://drive.google.com/file/d/1usLG2Rx_HCd5rbTRvsgQsT3cCtX73kE4/view?usp=sharing",
      external: true,
      category: "paper" as const,
    },
    {
      title: "Blurtle",
      description: "A timed word-guessing game with unlimited guesses. Like Wordle but with a twist. Built with vanilla JavaScript and deployed on GitHub Pages.",
      tags: ["JavaScript", "HTML/CSS", "Game Development"],
      link: "https://grantbw4.github.io/blurtle/",
      external: true,
      category: "project" as const,
    },
    {
      title: "Social Capital and Psychological Well-Being",
      description: "Final paper for Professor Matthew Basilico's course, Economics of Mental Health and Homelessness, exploring the relationship between social capital and psychological well-being.",
      tags: ["Economics", "Mental Health", "Research"],
      link: "https://drive.google.com/file/d/1i4HCVBh-P0Slin6bFnoutNCuzbk14S6b/view?usp=sharing",
      external: true,
      category: "paper" as const,
    },
    {
      title: "Adaptive Cluster Sampling Tutorial",
      description: "Comprehensive R tutorial on Adaptive Cluster Sampling methods, created as a teaching resource for advanced sampling techniques.",
      tags: ["R", "Statistics", "Tutorial", "Sampling Methods"],
      link: "https://drive.google.com/file/d/1t1TQDjaFovYIwl19l0OhLlfEK-RgrG5q/view?usp=sharing",
      external: true,
      category: "project" as const,
    },
    {
      title: "Charitable Giving and Tax Policy",
      description: "Economics seminar paper examining the elasticity of charitable giving with respect to marginal tax rates among top earners, moderated by religious observance.",
      tags: ["Economics", "Panel Data", "Policy Analysis"],
      link: "https://docs.google.com/document/d/1MvOc_Tahu2fCXfNh7nW5UjVXqlUygXWa/edit?usp=sharing",
      external: true,
      category: "paper" as const,
    },
    {
      title: "Harvard Housing Day Analysis",
      description: "Data journalism article for the Harvard Open Data Project exploring the history and patterns of Housing Day videos through data visualization.",
      tags: ["Data Journalism", "Visualization", "Python"],
      link: "https://www.hodp.org/project/housing-day-videos",
      external: true,
      category: "blog" as const,
    },
    {
      title: "Political Ideology Prediction",
      description: "Multinomial logistic regression analysis exploring relationships between demographic features and political ideology using survey data.",
      tags: ["R", "Logistic Regression", "Political Science"],
      link: "https://docs.google.com/document/d/1xI7pj2gIwon_kEdJR2JPrjIPUWQCcPXss8bIhJgg_Qs/edit?usp=sharing",
      external: true,
      category: "paper" as const,
    },
    {
      title: "Airbnb Price Prediction",
      description: "Machine learning models to predict Airbnb prices in Europe using Python. Explored various algorithms including random forests, gradient boosting, and kNN regression.",
      tags: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
      link: "https://docs.google.com/presentation/d/10-f9Vqm0-dSMjAkCMuLG5Y9qK4V41IJW/edit?usp=sharing&ouid=102699812166768759974&rtpof=true&sd=true",
      external: true,
      category: "project" as const,
    },
    {
      title: "Social Mobility R Package",
      description: "R package for computing upward social mobility metrics using Raj Chetty's Opportunity Atlas data. Open-source tool for economic mobility research.",
      tags: ["R", "Package Development", "Economics", "Open Source"],
      link: "https://github.com/harvard-stat108s23/project2-group5",
      external: true,
      category: "project" as const,
    },
    {
      title: "Youth Suicide Rates Dashboard",
      description: "Interactive Shiny dashboard visualizing youth suicide rates across the United States, featuring chloropleth maps, time series analysis, and demographic breakdowns.",
      tags: ["R", "Shiny", "Data Visualization", "Public Health"],
      link: "https://p2d7zj-grantbw4.shinyapps.io/project_draft/",
      external: true,
      category: "project" as const,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
        <span className="hero-heading inline-block cursor-default">Portfolio</span>
      </h1>
      <p className="text-lg sm:text-xl text-text-secondary mb-8 sm:mb-12">
        A collection of data science problems I've tackled, research papers I've written, and side projects I've worked on.
      </p>

      <div className="grid gap-4 sm:gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            external={project.external}
            isComingSoon={project.isComingSoon}
            category={project.category}
          />
        ))}
      </div>
    </div>
  )
}
