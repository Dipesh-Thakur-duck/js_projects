const flashSaleProducts = [
  {
    imageLocation:'./images/flash-sale-products-img/derma-sunscreen.avif',
    productName:'The Derma Co 1% Hyaluronic Sunscreen...',
    finalPrice:'748',
    initialPrice:'799',
    productDiscount:'-6%'
  },
  {
    imageLocation:'./images/flash-sale-products-img/vaseline-serum.avif',
    productName:'Vaseline Gluta-Hya Dewy Radiance Serun-In...',
    finalPrice:'154',
    initialPrice:'160',
    productDiscount:'-4%'
  },
  {
    imageLocation:'./images/flash-sale-products-img/handheld-fan.avif',
    productName:'120 speeds Handheld Fan Rechargeable Hand Fan...',
    finalPrice:'417',
    initialPrice:'1,000',
    productDiscount:'-58%'
  },
  {
    imageLocation:'./images/flash-sale-products-img/anti-hairfall-shampoo.avif',
    productName:'Bare Anatomy Anti Hairfall Shampoo - 250ML',
    finalPrice:'725',
    initialPrice:'774',
    productDiscount:'-6%'
  },
  {
    imageLocation:'./images/flash-sale-products-img/minimilist-shampoo.avif',
    productName:'Minimalist SPF 50 PA++++ Sunscreen',
    finalPrice:'617',
    initialPrice:'639',
    productDiscount:'-3%'
  },
  {
    imageLocation:'./images/flash-sale-products-img/ultima-powerbank.avif',
    productName:'(New Launch) Ultima 20K Mini | 22.5W | 20000 mA...',
    finalPrice:'2,995',
    initialPrice:'7,999',
    productDiscount:'-63%'
  },
];

const flashSaleProductsList = document.querySelector('.flash-sale-products-list');

if (flashSaleProductsList) {
  flashSaleProductsList.innerHTML = flashSaleProducts.map((product) => `
    <div class="flash-sale-product">
      <img src="${product.imageLocation}" class="flash-sale-product-img">
      <div class="flash-sale-product-details p-1">
        <p class="flash-sale-product-name mb-0">${product.productName}</p>
        <p class="flash-sale-product-price">${product.finalPrice}</p>
        <div class="d-flex gap-1">
          <p class="flash-sale-initial-price">${product.initialPrice}</p>
          <p class="flash-sale-product-discount">${product.productDiscount}</p>
        </div>
      </div>
    </div>
  `).join('');
}

