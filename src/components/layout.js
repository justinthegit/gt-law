/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import "./layout.css"


//Import Fonts
import '../fonts/brandon-grotesque/stylesheet.css'


const Layout = ({ children }) => (
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
        <Helmet
          key="app-head"
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle="G+T"
        >
          <link rel="preconnect" href="https://i.vimeocdn.com" />
          <link rel="preconnect" href="https://f.vimeocdn.com" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.ico" />

        </Helmet>

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 'none',
            padding: `0`,
            paddingTop: 0,
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',

          }}
        >
          <main>{children}</main>

        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
