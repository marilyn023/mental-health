import React from "react"
import { Link } from "gatsby"

export default function BlogCards({ posts }) {
  return (
    <section className="my-32" id="story">
      <div className="mx-auto my-10 w-72 text-center">
        <span className="font-bold text-4xl text-secondary">Stories</span>
        <p className="opacity-40 my-1">
          Different stories and tips, guides on how to cope up depression
        </p>
      </div>
      <div className="overflow-hidden grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {posts.map(type => (
          <Link
            to={type.fields.slug}
            itemProp="url"
            key={type.fields.slug}
            className="relative cursor-pointer transition-all transform hover:translate-y-2 h-96 w-full shadow-lg rounded-lg bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url("${type.frontmatter.thumbnail.childImageSharp.fluid.src}")`,
            }}
          >
            <div className="text-white text-gray-200 bg-gradient-to-t from-gray-900 w-full h-48 absolute bottom-0 rounded-b-lg px-4 py-14">
              <p className="font-bold truncate-header">
                {type.frontmatter.title || type.fields.slug}
              </p>
              <p className="leading-5 text-sm truncate-text mt-1.5">
                {type.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="my-16 text-center">
        <Link
          to="/blog"
          className="bg-primary px-8 py-2 rounded-md text-white hover:text-white hover:opacity-50"
        >
          Explore more
        </Link>
      </div>
    </section>
  )
}
