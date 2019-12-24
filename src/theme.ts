export const fonts = {
  title: "'great-vibes-merge', 'noto-serif-sc'",
}

export const colors = {
  titleFilter: `brightness(1.3) drop-shadow(1px 1px 0 #666)
  drop-shadow(2px 4px 1px skyblue) drop-shadow(1px 1px 0 hotpink)
  drop-shadow(0 0 3px #ddd)`,
  background: "#fff", //"#1d1d1d",
  font: "#ffffff",
  black: "#333",
  navy: "#69779b",
  sky: "#acdbdf",
  linea: "#f0ece2",
}

/**
 * 272343
 * ffffff
 * e3f6f5
 * bae8e8
 * e91e63
 */
export const light = {
  isDark: false,
  titleFilter: `brightness(1.3) drop-shadow(1px 1px 0 #e91e63)
  drop-shadow(2px 4px 1px #bae8e8) drop-shadow(1px 1px 0 hotpink)
  drop-shadow(0 0 3px #ddd)`,
  background: "#fff",
  navBackground: `linear-gradient(
    105deg,
    #e3f6f5 calc(47% - 1px),
    #f48fb1 47%,
    #bae8e8
  )`,
  navShadow: "4px 4px 0 #bae8e8, 5px 5px 0 #ccc",
  font: "#000",
  black: "#333",
  navy: "#69779b",
  sky: "#acdbdf",
  linea: "#f0ece2",
}

export const dark = {
  isDark: true,
  titleFilter: `drop-shadow(0 0 3px #000)`,
  background: "#1d1d1d",
  navBackground: `linear-gradient(
    105deg,
    #bae8e8 calc(47% - 1px),
    #00bcd4 47%,
    #90a4ae
  )`,
  navShadow: "0 5px 5px #000",
  font: "#ffffff",
  black: "#333",
  navy: "#69779b",
  sky: "#acdbdf",
  linea: "#f0ece2",
}

export const animation = {
  fastIn: `0.4s all cubic-bezier(0.4, 0, 0.2, 1)`,
}
