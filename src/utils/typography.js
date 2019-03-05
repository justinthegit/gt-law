import Typography from 'typography'

const headerFontFamily = [
  `brandon_grotesque`,
  `Helvetica Neue`,
  `Arial`,
  `sans-serif`,
]

const _options = {
  headerFontFamily,
  bodyFontFamily: [`brandon_grotesque`, `Helvetica Neue`, `Arial`, `sans-serif`],
  bodyWeight: 500,
  baseLineHeight: 1.4,
  baseFontSize: `16px`,
  headerLineHeight: 1.075,
  // headerColor: colors.gray.dark,
  // bodyColor: colors.gray.copy,
  blockMarginBottom: 0.75,
  scaleRatio: 2,
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      'h1,h2,h4,h5,h6': {
        textTransform: 'uppercase',
      },
    }
  },
}

const typography = new Typography(_options)

export const { scale, rhythm, options } = typography
export default typography
