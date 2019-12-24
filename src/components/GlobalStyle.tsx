import { createGlobalStyle } from "styled-components"
import { colors } from "../theme"
export default createGlobalStyle`

@font-face {
  font-family: 'great-vibes-merge';
  unicode-range: U+0021-007A;
  src: url('/fonts/GreatVibes-Regular.woff2') format('woff2');
}
@font-face {
  font-family: 'noto-serif-sc';
  src: url('/fonts/NotoSerifSC-Regular.subset.woff2') format('woff2');
  unicode-range: U+3000-9FFF;
}
*{
  ::-webkit-scrollbar{
    display:none;
  }
  ::selection {
  color: #fff;
  background: skyblue;
}
}
html,
body {

   font-family: sans-serif;
   text-align: center;
   font-size: 20px;
   color: ${colors.font};
   margin: 0;
   padding: 0;
   width: 100%;
   height: 100%;
}
body {
  background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 200px,
      #eee 200px,
      #eee 202px
    ),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 200px,
      #e3f6f5 200px,
      #e3f6f5 202px
    );
}
ul {
   margin: 0;
   padding: 0;
   list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
#___gatsby {
  width: 100%;
  min-height: 100%;
  display:flex;
  flex-direction: column;
  & > div{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
  }
}
main{
  padding-bottom:3rem;
}
`

/**
 * $GRID_SIZE: 10px;
$LINE_COLOR: hotpink;
$GRID_SIZE_BIGGER: 23px;

html {
  width: 100vw;
  height: 100vh;
  background-color: rgb(10, 8, 6);
  background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent $GRID_SIZE,
      $LINE_COLOR $GRID_SIZE,
      $LINE_COLOR $GRID_SIZE_BIGGER - 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent $GRID_SIZE,
      skyblue $GRID_SIZE,
      skyblue $GRID_SIZE_BIGGER
    ),
    repeating-linear-gradient(
      20deg,
      rgb(10, 8, 6),
      rgb(10, 8, 6) $GRID_SIZE,
      $LINE_COLOR $GRID_SIZE,
      $LINE_COLOR $GRID_SIZE_BIGGER
    );
}

 */
