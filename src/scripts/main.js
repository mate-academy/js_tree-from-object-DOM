'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (let i = 0; i < Object.keys(data).length; i++) {
    const li = document.createElement('li');

    li.innerHTML = Object.keys(data)[i];
    ul.appendChild(li);

    // console.log(Object.keys(data[Object.keys(data)[i]]));
    // Делаем проверку на наличие ключей если их нет,
    // то мы не добавляем через appendChild, ибо у нас ничего нет в ul,
    // а пустой ul нам не нужен, для наглядности разкоментить console.log
    if (Object.keys(data[Object.keys(data)[i]]).length) {
      const nextIteration = createTree(element, data[Object.keys(data)[i]]);

      ul.appendChild(nextIteration);
    }
  }

  return ul;
}

tree.appendChild(createTree(tree, food));
