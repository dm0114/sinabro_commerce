import { Count } from "../../../features/count";
import { Image, Name, Price } from "../../common/ui";
import { Counter } from "../../counter/ui";

const { getCount, increaseCount, decreaseCount, getTotalCount } = Count;

export const getProductElement = ({ container, dataId }) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.setAttribute("data-product-id", dataId);
  container.appendChild(productElement);
  return productElement;
};

export const ProductButton = ({ container, description, onClick }) => {
  const button = document.createElement("button");
  button.innerText = description;
  button.addEventListener("click", onClick);
  container.appendChild(button);
};

export const ProductList = ({ container, data }) => {
  data
    .map((product) => {
      const productElement = getProductElement({
        container,
        dataId: product.id,
      });
      Name({ container: productElement, name: product.name });
      Image({ container: productElement, src: product.images[0] });
      Price({ container: productElement, price: product.regularPrice });

      ProductButton({
        container: productElement,
        description: "+",
        onClick: () => {
          increaseCount(product.id);
          productElement.querySelector("#count").innerText = getCount(
            product.id
          );
          document.querySelector("#cart-count").innerText = getTotalCount();
        },
      });

      Counter({
        container: productElement,
        data: getCount(product.id),
      });

      ProductButton({
        container: productElement,
        description: "-",
        onClick: () => {
          decreaseCount(product.id);
          productElement.querySelector("#count").innerText = getCount(
            product.id
          );
          document.querySelector("#cart-count").innerText = getTotalCount();
        },
      });

      return productElement;
    })
    .forEach((productElement) => {
      container.appendChild(productElement);
    });
};
