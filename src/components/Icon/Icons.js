import { Arrow, Menu, Facebook, Globe, Instagram, LinkedIn } from "."
import React from "react"

const Icons = ({ width, height, fill, name }) => {
  function icons() {
    switch (name) {
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
    }
  }

  return <div>{icons()}</div>
}

export default Icons
