import { Count } from "../../../features/count";
import { Image, Name } from "../../common/ui";
import { Counter } from "../../counter/ui";
import { getProductElement } from "../../product/ui";

const { getCount } = Count;

export const CartButton = ({ container, onClick, count }) => {
  const button = document.createElement("button");
  button.id = "cart-button";
  button.innerText = "Cart";
  Counter({
    container: button,
    data: count,
    id: "cart-count",
  });
  button.addEventListener("click", onClick);
  container.appendChild(button);
};

export const Cart = ({ container, data }) => {
  data
    .map((product) => {
      const productElement = getProductElement({
        container,
        dataId: product.id,
      });

      Name({ container: productElement, name: product.name });
      Image({ container: productElement, src: product.images[0] });

      Counter({
        container: productElement,
        data: getCount(product.id),
      });

      return productElement;
    })
    .forEach((productElement) => {
      container.appendChild(productElement);
    });

  CartCloseButton({
    container: document.querySelector("#cart-content"),
    onClick: () => {
      document.querySelector("#cart-layer").style.visibility = "hidden";
    },
  });
};

export const CartCloseButton = ({ container, onClick }) => {
  const button = document.createElement("button");
  button.id = "cart-close";
  button.innerText = "Close";
  button.addEventListener("click", onClick);
  container.appendChild(button);
};
