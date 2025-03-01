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
  function createTree(element, data) {
    function createList(data) {
      const ul = document.createElement('ul');
  
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const li = document.createElement('li');
          
          li.textContent = key;
  
          if (typeof data[key] === 'object' && data[key] !== null) {
            li.appendChild(createList(data[key]));
          } else {
            li.textContent = `${key}: ${data[key]}`;
          }
 
          ul.appendChild(li);
        }
      }
  
      return ul; // Return the constructed ul
    }
  
    element.innerHTML = '';
    element.appendChild(createList(data));
  }
  
}

createTree(tree, food);
