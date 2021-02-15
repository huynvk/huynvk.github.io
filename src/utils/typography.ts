import Typography from "typography"
import customTheme from "typography-theme-github"

customTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: "none",
    },
    a: {
      color: "#222",
    },
    "a:hover": {
      textDecoration: "none",
    },
    "h1, h2, h3": {
      borderBottomStyle: "none",
    },
    h2: {
      marginTop: "2.5rem",
    },
    p: {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  }
}

const typography = new Typography(customTheme)

// @ts-ignore
typography.overrideStyles = () => {
  return {
    body: {
      background: "#FFFFFF",
    },
    baseFontSize: "15px",
  }
}

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
