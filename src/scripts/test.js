const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(l) {
  alert(l.value); // виведіть поточний елемент

  if (l.next) {
    printList(l.next); // зробіть те ж саме для решти списку
  }
}

printList(list);
