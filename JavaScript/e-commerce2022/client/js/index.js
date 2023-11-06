const $shopContent = document.querySelector("#shopContent");
const cart = [];

const addToCart = product => {
  /* 
  Busca un producto por id en la lista de productos del carrito,
  si lo encuentra aumenta en 1 su propiedad "quantity",
  si no lo encuentra lo agrega al listado "cart"
  */
  const itemCartIndex = cart.findIndex(item => item.id == product.id);
  if (itemCartIndex !== -1) {
    cart[itemCartIndex] = {
      ...product,
      quantity: cart[itemCartIndex].quantity + 1
    };
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
};

products.forEach(product => {
  const $product = document.createElement("div");
  const $productName = document.createElement("h3");
  const $productPrice = document.createElement("p");
  const $productImage = document.createElement("img");
  const $productBuyButton = document.createElement("button");
  $productName.textContent = product.productName;
  $productPrice.textContent = `$${product.price}`;
  $productImage.setAttribute("src", product.img);
  $productBuyButton.textContent = "Comprar";

  $product.append($productImage, $productName, $productPrice, $productBuyButton);
  $shopContent.append($product);

  $productBuyButton.addEventListener("click", event => {
    event.preventDefault();
    addToCart(product)
  });
});
