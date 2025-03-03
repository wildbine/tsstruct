import BinarySearchTree from '../src/btree'; 

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
  });

  test('вставка элементов и проверка поиска', () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.find(10)).not.toBeNull();
    expect(bst.find(20)).not.toBeNull();
    expect(bst.find(5)).not.toBeNull();
    expect(bst.find(15)).toBeNull();
  });

  test('удаление элемента', () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    bst.remove(10);
    expect(bst.find(10)).toBeNull();

    bst.remove(5);
    expect(bst.find(5)).toBeNull();
  });

  test('изменение элемента', () => {
    bst.insert(10);
    bst.update(10, 15);

    expect(bst.find(10)).toBeNull();
    expect(bst.find(15)).not.toBeNull();
  });

  test('определение высоты', () => {
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.height()).toBe(1); // Высота должна равняться 1

    bst.insert(1);
    expect(bst.height()).toBe(2); // Высота должна равняться 2
  });
});