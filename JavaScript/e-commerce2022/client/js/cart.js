const { json } = require("body-parser");
const { application } = require("express");
const { METHODS } = require("http");

const $cartModal = document.getElementById("modal-container");
const $cartOverlay = document.getElementById("modal-overlay");
const $cartButton = document.getElementById("cart-btn");
const $cartCounter = document.getElementById("cart-counter");

function clearCart() {
  $cartModal.innerHTML = "";
};

function increseItemCart (productContainer, product, totalPriceContainer) {
  const $quantityInput = productContainer.querySelector(".quantity-input");
  const quantity = parseInt($quantityInput.textContent);
  const itemCartIndex = cart.findIndex(item => item.id === product.id);
  const newQuantity = quantity + 1;
  $quantityInput.textContent = newQuantity;
  cart[itemCartIndex].quantity = newQuantity;
  setTotalPrice(totalPriceContainer);
  displayCartCounter();
};

function decreseItemCart(productContainer, product, totalPriceContainer) {
  const $quantityInput = productContainer.querySelector(".quantity-input");
  const quantity = parseInt($quantityInput.textContent);
  const itemCartIndex = cart.findIndex(item => item.id === product.id);
  if (quantity > 1) {
    const newQuantity = quantity - 1;
    $quantityInput.textContent = newQuantity;
    cart[itemCartIndex].quantity = newQuantity;
  } else {
    productContainer.remove();
    cart.splice(itemCartIndex, 1);
  }
  setTotalPrice(totalPriceContainer);
  displayCartCounter();
};

function deleteItemCart(productContainer, product, totalPriceContainer) {
  const itemCartIndex = cart.findIndex(item => item.id === product.id);
  productContainer.remove();
  cart.splice(itemCartIndex, 1);
  setTotalPrice(totalPriceContainer);
  displayCartCounter();
}

function getTotalPrice() {
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return totalPrice;
}

function setTotalPrice(footer) {
  const totalPrice = getTotalPrice();
  footer.textContent = `Total: $ ${totalPrice}`;
}

function createProductCartElement(productContainer, product, totalPriceContainer) {
  const $modalBody = document.createElement("div");
  // Configura el contenido del modal
  $modalBody.className = "modal-body";
  $modalBody.innerHTML = `
    <div class="product">
      <img src="${product.img}" alt="${
  product.productName}" class="product-img" />
      <div class="product-info">
        <h4>${product.productName}</h4>
      </div>
      <div class="quantity">
        <span class="quantity-btn-decrese">-</span>
        <span class="quantity-input">${product.quantity}</span>
        <span class="quantity-btn-increse">+</span>
      </div>
      <div class="price">$ ${product.price * product.quantity}</div>
      <div class="delete-product">❌</div>
    </div>
    `;

  productContainer.append($modalBody);

  const $decreseButton = $modalBody.querySelector(".quantity-btn-decrese");
  const $increseButton = $modalBody.querySelector(".quantity-btn-increse");
  const $deleteButton = $modalBody.querySelector(".delete-product");

  $modalBody.addEventListener("click", event => {
    event.preventDefault()
    switch (event.target) {
      case $decreseButton:
        return decreseItemCart($modalBody, product, totalPriceContainer);
      case $increseButton:
        return increseItemCart($modalBody, product, totalPriceContainer);
      case $deleteButton:
        return deleteItemCart($modalBody, product, totalPriceContainer);
      default:
        break;
    }
  })
};



const displayCart = () => {
  $cartModal.style.display = "block";
  $cartOverlay.style.display = "block";
  const $modalHeader = document.createElement("header");
  const $modalClose = document.createElement("button");
  const $modalTitle = document.createElement("h3");
  const $modalFooter = document.createElement("div");

  // Configura el boton de cierre del header
  $modalClose.textContent = "❌";
  $modalClose.className = "modal-close";
  // Configura el título del modal
  $modalTitle.textContent = "Cart";
  $modalTitle.className = "modal-title";
  // Configura el footer del modal
  $modalFooter.className = "modal-footer";
  $modalFooter.innerHTML = `
  <div className="total-price">Total: ${getTotalPrice()}</div>
  <button class="btn-primary" id="checkout-btn"> Go to checkout <button>
  <div id="button-checkout"><div>
  `;

  // Agrega elementos al header del modal  
  $modalHeader.append($modalTitle, $modalClose);

  //viene de mercado pago, inicia una instancia de mp. Locale, se refiere a la moneda
  const mercadopago = new MercadoPago('<PUBLIC_KEY>', {
    locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
  });

  //Boton que dispara todo el codigo de MP
  const checkoutButton = $modalFooter.querySelector("checkout-btn");

  checkoutButton.addEventListener("click", function(){
    //Removemos el boton, porque aparecería otro y se generaría otra orden de compra
    checkoutButton.remove();
    const orderData ={
      quantity: 1,
      description: "Compra de e-commerce",
      price: totalPrice,
    };
    fetch("http://localhost;8080/create_preference", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    
    }).then(function(response){
      return response.json();
    }).then(function(preference){
      createCheckOutButton(preferenceId);
    }).catch(function(){
      alert("Unexpected error");
    })

    function createCheckoutButton(preferenceId) {
      // Initialize the checkout
      const bricksBuilder = mercadopago.bricks();
      const renderComponent = async (bricksBuilder) => {
        //if (window.checkoutButton) window.checkoutButton.unmount();
        await bricksBuilder.create(
          'wallet',
          'button-checkout', // class/id where the payment button will be displayed
          {
            initialization: {
              preferenceId: preferenceId
            },
            callbacks: {
              onError: (error) => console.error(error),
              onReady: () => {}
            }
          }
        );
      };
      window.checkoutButton =  renderComponent(bricksBuilder);
    }
    

  // Agrega elementos al contenedor del modal
  $cartModal.append($modalHeader);
  // Carga los productos al contenedor del modal
  cart.forEach(product => createProductCartElement($cartModal, product, $modalFooter));
  // Agrega el footer al contenedor del modal
  $cartModal.append($modalFooter);

  $modalClose.addEventListener("click", event => {
    event.preventDefault();
    $cartModal.removeChild($modalHeader)
    $cartModal.style.display = 'none'
    $cartOverlay.style.display = 'none'
  });
};

$cartButton.addEventListener("click", event => {
  event.preventDefault();
  clearCart();
  displayCart();
});

const displayCartCounter = () =>{
  const cartlenght = cart.reduce((acc, el) => el.quantity);
  $cartCounter.style.display = "block";
  $cartCounter.innerText = cartlenght;
}