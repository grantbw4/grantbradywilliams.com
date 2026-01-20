import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">About Me</h1>
      
      {/* Headshot */}
      <div className="mb-12">
        <Image
          src="/images/headshot.jpg"
          alt="Grant Williams"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      
      <div className="space-y-8 text-lg text-text-secondary leading-relaxed">
        <p>
          I'm a data scientist at Tesla, where I focus on forecasting and statistical modeling 
          for business planning. My work sits at the intersection of econometrics, statistics, 
          and machine learning, helping inform strategic decisions through data-driven insights.
        </p>
        
        <p>
          I graduated from Harvard with a degree in Statistics, where I developed a passion for 
          applying rigorous quantitative methods to real-world problems. Before joining Tesla, 
          I worked on various projects spanning election forecasting, social mobility analysis, 
          and machine learning applications.
        </p>
        
        <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-6">
          What I'm Working On
        </h2>
        
        <p>
          Currently, I'm building a statistical model to forecast the 2026 U.S. midterm elections, 
          combining polling data, economic indicators, and historical trends. This project builds 
          on my 2024 presidential election forecasting work and represents an ongoing exploration 
          of political data science and probabilistic modeling.
        </p>
        
        <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-6">
          Outside of Work
        </h2>
        
        <p>
          When I'm not working with data, you can find me running, at CrossFit, or hiking. 
          I'm a huge music fan and am probably reading a Pitchfork album review right now. 
          I also love audiobooks and writing in my free time.
        </p>
        
        <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-6">
          Find Me Elsewhere
        </h2>
        
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <a 
            href="https://www.goodreads.com/user/show/placeholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-surface rounded-lg hover:border-accent border border-surface transition-all"
          >
            Goodreads
          </a>
          <a 
            href="https://letterboxd.com/placeholder/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-surface rounded-lg hover:border-accent border border-surface transition-all"
          >
            Letterboxd
          </a>
          <a 
            href="https://substack.com/@grantbradywilliams" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-surface rounded-lg hover:border-accent border border-surface transition-all"
          >
            Personal Writing
          </a>
          <a 
            href="https://www.instapaper.com/p/placeholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-surface rounded-lg hover:border-accent border border-surface transition-all"
          >
            Instapaper
          </a>
        </div>
        
        <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-6">
          Contact
        </h2>
        
        <p>
          Email me at{' '}
          <a href="mailto:grantwilliamsaz@gmail.com" className="text-accent hover:text-accent-hover">
            grantwilliamsaz@gmail.com
          </a>
        </p>
        
        <p className="text-base italic">
          I'm always interested in data science opportunities and collaborations. 
          Feel free to reach out!
        </p>
      </div>
    </div>
  )
}
