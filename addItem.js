const backBtn = document.getElementById("back-btn");
const inputName = document.getElementById("input-name");
const inputDescription = document.getElementById("input-description");
const inputPrice = document.getElementById("input-price");
const inputPhotoUrl = document.getElementById("input-photo-url");
const inputLocation = document.getElementById("input-location");
const submitBtn = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");

const addItem = async () => {
  const item = {
    Name: inputName.value,
    Description: inputDescription.value,
    Price: inputPrice.value,
    PhotoUrl: inputPhotoUrl.value,
    Location: inputLocation.value,
  };

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
};

submitBtn.addEventListener("click", addItem);

backBtn.addEventListener("click", () => {
  window.location.replace("./index.html");
});
