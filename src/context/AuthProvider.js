import React, { createContext, useState, useEffect } from "react"
import { firebaseAuth, onAuthStateChanged } from "../config/firebase"

const AuthContext = createContext([])

const AuthProvider = ({ children }) => {
  const [authContext, setAuthContext] = useState({})

  const isAuthenticated = () => {
    onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        setAuthContext({ authenticted: user })
      } else {
        setAuthContext({ authenticted: {} })
      }
    })
  }

  useEffect(isAuthenticated, [])

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
