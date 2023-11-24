const itemId = localStorage.getItem("itemId");

const itemName = document.getElementById("name");
const itemImage = document.getElementById("item-image");
const description = document.getElementById("description");
const price = document.getElementById("price");
const itemLocation = document.getElementById("location");
const deleteBtn = document.getElementById("delete-btn");

console.log(itemId);

const displayDescription = async () => {
  const response = await fetch(
    `https://655ceb7d25b76d9884fe295d.mockapi.io/items/${itemId}`
  );

  const item = await response.json();

  console.log(item);

  itemName.textContent = item.name;
  itemImage.src = item.photo_url;
  description.textContent = item.description;
  price.textContent = item.price + " €";
  itemLocation.textContent = item.location;
};

displayDescription();

deleteBtn.addEventListener("click", async () => {
  const response = await fetch(
    `https://655ceb7d25b76d9884fe295d.mockapi.io/items/${itemId}`,
    { method: "DELETE" }
  );

  const result = await response.json();

  if (result) {
    setTimeout(() => {
      window.location.replace("./index.html");
    }, 2000);
  }
});
