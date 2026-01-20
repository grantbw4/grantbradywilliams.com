import Link from 'next/link'

type ProjectCategory = 'blog' | 'paper' | 'project'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  external?: boolean
  isComingSoon?: boolean
  category?: ProjectCategory
}

const categoryConfig: Record<ProjectCategory, { label: string; color: string; bgColor: string }> = {
  blog: { label: 'Blog', color: '#6b9bd1', bgColor: 'rgba(107, 155, 209, 0.15)' },
  paper: { label: 'Paper', color: '#a78bda', bgColor: 'rgba(167, 139, 218, 0.15)' },
  project: { label: 'Project', color: '#7bc47f', bgColor: 'rgba(123, 196, 127, 0.15)' },
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  external = false,
  isComingSoon = false,
  category,
}: ProjectCardProps) {
  const content = (
    <div className={`p-4 sm:p-6 bg-surface rounded-lg border border-surface hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 ${!isComingSoon ? 'cursor-pointer' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {category && (
            <span
              className="px-2 py-0.5 text-xs font-medium rounded"
              style={{
                color: categoryConfig[category].color,
                backgroundColor: categoryConfig[category].bgColor,
              }}
            >
              {categoryConfig[category].label}
            </span>
          )}
          <h3 className="text-lg sm:text-xl font-semibold text-text-primary">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {isComingSoon && (
            <span className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full">
              Coming Soon
            </span>
          )}
          {external && !isComingSoon && (
            <svg className="w-5 h-5 text-text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </div>
      </div>
      <p className="text-sm sm:text-base text-text-secondary mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-background text-text-secondary rounded-md"
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
