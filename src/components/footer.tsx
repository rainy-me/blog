import React from "react"
import styled from "styled-components"

const GlobalFooter = styled.footer`
  font-size: 1rem;
  background: ${props => (props.theme.isDark ? "#333" : "#bae8e8")};
  color: ${props => (props.theme.isDark ? "#ccc" : "#333")};
  box-shadow: 0 1px 3px #000;
  color: #fff;
  padding: 0.5rem;
`

export default function Footer() {
  return <GlobalFooter>© {new Date().getFullYear()}</GlobalFooter>
}
