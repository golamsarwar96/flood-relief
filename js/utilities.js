//Toggle donation and history page
function showForm(id) {
  document.getElementById("donation-form").classList.add("hidden");
  document.getElementById("history-form").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

//Converting String to Number
function stringToNumber(str) {
  let numbers = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      numbers += str[i];
    }
  }

  return parseFloat(numbers);
}

function getTextInput(id) {
  //Getting the current donation amount
  const currentDonation = document.getElementById(id).innerText;
  //Converted the current donation to a floating number by making function
  const currentDonationNumber = stringToNumber(currentDonation);

  return currentDonationNumber;
}

function getDonation(id) {}
