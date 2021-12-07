// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/styles/normalize.css"
// custom CSS styles
import "./src/styles/style.css"
//import "antd/dist/antd.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from "react"

import { AuthProvider } from "./src/context/AuthProvider"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
