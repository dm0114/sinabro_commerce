export const Name = ({ container, name }) => {
  const nameElement = document.createElement("h3");
  nameElement.innerText = name;
  container.appendChild(nameElement);
};

export const Image = ({ container, src }) => {
  const image = document.createElement("img");
  image.src = src;
  container.appendChild(image);
};

export const Price = ({ container, price }) => {
  const priceElement = document.createElement("p");
  priceElement.innerText = price;
  container.appendChild(priceElement);
};
