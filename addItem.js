const backBtn = document.getElementById("back-btn");
const inputName = document.getElementById("input-name");
const inputDescription = document.getElementById("input-description");
const inputPrice = document.getElementById("input-price");
const inputPhotoUrl = document.getElementById("input-photo-url");
const inputLocation = document.getElementById("input-location");
const submitBtn = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");

const addItem = async () => {
  const itemName = inputName.value;
  const itemDescription = inputDescription.value;
  const itemPrice = inputPrice.value;
  const itemPhotoUrl = inputPhotoUrl.value;
  const itemLocation = inputLocation.value;

  if (
    !itemName ||
    !itemDescription ||
    !itemPrice ||
    !itemPhotoUrl ||
    !itemLocation
  ) {
    alert("Please fill in all fields");
    return;
  }

  const item = {
    Name: itemName,
    Description: itemDescription,
    Price: itemPrice,
    PhotoUrl: itemPhotoUrl,
    Location: itemLocation,
  };

  try {
    const response = await fetch(
      "https://655ceb7d25b76d9884fe295d.mockapi.io/items",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
  } catch (err) {
    console.error(err);
  }

  successMessage.textContent = "card added";

  setTimeout(() => {
    successMessage.textContent = "";
    inputName.value = "";
    inputDescription.value = "";
    inputPrice.value = "";
    inputPhotoUrl.value = "";
    inputLocation.value = "";
  }, 4000);
};

submitBtn.addEventListener("click", addItem);

backBtn.addEventListener("click", () => {
  window.location.replace("./index.html");
});
