import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  external?: boolean
  isComingSoon?: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  external = false,
  isComingSoon = false,
}: ProjectCardProps) {
  const content = (
    <div className={`p-6 bg-surface rounded-lg border border-surface hover:border-accent transition-all ${!isComingSoon ? 'cursor-pointer' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
        {isComingSoon && (
          <span className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full">
            Coming Soon
          </span>
        )}
        {external && !isComingSoon && (
          <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </div>
      <p className="text-text-secondary mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-background text-text-secondary rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )

  if (isComingSoon) {
    return content
  }

  if (external) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <Link href={link}>{content}</Link>
}
