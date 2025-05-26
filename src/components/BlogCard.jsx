import React from 'react'
import { ArrowRight} from 'lucide-react'
import Link from 'next/link'

const blogs = [
  {
    title: "Interior Design Trends That Will Dominate in 2025",
    excerpt: "Explore what’s shaping commercial and retail interiors next year—from material palettes to layout innovations.",
    link: "/blog/interior-design-trends-2025"
  },
  {
    title: "How to Design a Functional Yet Stylish Commercial Kitchen",
    excerpt: "Tips and layout ideas that merge efficiency with aesthetics for restaurants, bakeries, and cloud kitchens.",
    link: "/blog/commercial-kitchen-design"
  },
  {
    title: "Interior Color Psychology: How to Choose the Right Shades for Your Business",
    excerpt: "Learn how color choices impact customer behavior and brand perception in retail and hospitality spaces.",
    link: "/blog/interior-color-psychology"
  }
]

const BlogCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-4 py-10">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="backdrop-blur-md bg-[#292a62] border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{blog.title}</h3>
          <p className="text-sm text-white/70 mb-4">{blog.excerpt}</p>
          <Link
            href={blog.link}
            className="text-yellow-400 inline-flex items-center gap-2 font-medium hover:underline"
          >
            Read more <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogCard
