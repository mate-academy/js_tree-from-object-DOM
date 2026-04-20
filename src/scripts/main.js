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
  const ulEL = document.createElement('ul'); 

  for (const key in data) { 
    const liEl = document.createElement('li'); 
    liEl.innerHTML =  `${key}`; 
    
    ulEL.append(liEl); 
    
    createTree(ulEL, data[key]);
  }
  
  return  element.append(ulEL);;
}

