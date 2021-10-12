import React from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import BodyContent from "../../components/BodyHome/BodyContent";
import { HomeProvider } from "../../components/HomeContext/HomeContext";

import img from '../../img/header.png';
import logo from '../../img/logo.svg';

const slide_data = [
  {id: 1, background: img, logo: logo, titulo: 'Histórico Empresarial', texto:'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de função.', preco: '40,00' },
  {id: 2, background: img, logo: logo, titulo: 'Histórico Ambiental', texto:'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de função.', preco: '30,00' },
  {id: 3, background: img, logo: logo, titulo: 'Histórico Comercial', texto:'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de função.', preco: '20,00' }
]

export default function Home() {
  return (
    <>
      <Header 
        data={slide_data}
      />
      <HomeProvider>
        <MenuBar />
        <BodyContent />
      </ HomeProvider>
    </>
  );
}