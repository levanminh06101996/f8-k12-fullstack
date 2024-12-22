const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];
function flattenCategories(categories) {
  let result = [];
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].name) {
      result.push({
        id: categories[i].id,
        name: categories[i].name,
        level: 0,
      });
    }
    if (categories[i].children) {
      for (let j = 0; j < categories[i].children.length; j++) {
        if (categories[i].children[j].name) {
          result.push({
            id: categories[i].children[j].id,
            name: categories[i].children[j].name,
            level: 1,
          });
        }
        if (categories[i].children[j].children) {
          for (let k = 0; k < categories[i].children[j].children.length; k++) {
            if (categories[i].children[j].children[k].name) {
              result.push({
                id: categories[i].children[j].children[k].id,
                name: categories[i].children[j].children[k].name,
                level: 2,
              });
            }
          }
        }
      }
    }
  }
  return result;
}

const result = flattenCategories(categories);
console.log(result);

function getCategoryName(categories, categoryId) {
  let result = null;
  const arrFlat = flattenCategories(categories);
  for (let i = 0; i < arrFlat.length; i++) {
    if (arrFlat[i].id === categoryId) {
      return (result = arrFlat[i].name);
    }
  }
  return result;
}

console.log(getCategoryName(categories, 3)); // Output: "Apple"
console.log(getCategoryName(categories, 10)); // Output: "Non-Fiction"
console.log(getCategoryName(categories, 99)); // Output: null
