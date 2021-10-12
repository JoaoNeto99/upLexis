import React, { useContext, useState, useEffect } from "react";
import style from "./MenuBar.scss";

import { BsGlobe } from 'react-icons/bs';
import { FaSuitcase } from 'react-icons/fa';
import { GiGreekTemple } from 'react-icons/gi';
import { FaTree } from 'react-icons/fa';
import { BsHammer } from 'react-icons/bs';
import { MdBlockFlipped } from 'react-icons/md';
import { FaGlobeAmericas } from 'react-icons/fa';
import { IoDiamond } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';
import { BsPiggyBankFill } from 'react-icons/bs';

import MenuItem from './MenuItem/MenuItem';
import { HomeContext } from "../HomeContext/HomeContext";


const data = [
  { id: 1, icon: BsGlobe, text: 'Todos' },
  { id: 2, icon: FaSuitcase, text: 'Profissional' },
  { id: 3, icon: GiGreekTemple, text: 'Reguladores' },
  { id: 4, icon: FaTree, text: 'Sócio Ambiental' },
  { id: 5, icon: BsHammer, text: 'Jurídico' },
  { id: 6, icon: MdBlockFlipped, text: 'Listas Restritivas' },
  { id: 7, icon: FaGlobeAmericas, text: 'Mídia / Internet' },
  { id: 8, icon: IoDiamond, text: 'Bens e Imóveis' },
  { id: 9, icon: BsPersonFill, text: 'Cadastro' },
  { id: 10, icon: BsPiggyBankFill, text: 'Financeiro' },
]

function MenuBar() {
  const [selectedItem, setSelectedItem] = useState({ id: 1, icon: BsGlobe, text: 'Todos' });
  const { onProduto } = useContext(HomeContext);

  useEffect(() => { onProduto(selectedItem) }, [selectedItem]);

  function handleSelectedItem(itemId) {
    const item = data.find((item) => (item.id === itemId));
    if (item) {
      setSelectedItem(item);
    }
  }

  return (
    <section className={style.menuBar}>
      {data.map(item => (
        <MenuItem
          key={item.id}
          id={item.id}
          icon={item.icon}
          text={item.text}
          select={item.id === selectedItem.id}
          onSelected={handleSelectedItem}
        />
      ))}
    </section>
  );
}

export default MenuBar;