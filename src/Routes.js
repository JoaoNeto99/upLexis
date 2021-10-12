import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Profissional from "./Pages/Profissional";
import Reguladores from "./Pages/Reguladores";
import SocioAmbiental from "./Pages/SocioAmbiental";
import Juridico from "./Pages/Juridico";
import ListasRestritivas from "./Pages/ListasRestritivas";
import MidiaInternet from "./Pages/MidiaInternet";
import BensImoveis from "./Pages/BensImoveis";
import Cadastro from "./Pages/Cadastro";
import Financeiro from "./Pages/Financeiro";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/profissional" component={Profissional} />
      <Route path="/reguladores" component={Reguladores} />
      <Route path="/socio_ambiental" component={SocioAmbiental} />
      <Route path="/juridico" component={Juridico} />
      <Route path="/listas_restritivas" component={ListasRestritivas} />
      <Route path="/midia_internet" component={MidiaInternet} />
      <Route path="/bens_imoveis" component={BensImoveis} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/financeiro" component={Financeiro} />
    </>
  );
}