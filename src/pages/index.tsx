import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { animation, fonts } from "../theme"
import { animated } from "react-spring"
import { Transition } from "react-spring/renderprops"

const H1 = styled.h1`
  font-size: 6rem;
  margin-bottom: 2rem;
  padding: 1rem;
  font-family: ${fonts.title};
  filter: ${props => props.theme.titleFilter};
  width: fit-content;
  display: inline-block;
  font-weight: normal;
  text-align: center;
  background: linear-gradient(180deg, skyblue, #e91e63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media screen and (max-width: 700px) {
    font-size: 4rem;
  }
`
const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around;
  width: 80%;
  li {
    width: 60%;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    li {
      width: 90%;
    }
  }
`
const NavLink = styled.div`
  transition: ${animation.fastIn};
  background-size: 200%, 150%;
  background-image: ${props => props.theme.navBackground};
  color: #fff;
  font-size: 1.4rem;
  border-radius: 10px;
  text-shadow: 0 0 5px #000;
  box-shadow: ${props => props.theme.navShadow};
  cursor: pointer;
  padding: 0.3rem;
  margin: 0.5rem 0;
  a {
    width: 100%;
    display: block;
  }
  &:hover {
    transform: translateY(-3px);
    background-position: 100%, 5%;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`
const Callout = styled.blockquote`
  color: ${props => (props.theme.isDark ? "#fff" : "#272343")};
  text-shadow: ${props => (props.theme.isDark ? "0 0 3px #000" : "")};
`

export default function IndexPage() {
  const navList = [
    { label: "Posts", link: "/posts" },
    { label: "Notes", link: "/notes" },
  ]
  const NavBlock = () => (
    <Nav>
      <Transition
        items={navList}
        keys={nav => nav.label}
        from={{ opacity: 0, transform: "translateY(40px)" }}
        enter={{ opacity: 1, transform: "translateY(0px)" }}
        leave={{ opacity: 0, transform: "translateY(40px)" }}
      >
        {nav => style => (
          <animated.li style={style}>
            <NavLink>
              <Link to={nav.link}>{nav.label}</Link>
            </NavLink>
          </animated.li>
        )}
      </Transition>
    </Nav>
  )
  return (
    <Layout>
      <SEO title="Home" />
      <H1>Blog of yue</H1>
      <Callout>
        正しさ よりも 明るい場所を 見つけながら 走ればいいんだね。
      </Callout>
      <NavBlock />
    </Layout>
  )
}
