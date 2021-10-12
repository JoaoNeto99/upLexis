import React, { useContext, useState } from "react";
import style from "./BodyContent.scss";
import Card from "./Card/Card";

import { FaSuitcase } from 'react-icons/fa';
import { GiGreekTemple } from 'react-icons/gi';
import { FaTree } from 'react-icons/fa';
import { BsHammer } from 'react-icons/bs';
import { MdBlockFlipped } from 'react-icons/md';
import { FaGlobeAmericas } from 'react-icons/fa';
import { IoDiamond } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';
import { BsPiggyBankFill } from 'react-icons/bs';

import { HomeContext } from "../HomeContext/HomeContext";

const data = [
  { id: 1, icon: FaSuitcase, titulo: 'Profissional', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 29.99, data: "12/10/2021", url: '/profissional' },
  { id: 2, icon: GiGreekTemple, titulo: 'Reguladores', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 30.99, data: "11/10/2021", url: '/reguladores' },
  { id: 3, icon: FaTree, titulo: 'Sócio Ambiental', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 31.99, data: "10/10/2021", url: '/socio_ambiental' },
  { id: 4, icon: BsHammer, titulo: 'Jurídico', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 32.99, data: "09/10/2021", url: '/juridico' },
  { id: 5, icon: MdBlockFlipped, titulo: 'Listas Restritivas', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 33.99, data: "08/10/2021", url: '/listas_restritivas' },
  { id: 6, icon: FaGlobeAmericas, titulo: 'Mídia / Internet', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 34.99, data: "07/10/2021", url: '/midia_internet' },
  { id: 7, icon: IoDiamond, titulo: 'Bens e Imóveis', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 35.99, data: "06/10/2021", url: '/bens_imoveis' },
  { id: 8, icon: BsPersonFill, titulo: 'Cadastro', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 36.99, data: "05/10/2021", url: '/cadastro' },
  { id: 9, icon: BsPiggyBankFill, titulo: 'Financeiro', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 37.99, data: "04/10/2021", url: '/financeiro' },
  { id: 10, icon: BsPiggyBankFill, titulo: 'Financeiro', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 38.99, data: "03/10/2021", url: '/financeiro' },
  { id: 11, icon: BsPiggyBankFill, titulo: 'Financeiro', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 39.99, data: "02/10/2021", url: '/financeiro' },
  { id: 12, icon: BsPiggyBankFill, titulo: 'Financeiro', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non aliquet metus.', preco: 40.99, data: "01/10/2021", url: '/financeiro' },
];


function BodyContent() {
  const { produto } = useContext(HomeContext);
  const [selectValue, setSelectValue] = useState('lancamento');

  return (
    <div className={style.body}>
      <div className={style.body__select}>
        <label htmlFor="ordenar">Ordenar</label>
        <select value={selectValue} onChange={e => setSelectValue(e.target.value)} id="ordenar">
          <option value="lancamento">Lançamento</option>
          <option value="preco">Preço</option>
        </select>
      </div>

      <div className={style.body__cards}>
        {
          selectValue === 'lancamento'
            ?
            produto === 'Todos'
              ?
              data.sort(
                (a, b) => (new Date(a.data.split('/').reverse().join('/')) > new Date(b.data.split('/').reverse().join('/')) ? 1 : -1)).map(item => (
                <Card
                  key={item.id}
                  icon={item.icon}
                  titulo={item.titulo}
                  texto={item.texto}
                  preco={item.preco}
                  url={item.url}
                />
              ))
              : data.sort((a, b) => (new Date(a.data.split('/').reverse().join('/')) > new Date(b.data.split('/').reverse().join('/')) ? 1 : -1)).map(item => (
                item.titulo === produto
                  ? <Card
                    key={item.id}
                    icon={item.icon}
                    titulo={item.titulo}
                    texto={item.texto}
                    preco={item.preco}
                    url={item.url}
                  />
                  : null
              ))
            :
            produto === 'Todos'
              ?
              data.sort((a, b) => (a.preco > b.preco ? 1 : -1)).map(item => (
                <Card
                  key={item.id}
                  icon={item.icon}
                  titulo={item.titulo}
                  texto={item.texto}
                  preco={item.preco}
                  url={item.url}
                />
              ))
              : data.sort((a, b) => (a.preco > b.preco ? 1 : -1)).map(item => (
                item.titulo === produto
                  ? <Card
                    key={item.id}
                    icon={item.icon}
                    titulo={item.titulo}
                    texto={item.texto}
                    preco={item.preco}
                    url={item.url}
                  />
                  : null
              ))
        }
      </div>
    </div>
  );
}

export default BodyContent;