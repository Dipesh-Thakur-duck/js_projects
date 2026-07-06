const categories = [
  {
    categoryImage:'./images/goods-categories/breast-pump-accessories.avif',
    categoryName:'Breast Pump Accessories',
  },
  {
    categoryImage:'./images/goods-categories/vinegar-cooking-wine.avif',
    categoryName:'Vinegar & Cooking Wine'
  },
  {
    categoryImage:'./images/goods-categories/phone-case.avif',
    categoryName:'Phone Cases',
  },
  {
    categoryImage:'./images/goods-categories/convertible.avif',
    categoryName:'Convertible',
  },
  {
    categoryImage:'./images/goods-categories/folk-wood-precussion.avif',
    categoryName:'Folk & World Precussion'
  },
  {
    categoryImage:'./images/goods-categories/action-camera-bags.avif',
    categoryName:'Action Camera Bags & Cases'
  },
  {
    categoryImage:'./images/goods-categories/kids-book-cases.avif',
    categoryName:'Kids Bookcases & Shelving'
  },
  {
    categoryImage:'./images/goods-categories/toilet-paper.avif',
    categoryName:'Toilet Paper'
  },
  {
    categoryImage:'./images/goods-categories/hoodies-sweatshirts.avif',
    categoryName:'Hoodies & Sweatshirts'
  },
  {
    categoryImage:'./images/goods-categories/habitats-accessories.avif',
    categoryName:'Habitats & Accessories'
  },
  {
    categoryImage:'./images/goods-categories/bathroom-tapware.avif',
    categoryName:'Bathroom Tapware'
  },
  {
    categoryImage:'./images/goods-categories/range-hoods.avif',
    categoryName:'Range Hoods'
  },
  {
    categoryImage:'./images/goods-categories/christening.avif',
    categoryName:'Christening'
  },
  {
    categoryImage:'./images/goods-categories/ergonomic-accessories.avif',
    categoryName:'Ergonomic Accessories'
  },
  {
    categoryImage:'./images/goods-categories/bathroom.avif',
    categoryName:'Bathroom'
  },
  {
    categoryImage:'./images/goods-categories/still-water.avif',
    categoryName:'Still Water'
  }
];

const goodsCategoriesContainer = document.querySelector('.good-categories-container');

goodsCategoriesContainer.innerHTML = categories.map((category)=>{
  return `
    <div class="good-category px-3 py-2">
      <img src="${category.categoryImage}" class="category-img mb-2">
      <p class="category-p mb-0">${category.categoryName}</p>
    </div>
  `
}).join('');