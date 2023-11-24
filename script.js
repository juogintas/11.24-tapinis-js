const mainWrapper = document.getElementById("main-wrapper");
const addItem = document.getElementById("add-Item");

const fetchItems = async () => {
  const result = await fetch(
    "https://655ceb7d25b76d9884fe295d.mockapi.io/items"
  );

  const items = await result.json();

  return items;
};

const sortedItemsByPrice = (items) => {
  return items.sort((a, b) => a.price - b.price);
};

const buildCards = async () => {
  const items = await fetchItems();
  const sortedItems = sortedItemsByPrice(items);

  console.log(sortedItems);

  sortedItems.forEach((item) => {
    const card = document.createElement("a");
    card.href = "./item-description.html";
    card.setAttribute("class", "card");

    const name = document.createElement("h2");
    name.innerHTML = item.name;

    const price = document.createElement("h4");
    price.innerHTML = item.price + " €";

    const photo = document.createElement("img");
    photo.src = item.photo_url;

    card.append(name, photo, price);
    mainWrapper.append(card);

    card.addEventListener("click", () => {
      localStorage.setItem("itemId", item.id);
    });
  });
};

buildCards();

addItem.addEventListener("click", () => {
  window.location.replace("./add-item.html");
});
