const justForYouProductsContainer = document.querySelector('.just-for-you-products');

const justForYouProducts = [
  {
    imageLocation:'./images/just-for-you-img/dumbells.avif',
    productName:'(7.7kg X 2) | Dumbells - Gym Equipment for Ho...',
    finalPrice:'4,950',
    productDiscount:'-51%'
  },
  {
    imageLocation:'./images/just-for-you-img/underarm-whitening.avif',
    productName:'Kojic Acid and Collagen Underarms Whiting...',
    finalPrice:'259',
    stars:'4.7',
    ratings:'21'
  },
  {
    imageLocation:'./images/just-for-you-img/floral-cottoom-pant.avif',
    productName:'Floral Printed Cotton Palazzo Pants for Wome...',
    finalPrice:'299',
    productDiscount:'-70%',
    stars:'5',
    ratings:'3'
  },
  {
    imageLocation:'./images/just-for-you-img/women-underwear.avif',
    productName:'(5 Set) Women Menstrual Panties Comfort Leak...',
    finalPrice:'899',
    productDiscount:'-10%',
    stars:'5',
    ratings:'5'
  },
  {
    imageLocation:'./images/just-for-you-img/football-boots.avif',
    productName:'Sajha24 Futsal Boot With Different Color',
    finalPrice:'863',
    productDiscount:'-42%',
    stars:'4.1',
    ratings:'22'
  },
  {
    imageLocation:'./images/just-for-you-img/mini-wifi-camera.avif',
    productName:'Mini WiFi Camera A9 Mini Camera',
    finalPrice:'649',
    productDiscount:'-46%',
    stars:'4',
    ratings:'33'
  }
];

justForYouProductsContainer.innerHTML = justForYouProducts.map((product) => {

  return `
    <div class="just-for-you-product">
      <img src='${product.imageLocation}' class="w-100 just-for-you-product-img">
      <div class="bg-white p-1">
        <p class="just-for-you-product-name mb-0">${product.productName}</p>
        <div class="d-flex gap-2 mb-1">
          <p class="just-for-you-product-price mb-0">Rs.${product.finalPrice}</p>
          <div>
            ${product.productDiscount ? `
              <p class="just-for-you-product-discount mb-0">${product.productDiscount}</p>
            ` : ''}
          </div>
        </div>
        <div class="d-flex gap-1">
        ${
          renderRatings(product)
        }
        </div>
      </div>
    </div>
  `;
}).join('');

function renderRatings(product) {
  if (!product.ratings) {
    return `
    <div class="stars-wrapper" style="visibility:hidden;">
    placeholder
    </div>
    <div class="just-for-you-product-ratings" style="visibility:hidden;">placeholder</div>`;
  }
  return `
    <div class="stars-wrapper" style="--stars: ${product.stars};">
      <div class="stars-grey">★★★★★</div>
      <div class="stars-yellow">★★★★★</div>
    </div>
    <p class="just-for-you-product-ratings">(${product.ratings})</p>
  `;
}