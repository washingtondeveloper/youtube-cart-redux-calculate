export class ProductItem {
  constructor(id, title, description, image, price) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}

const INITIAL_STATE = {
  items: [
    new ProductItem(
      1,
      "HTML 5",
      "HTML5 (Hypertext Markup Language, versão 5) é uma linguagem de marcação",
      "https://cdn.dribbble.com/users/66221/screenshots/1655593/html5.png",
      25.0
    ),
    new ProductItem(
      2,
      "CSS 3",
      "CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets",
      "https://armyyazilim.com/wp-content/uploads/2019/10/css.png",
      30.0
    ),
    new ProductItem(
      3,
      "JavaScript",
      "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      35.0
    ),
  ],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const productsSelector = (state) => state.products.items;
