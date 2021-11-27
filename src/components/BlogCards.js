import React from "react"
import { Link } from "gatsby"
import Sample1 from "../images/sample1.jpg"
import Sample2 from "../images/sample2.jpg"
import Sample3 from "../images/sample3.jpg"

export default function BlogCards() {
  const blogContent = [
    {
      id: 1,
      image: Sample1,
      title: "Coping with depression",
      paragraph: `Ways to cop up with depression is to do something that your mind
      will busy dawihd aowhd aowdh oawh doahw doah doh dawhd oawhd awoh
      daoiw hdiawhd oawhd oawhd`,
    },
    {
      id: 2,
      image: Sample2,
      title: "Stress reliever",
      paragraph: `Ways to cop up with depression is to do something that your mind
      will busy dawihd aowhd aowdh oawh doahw doah doh dawhd oawhd awoh
      daoiw hdiawhd oawhd oawhd`,
    },
    {
      id: 3,
      image: Sample3,
      title: "Stress reliever",
      paragraph: `Ways to cop up with depression is to do something that your mind
      will busy dawihd aowhd aowdh oawh doahw doah doh dawhd oawhd awoh
      daoiw hdiawhd oawhd oawhd`,
    },
    {
      id: 4,
      image: Sample1,
      title: "Stress reliever",
      paragraph: `Ways to cop up with depression is to do something that your mind
      will busy dawihd aowhd aowdh oawh doahw doah doh dawhd oawhd awoh
      daoiw hdiawhd oawhd oawhd`,
    },
    {
      id: 5,
      image: Sample2,
      title: "Stress reliever",
      paragraph: `Ways to cop up with depression is to do something that your mind
      will busy dawihd aowhd aowdh oawh doahw doah doh dawhd oawhd awoh
      daoiw hdiawhd oawhd oawhd`,
    },
    {
      id: 6,
      image: Sample3,
      title: "Stress reliever",
      paragraph: `Ways to cop up with depression is to do something that your mind
      will busy dawihd aowhd aowdh oawh doahw doah doh dawhd oawhd awoh
      daoiw hdiawhd oawhd oawhd`,
    },
  ]

  return (
    <section className="my-32" id="story">
      <div className="mx-auto my-10 w-72 text-center">
        <span className="font-bold text-4xl text-secondary">Stories</span>
        <p className="opacity-40 my-1">
          Different stories and tips, guides on how to cope up depression
        </p>
      </div>
      <div className="overflow-hidden grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {blogContent.map(type => (
          <div
            key={type.id}
            className="relative cursor-pointer transition-all transform hover:translate-y-2 h-96 w-full shadow-lg rounded-lg bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url("${type.image}")`,
            }}
          >
            <div className="text-white text-gray-200 bg-gradient-to-t from-gray-900 w-full h-48 absolute bottom-0 rounded-b-lg px-4 py-14">
              <span className="font-bold">{type.title}</span>
              <p className="leading-5 text-sm truncate-text mt-1.5">
                {type.paragraph}
              </p>
            </div>
          </div>
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
