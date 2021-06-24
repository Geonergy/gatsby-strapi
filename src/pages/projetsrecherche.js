import React from "react"
import PageTemplate from "../components/pageTemplate"
import { Container, Row, Col } from "reactstrap"
import { FaGraduationCap } from "react-icons/fa"
import Link from "../components/link"
import Box from "../components/box"


// DEBUT DEFINITION DU COMPONENT PROJET
//  a importer avec :
//   { Container, Row, Col }
//   { FaHardHat, FaGraduationCap }
//   Link
//   Box
let ProjetOptiMoSGV = ({ title, Icon = FaGraduationCap }) => (
  <Link to="/optimosgv">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
)
let ProjetSondeTest = ({ title, Icon = FaGraduationCap }) => (
  <Link to="/sondetest">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
)
let ProjetDemonstrateur = ({ title, Icon = FaGraduationCap }) => (
  <Link to="/demonstrateur">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
)
let ProjetGeogiciel = ({ title, Icon = FaGraduationCap }) => (
  <Link to="/geogiciel">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
)
let ProjetPuissance = ({ title, Icon = FaGraduationCap }) => (
  <Link to="/optipuissance">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
)
// xs = width
// md = ?
// FIN DEFINITION DU COMPONENT PROJET


let Projets = () => (
  <PageTemplate title="Projets de recherche">
    <Container className="py-5">
        <ProjetOptiMoSGV title="OptiMoSGV" />
    </Container>
    <Container className="py-5">
        <ProjetSondeTest title="Sonde Test" />
    </Container>
    <Container className="py-5">
        <ProjetDemonstrateur title="Démonstrateur" />
    </Container>
    <Container className="py-5">
        <ProjetGeogiciel title="Geogiciel" />
    </Container>
    <Container className="py-5">
        <ProjetPuissance title="OptiPuissance"/>
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
