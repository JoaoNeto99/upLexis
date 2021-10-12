import React, { useState, createContext } from 'react';

export const HomeContext = createContext('Todos');

export function HomeProvider(props) {
  const [produto, setProduto] = useState('Todos');

  function handleProduto (produto) {
    setProduto(produto.text);
  }

  return (
    <HomeContext.Provider
      value={{
        produto, 
        onProduto: handleProduto
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}