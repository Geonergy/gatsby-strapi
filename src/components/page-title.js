import React from "react"
import styled from "styled-components"

const Background = styled.div`
  background: linear-gradient(210deg, #01565E 0%, #048B9A 40.13%, #88D5A9 90%);
  color: white;
  padding: 8rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  text-align: center;
`

let PageTitle = ({ title }) => (
  <Background>
    <h1>{title}</h1>
  </Background>
)

export default PageTitle
