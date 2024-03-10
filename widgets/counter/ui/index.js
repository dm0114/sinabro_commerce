export const Counter = ({ container, data, id }) => {
  const count = document.createElement("span");
  count.id = id ?? "count";
  count.innerText = data;
  container.appendChild(count);
};
