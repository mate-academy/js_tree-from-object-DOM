'use strict';

// Obiekt z danymi do wygenerowania drzewa
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

// Pobranie elementu DOM, w którym umieścimy drzewo
const tree = document.querySelector('#tree');

/**
 * Funkcja rekurencyjna tworząca drzewo ul/li z obiektu
 * @param {HTMLElement} element - element DOM, w którym wstawiamy listę
 * @param {Object} data - obiekt z danymi do wygenerowania listy
 */
function createTree(element, data) {
  // Jeśli obiekt jest pusty, kończymy rekurencję
  if (!Object.keys(data).length) return;

  // Tworzymy nową listę ul dla bieżącego poziomu drzewa
  const ul = document.createElement('ul');

  // Iterujemy po wszystkich kluczach obiektu
  for (const key in data) {
    const li = document.createElement('li'); // tworzymy li dla klucza
    li.textContent = key;                     // ustawiamy nazwę elementu

    // Rekurencyjnie tworzymy poddrzewo dla dzieci
    createTree(li, data[key]);

    // Dodajemy li do ul
    ul.appendChild(li);
  }

  // Dodajemy ul do bieżącego elementu w DOM
  element.appendChild(ul);
}

// Wywołanie funkcji po załadowaniu strony
createTree(tree, food);
