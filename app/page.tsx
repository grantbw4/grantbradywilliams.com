import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Hero Section */}
      <section className="mb-16 sm:mb-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
          <span className="hero-heading inline-block cursor-default">Hi! I'm Grant Brady Williams!</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 sm:mb-8 leading-relaxed">
          Data scientist at the intersection of
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          econometrics, statistics, and machine learning.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/grantbradywilliams/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/grantbw4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
          <span className="hero-heading inline-block cursor-default">Featured Work</span>
        </h2>
        <div className="grid gap-6 sm:gap-8">
          <ProjectCard
            title="2026 Midterms Forecast"
            description="Building a Bayesian Hierarchical Model model to forecast the 2026 U.S. midterm elections. Weekly updates on methodology, polling data analysis, and predictions. Coming Spring 2026."
            tags={['Python', 'R', 'Statistical Modeling', 'Political Data Science']}
            link="#"
            isComingSoon={true}
            category="blog"
          />
          <ProjectCard
            title="2024 Presidential Election Blog"
            description="Weekly forecasting blog analyzing the 2024 presidential election using polling data, economic indicators, and historical trends. Built with R and deployed as a static site."
            tags={['R', 'Statistical Modeling', 'Data Visualization', 'Forecasting']}
            link="https://grantbw4.github.io/election-blog/"
            external={true}
            category="blog"
          />
          <ProjectCard
            title="Senior Thesis with Professor Raj Chetty"
            description="Harvard Statistics Department senior thesis under Professor Raj Chetty and Matthew Staiger exploring the spatial relationship between Latter-day Saint adherence, upward mobility, and social capital. Sample available here; email me for full access."
            tags={['Spatial Statistics', 'R', 'Social Capital', 'Economic Mobility']}
            link="https://drive.google.com/file/d/1usLG2Rx_HCd5rbTRvsgQsT3cCtX73kE4/view?usp=sharing"
            external={true}
            category="paper"
          />
          <ProjectCard
            title="Blurtle"
            description="A timed word-guessing game with unlimited guesses. Like Wordle, but better (totally unbiased opinion). Built with vanilla JavaScript and deployed on GitHub Pages."
            tags={['JavaScript', 'HTML/CSS', 'Game Development']}
            link="https://grantbw4.github.io/blurtle/"
            external={true}
            category="project"
          />
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-surface hover:bg-accent hover:text-background transition-all duration-300 rounded-md hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </div>
  )
}
