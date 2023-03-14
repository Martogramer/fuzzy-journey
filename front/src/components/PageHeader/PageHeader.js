
import React from "react";
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square5" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">byFree•</h1>
          <h5 className="d-none d-sm-block">
            Comunidad de desarrollo indepentdiente donde puedes encontrar tu nuevo equipo de trabajo o crear la nueva pagina de tu negocio. For freelancers by freelancers
          </h5>
        </div>
      </Container>
    </div>
  );
}

{/*<div className="squares square2" />
<div className="squares square7" /> 
<div className="squares square1" />
<div className="squares square4" />
<div className="squares square6" />
<div className="squares square3" />*/}