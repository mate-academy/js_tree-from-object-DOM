'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
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
  const list = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.className = 'list';
    listItem.textContent = key;
    list.append(listItem);

    if (Object.keys(data[key]).length) {
      createTree(listItem, data[key]);
    }
  }

  element.append(list);

  // element.insertAdjacentHTML('beforeend', `
  //   <ul></ul>
  // `);

  // const ul = document.querySelectorAll('ul');

  // for (const key in data) {
  //   ul[ul.length - 1].insertAdjacentHTML('beforeend', `
  //       <li>${key}</li>
  //     `);

  //   if (Object.keys(data[key]).length) {
  //     const li = document.querySelectorAll('li');

  //     createTree(li[li.length - 1], data[key]);
  //   }
  // }
}

createTree(tree, food);
