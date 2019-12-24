import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const GlobalHeader = styled.header`
  background: ${props => (props.theme.isDark ? "#333" : "#bae8e8")};
  box-shadow: ${props =>
    props.theme.isDark ? "0 0 3px #000" : "0 0 3px #272343"};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: ${props => (props.theme.isDark ? "#ccc" : "#333")};
  text-align: left;
  font-size: 1rem;
  padding: 0.5rem;
`

type HeaderProps = {
  siteTitle: string
}

const LeftCorner = styled.span``
const RightCorner = styled.span`
  & > a {
    margin: 0 10px;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`
export default function Header({ siteTitle }: HeaderProps) {
  return (
    <GlobalHeader>
      <LeftCorner>
        <Link to="/">{siteTitle}</Link>
      </LeftCorner>
      <RightCorner>
        <Link to="/posts">Posts</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/aboutme">About</Link>
      </RightCorner>
    </GlobalHeader>
  )
}
