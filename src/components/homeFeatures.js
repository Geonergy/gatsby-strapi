import React from "react"
import { Container, Col, Row } from "reactstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

let StyledFeature = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }
`

let Feature = ({ title, description, img }) => (
  <Col md={4} className="mb-3">
    <StyledFeature>
      <Img fluid={img} />
      <div className="p-3">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </StyledFeature>
  </Col>
)

let HomeFeatures = () => {
  const data = useStaticQuery(graphql`
    fragment defaultImage on File {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query featuresQuery {
      slide1: file(relativePath: { eq: "slide1.jpg" }) {
        ...defaultImage
      }
      slide2: file(relativePath: { eq: "slide2.jpg" }) {
        ...defaultImage
      }
      slide3: file(relativePath: { eq: "slide3.jpg" }) {
        ...defaultImage
      }
    }
  `)
  return (
    <Container className="py-5">
      <Row>
        <Feature
          title="Minerais en Europe"
          description="Aaaaah j'ai oublié de réviser lol. Je suis là juste pour les quotas bye."
          img={data.slide1.childImageSharp.fluid}
        />
        <Feature
          title="Chauffage au bois"
          description="Petit sourire en coin. Le mur m'a raconté une blague. J'aime le mauve."
          img={data.slide2.childImageSharp.fluid}
        />
        <Feature
          title="Développement durable"
          description="Lolilol je suis gogol. J'aime le jaune."
          img={data.slide3.childImageSharp.fluid}
        />
      </Row>
    </Container>
  )
}

export default HomeFeatures
