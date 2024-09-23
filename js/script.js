//Change the color of main donation button and history button
const mainDonationBtn = document.getElementById("main-donation-btn");
const mainHistoryBtn = document.getElementById("main-history-btn");

mainDonationBtn.addEventListener("click", function () {
  mainDonationBtn.style.backgroundColor = "#B4F461";
  mainHistoryBtn.style.backgroundColor = "#F2F2F2";

  showForm("donation-form");
});

mainHistoryBtn.addEventListener("click", function () {
  mainHistoryBtn.style.backgroundColor = "#B4F461";
  mainDonationBtn.style.backgroundColor = "#F2F2F2";

  showForm("history-form");
  mainHistoryBtn.removeAttribute("hidden");
});

//Donation Calculation
getDonation(
  "first-donation-btn",
  "first-donation-field",
  "main-balance",
  "first-current-donation",
  "first-donation-name",
  "my_modal_1"
);

getDonation(
  "second-donation-btn",
  "second-donation-field",
  "main-balance",
  "second-current-donation",
  "second-donation-name",
  "my_modal_2"
);

getDonation(
  "third-donation-btn",
  "third-donation-field",
  "main-balance",
  "third-current-donation",
  "third-donation-name",
  "my_modal_3"
);
