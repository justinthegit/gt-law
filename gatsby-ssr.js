/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react')
const fs = require('fs')

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const files = getFilesFromPath('./public/static', '.woff2')

  const aPreload = files.map((file, key) => {
    return (
      <link
        key={key}
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href={`/static/${file}`}
      />
    )
  })

  const existingHeadComponents = getHeadComponents();
  const mergedHeadComponents = aPreload.concat(existingHeadComponents);

  replaceHeadComponents(
    mergedHeadComponents
  )
}

function getFilesFromPath(path, extension) {
  let dir = fs.readdirSync(path)
  return dir.filter(elm => elm.match(new RegExp(`.*\.(${extension})`, 'ig')))
}
