import React from "react"
import { Link } from "gatsby"

export default function BlogNewPost({ posts }) {
  const date = new Date()
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const months = date.getMonth()
  const day = date.getDate()
  const year = date.getFullYear()

  const dateToday = Months[months] + " " + day + "," + year

  return (
    <ol className="list-none gap-4 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const isCheckDate = dateToday === post.frontmatter.date

        console.log(isCheckDate)
        return (
          <Link
            to={post.fields.slug}
            itemProp="url"
            key={post.fields.slug}
            className="rounded-lg"
          >
            <article itemScope itemType="http://schema.org/Article">
              <section className="flex items-center h-36 max-w-2xl">
                <div>
                  <div>
                    <div className="truncate-text w-96">
                      <span className="text-2xl font-bold m-0 text-black">
                        {title}
                      </span>
                    </div>
                  </div>
                  <section>
                    <p
                      className="truncate-title text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <small className="mt-4 text-sm flex items-center gap-3 opacity-50">
                      {post.frontmatter.date}
                    </small>
                  </section>
                </div>
                <div
                  className="w-52 h-32 hidden sm:block object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${post.frontmatter.thumbnail.childImageSharp.fluid.src})`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </section>
            </article>
          </Link>
        )
      })}
    </ol>
  )
}

{
  /* <ol className="list-none gap-4 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
{posts.map(post => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <Link
      to={post.fields.slug}
      itemProp="url"
      key={post.fields.slug}
      className="rounded-lg"
    >
      <article itemScope itemType="http://schema.org/Article">
        <section className="flex items-center h-36 max-w-2xl">
          <div>
            <div>
              <div className="truncate-text w-96">
                <span className="text-2xl font-bold m-0 text-black">
                  {title}
                </span>
              </div>
            </div>
            <section>
              <p
                className="truncate-title text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
              <small className="mt-4 text-sm flex items-center gap-3 opacity-50">
                {post.frontmatter.date}
              </small>
            </section>
          </div>
          <div
            className="w-52 h-32 hidden sm:block object-cover"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${post.frontmatter.thumbnail.childImageSharp.fluid.src})`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </section>
      </article>
    </Link>
  )
})}
</ol> */
}