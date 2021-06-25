import React from "react"
import PageTemplate from "../components/pageTemplate"
import { Container, Row, Col } from "reactstrap"
import { FaHardHat, FaGraduationCap } from "react-icons/fa"
import Link from "../components/link"
import Box from "../components/box"
import styled from "styled-components"


let ProjetRecherche = ({ title, Icon = FaGraduationCap }) => (
  <Link to="/projetsrecherche">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
  </Link>
  
)

let ProjetGeothermique = ({ title, Icon = FaHardHat }) => (
  <Link to="/projetsgeothermique">
      <Box>
          <Icon size={30} />
          <h4 className="mt-3">{title}</h4>
      </Box>
  </Link>
  
)


let Projets = () => (
  <PageTemplate title="Projets">
    
      <Container className="py-5">
        <ProjetRecherche title="PROJETS DE RECHERCHE" />
      </Container>

      <Container className="py-5">
          <ProjetGeothermique title="REALISATIONS DE GEOTHERMIE"/>
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
