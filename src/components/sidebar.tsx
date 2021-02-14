import React, { PropsWithChildren } from "react"
import styled from "styled-components"

const SidebarBlock = styled.aside`
  height: 100vh;
  background-color: #333;
  width: 80%;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
`
export function Sidebar({ children }: PropsWithChildren<{}>) {
  return <SidebarBlock>{children}</SidebarBlock>
}
