import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
        <span className="hero-heading inline-block cursor-default">About Me</span>
      </h1>
      
      {/* Headshot */}
      <div className="mb-8 sm:mb-12">
        <Image
          src="/images/headshot.jpg"
          alt="Grant Brady Williams"
          width={300}
          height={300}
          className="rounded-lg w-48 h-48 sm:w-[300px] sm:h-[300px] object-cover"
        />
      </div>

      <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-text-secondary leading-relaxed">

      <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-8 sm:mt-12 mb-4 sm:mb-6">
          <span className="hero-heading inline-block cursor-default">Background</span>
        </h2>

        <p>
          I graduated Magna Cum Laude with High Honors from Harvard, double concentrating in
          Statistics and Economics. My time there shaped how I think about using data to
          understand human behavior and solve real problems—whether that's predicting elections,
          understanding what drives economic mobility, or figuring out why people do (or don't)
          act on their values.
        </p>

        <p>
          At Harvard, I worked as a course assistant for Raj Chetty's "Using Big Data to Solve
          Social Problems," explored the gap between beliefs and behavior on climate change with
          game theorist Erez Yoeli, and studied the effects of discretionary government spending on Mexican electoral outcomes with
          Professor Nair at the Kennedy School.
        </p>

        <p>
          That thread—using rigorous quantitative methods to understand behavior and inform
          decisions—runs through everything I've done since. I've built causal inference pipelines on Walmart's Economist
          Team under Professor John List, researched banking surveys at the Federal Reserve Bank
          of Dallas, and analyzed fiscal policy at the Committee for a Responsible Federal Budget.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-8 sm:mt-12 mb-4 sm:mb-6">
          <span className="hero-heading inline-block cursor-default">Current Role</span>
        </h2>

        <p>
          Now, I'm a data scientist at Tesla working on demand and capacity forecasting. I'm
          passionate about the environment and believe deeply in leveraging technology to
          accelerate sustainable abundance for all.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-8 sm:mt-12 mb-4 sm:mb-6">
          <span className="hero-heading inline-block cursor-default">What I'm Working On</span>
        </h2>

        <p>
          Currently, I'm building a statistical model to forecast the 2026 U.S. midterm elections,
          combining polling data, economic indicators, and historical trends. This project builds
          on my 2024 presidential election forecasting work and represents an ongoing exploration
          of political data science and probabilistic modeling.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-8 sm:mt-12 mb-4 sm:mb-6">
          <span className="hero-heading inline-block cursor-default">Outside of Work</span>
        </h2>

        <p>
        When I'm not working with data, I'm probably running, at CrossFit, or out on a hike.
        I'm also a huge music fan—odds are good I'm reading a Pitchfork album review right now—and
        I love audiobooks, writing, and exploring new restaurants. If you know a great Mexican
        spot in San Francisco, I want to hear about it!
        </p>
        
        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-8 sm:mt-12 mb-4 sm:mb-6">
          <span className="hero-heading inline-block cursor-default">Find Me Elsewhere</span>
        </h2>
        
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-lg">
          <a
            href="https://goodreads.com/grantbradywilliams"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-surface rounded-lg hover:border-accent border border-surface transition-all flex flex-col items-center gap-1 sm:gap-2 group"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary group-hover:text-accent transition-colors group-hover:scale-110 transform" viewBox="0 0 448 512" fill="currentColor">
              <path d="M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8.3-1.2-.5-1.6-1.2-9.6-20.7-35.9-46.3-76-46-51.9.4-87.2 31.2-100.6 77.8-4.3 14.9-5.8 30.1-5.5 45.6 1.7 77.9 45.1 117.8 112.4 115.2 28.9-1.1 54.5-17 69-45.2.5-1 1.1-1.9 1.7-2.9.2.1.4.1.6.2.3 3.8.2 30.7.1 34.5-.2 14.8-2 29.5-7.2 43.5-7.8 21-22.3 34.7-44.5 39.5-17.8 3.9-35.6 3.8-53.2-1.2-21.5-6.1-36.5-19-41.1-41.8-.3-1.6-1.3-1.3-2.3-1.3h-26.8c.8 10.6 3.2 20.3 8.5 29.2 24.2 40.5 82.7 48.5 128.2 37.4 49.9-12.3 67.3-54.9 67.4-106.3z"/>
            </svg>
            <span className="text-sm">Goodreads</span>
          </a>
          <a
            href="https://letterboxd.com/grantbwilliams/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-surface rounded-lg hover:border-accent border border-surface transition-all flex flex-col items-center gap-1 sm:gap-2 group"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary group-hover:text-accent transition-colors group-hover:scale-110 transform" viewBox="0 0 500 500" fill="currentColor">
              <path d="M250 500C111.929 500 0 388.071 0 250S111.929 0 250 0s250 111.929 250 250-111.929 250-250 250z"/>
              <path fill="#00E054" d="M250 500C111.929 500 0 388.071 0 250S111.929 0 250 0s250 111.929 250 250-111.929 250-250 250z" style={{opacity: 0}}/>
              <g fill="#fff">
                <circle cx="150" cy="250" r="65"/>
                <circle cx="250" cy="250" r="65"/>
                <circle cx="350" cy="250" r="65"/>
              </g>
              <circle cx="150" cy="250" r="65" fill="#FF8000"/>
              <circle cx="350" cy="250" r="65" fill="#00E054"/>
              <path d="M200 250c0-20.5 9.5-38.8 24.3-50.7-13.6-9.2-30-14.6-47.6-14.6-47.5 0-86 38.5-86 86s38.5 86 86 86c17.6 0 34-5.4 47.6-14.6-14.8-11.9-24.3-30.2-24.3-50.7v-.4z" fill="#FF8000"/>
              <path d="M300 250c0 20.5-9.5 38.8-24.3 50.7 13.6 9.2 30 14.6 47.6 14.6 47.5 0 86-38.5 86-86s-38.5-86-86-86c-17.6 0-34 5.4-47.6 14.6 14.8 11.9 24.3 30.2 24.3 50.7v.4z" fill="#00E054"/>
              <ellipse cx="250" cy="250" rx="36" ry="50.7" fill="#556677"/>
            </svg>
            <span className="text-sm">Letterboxd</span>
          </a>
          <a
            href="https://substack.com/@grantbradywilliams"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-surface rounded-lg hover:border-accent border border-surface transition-all flex flex-col items-center gap-1 sm:gap-2 group"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary group-hover:text-accent transition-colors group-hover:scale-110 transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
            <span className="text-sm">Substack</span>
          </a>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mt-8 sm:mt-12 mb-4 sm:mb-6">
          <span className="hero-heading inline-block cursor-default">Contact</span>
        </h2>
        
        <p>
          Email me at{' '}
          <span className="text-accent">grantwilliamsaz [at] gmail [dot] com</span>
        </p>
        
        <p className="text-base italic">
          Send me any interesting economics or statistics papers you come across!
          Bonus points if they have to do with politics.
        </p>
      </div>
    </div>
  )
}
