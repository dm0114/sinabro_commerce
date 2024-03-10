import "./style.css";
import { ProductService } from "./services/index.js";
import { Count } from "./features/count/index.js";
import { ProductButton, ProductList } from "./widgets/product/ui/index.js";
import { Cart, CartButton } from "./widgets/cart/ui/index.js";
const { getCount, getTotalCount } = Count;

const main = (async () => {
  const products = await ProductService.getProducts();

  ProductList({
    container: document.querySelector("#product"),
    data: products,
  });

  CartButton({
    container: document.querySelector("#cart"),
    onClick: () => {
      document.querySelector("#cart-layer").style.visibility = "visible";
      Cart({
        container: document.querySelector("#cart-content"),
        data: products.filter((product) => getCount(product.id) > 0),
      });
    },
    count: getTotalCount(),
  });

  Cart({
    container: document.querySelector("#cart-items"),
    data: products.filter((product) => getCount(product.id) > 0),
  });
})();
