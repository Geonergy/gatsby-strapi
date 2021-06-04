import React from "react"
import PageTemplate from "../components/pageTemplate"
import { Container, Row, Col } from "reactstrap"
import { FaHardHat, FaGraduationCap } from "react-icons/fa"
import Link from "../components/link"
import Box from "../components/box"


// DEBUT DEFINITION DU COMPONENT PROJET
//  a importer avec :
//   { Container, Row, Col }
//   { FaHardHat, FaGraduationCap }
//   Link
//   Box
let Projet = ({ title, Icon = FaGraduationCap }) => (
  <Col xs={12} md={4} className="mb-3">
    <Link to="/">
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
  <PageTemplate title="Nos projets">
    <Container className="py-5">
      <Row>
        <Projet title="Projets de recherche" />
      </Row>
    </Container>
    <Container className="py-5">
      <Row>
        <Projet title="Projets d'installation géothermique" Icon={FaHardHat} />
      </Row>
    </Container>
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
  </PageTemplate>
)

export default Projets
