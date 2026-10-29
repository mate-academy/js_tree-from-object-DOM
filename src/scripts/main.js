'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const mainLista = document.createElement('ul');

  element.append(mainLista);

  Object.keys(data).forEach((key) => {
    const lista = document.createElement('li');

    lista.textContent = key;
    mainLista.append(lista);

    if (Object.keys(data[key]).length > 0) {
      createTree(lista, data[key]);
    }
  });
}

createTree(tree, food);
