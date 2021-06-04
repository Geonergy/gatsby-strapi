import React from 'react'
import {Col, Row, Container} from 'reactstrap'
import {FaStar} from 'react-icons/fa'
import styled from 'styled-components'

let Background = styled.div`
  background: linear-gradient(to bottom, #ffffff 0, #ffffff 100%);
`

let Testimonial = ({stars = 5, content}) => (
  <Col md={4}>
    {[...Array(stars)].map(star => (
      <FaStar className="mr-1" color="#ec9a3c"/>
    ))}
    <p className="mt-3">{content}</p>
    <h6 className="font-weight-bold mb-0">Bruno Mars</h6>
    <small className="text-secondary">Client satisfait</small>
  </Col>
)

export default () => (
  <Background>
    <Container className="py-5">
      <h3 className="text-center mb-5">Témoignages</h3>
      <Row>
        <Testimonial content="Geonergy a réalisé un travail de qualité, et j'ai apprécié leur contact vraiment humain ! Ils ont installé dans ma maison de 200 m² une pompe à chaleur géothermique, et dans mon jardin deux sondes de chacune 150 m de profondeur. Grâce à eux je comprends comment je me chauffe !"/>
        <Testimonial content="Merci à Geonergy pour leur suivi de qualité lors des travaux d'installation géothermique dans mon logement. J'ai entièrement confiance en eux pour la pérennité de mon installation."/>
        <Testimonial content="Je recommande vivement cette équipe jeune et dynamique, qui montre à la fois une expertise dans leur domaine et une ouverture d'esprit. J'ai grâce à eux renouvelé l'isolation de ma maison et installé de la géothermie verticale, je suis complètement satisfaite de cette réalisation."/>
      </Row>
    </Container>
  </Background>
)
