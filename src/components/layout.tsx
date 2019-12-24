import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Spring } from "react-spring/renderprops"

import { ThemeProvider } from "styled-components"
import Header from "./header"
import Footer from "./footer"
import Global from "./GlobalStyle"
import { light, dark } from "../theme"

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet htmlAttributes={{ lang: "ja" }}></Helmet>
          <ThemeProvider theme={light}>
            <div>
              <Global />
              <Header siteTitle={data.site.siteMetadata.title} />

              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {style => <main style={style}>{children}</main>}
              </Spring>
            </div>
          </ThemeProvider>
          <Footer />
        </>
      )}
    />
  )
}
