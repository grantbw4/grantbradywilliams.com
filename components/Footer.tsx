export default function Footer() {
  return (
    <footer className="border-t border-surface mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center text-text-secondary text-sm">
          © {new Date().getFullYear()} Grant Williams. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
