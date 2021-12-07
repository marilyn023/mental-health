import { Arrow, Menu, Facebook, Globe, Instagram, LinkedIn, Google } from "."
import React from "react"

export default function Icons({ width, height, fill, name }) {
  function icons() {
    switch (name) {
      case "Google":
        return <Google width={width} height={height} />
      case "Arrow":
        return <Arrow width={width} height={height} fill={fill} />
      case "Menu":
        return <Menu width={width} height={height} fill={fill} />
      case "Facebook":
        return <Facebook width={width} height={height} fill={fill} />
      case "Globe":
        return <Globe width={width} height={height} fill={fill} />
      case "Instagram":
        return <Instagram width={width} height={height} fill={fill} />
      case "LinkedIn":
        return <LinkedIn width={width} height={height} fill={fill} />
      default:
        return "Empty"
    }
  }

  return <div>{icons()}</div>
}
