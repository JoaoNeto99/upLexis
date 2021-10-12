import React from "react";
import Header from "../../components/Header/Header";
import BodyDetalhes from "../../components/BodyDetalhes/BodyDetalhes";
import img from '../../img/header02.png';
import logo from '../../img/logo.svg';

const slide_data = [
  { id: 1, background: img, logo: logo, titulo: 'Profissional', texto: 'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de função.', preco: '40,00' },
  { id: 2, background: img, logo: logo, titulo: 'Profissional', texto: 'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de função.', preco: '30,00' },
  { id: 3, background: img, logo: logo, titulo: 'Profissional', texto: 'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de função.', preco: '20,00' }
]

export default function Profissional() {
  return (
    <>
      <Header
        data={slide_data}
      />
      <BodyDetalhes
        titulo="Profissional"
        texto1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id eleifend urna, ac aliquet augue. Nam risus risus, tempor sit amet aliquam vel, gravida eu lacus. Aenean fringilla leo eget ipsum suscipit, a mollis ipsum elementum. "
        texto2="ivamus nec rhoncus leo, id rhoncus lectus. Sed a cursus est. Ut fermentum purus eu odio vehicula, nec euismod ipsum ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce pellentesque lacus nulla."
        preco="40.00"
      />
    </>
  );
}