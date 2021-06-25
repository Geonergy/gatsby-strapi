import React from "react"
import PageTemplate from "../components/pageTemplate"
import { Container, Row, Col } from "reactstrap"
import { FaHardHat } from "react-icons/fa"
import Link from "../components/link"
import Box from "../components/box"
import Testimonials from '../components/testimonials'

// DEBUT DEFINITION DU COMPONENT PROJET
//  a importer avec :
//   { Container, Row, Col }
//   { FaHardHat, FaGraduationCap }
//   Link
//   Box
let Projet1 = ({ title, Icon = FaHardHat }) => (
  <Col xs={12} md={4} className="mb-3">
    <Link to="/projet1">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
  </Col>
)
// xs = width
// md = ?
// FIN DEFINITION DU COMPONENT PROJET


let Projets = () => (
  <PageTemplate title="Projets d'installation géothermique">
    <Container className="py-5">
      <Row>
        <Projet1 title="Projet n°1 - Isère" />
      </Row>
    </Container>
    <p>
      Pas encore de projets réalisés.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo erat
      eu viverra mollis. Quisque tellus ante, commodo nec tellus sit amet,
      ornare blandit justo. Integer in cursus justo, vel aliquam ex. Etiam
      ligula sapien, sagittis eu posuere et, tincidunt a arcu. Nullam egestas
      lacus a molestie efficitur. Fusce neque mauris, commodo at lectus ut,
      aliquet pretium neque. Cras laoreet sapien lorem, eu auctor lorem porta
      quis. Proin placerat, nunc quis placerat mattis, ligula velit mollis nisi,
      ac maximus velit urna vel nibh. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </p>
    <Testimonials/>
  </PageTemplate>
)

export default Projets
