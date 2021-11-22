import React from "react"

function Globe({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11C7 16.5228 8.79086 21 11 21C13.2091 21 15 16.5228 15 11C15 5.47715 13.2091 1 11 1C8.79086 1 7 5.47715 7 11Z"
        stroke={fill}
        stroke-width="2"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 11H21"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Globe
