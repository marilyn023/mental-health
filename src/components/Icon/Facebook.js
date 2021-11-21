import React from "react"

export default function Facebook({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 487 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_9_2)">
        <path
          d="M124.074 1000V530.771H0V361.826H124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555L481.196 164.321C481.196 164.321 429.632 163.819 373.363 163.819C312.463 163.819 302.706 191.884 302.706 238.465V361.826H486.037L478.06 530.771H302.706V1000H124.074Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_9_2">
          <rect width="486.037" height="1000" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  )
}
