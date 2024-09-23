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

function getDonation(buttonId, inputId, mainBalance, currentBalance) {
  document.getElementById(buttonId).addEventListener("click", function () {
    //Overall balance
    const mainBalanceNumber = getTextInput(mainBalance);
    console.log(mainBalanceNumber);

    //Validation : main balance should be greater than 0
    if (mainBalanceNumber <= 0) {
      alert("You do not have sufficient balance");
      return;
    }

    //capturing donation input.
    const firstDonation = document.getElementById(inputId).value;
    //converting it to a floating number
    const firstDonationNumber = parseFloat(firstDonation);

    if (firstDonationNumber > mainBalanceNumber) {
      alert("You do not have sufficient balance");
      return;
    }

    if (isNaN(firstDonationNumber)) {
      //Validation : check if the number is a string or not.
      alert("Not a valid number");
      return;
    }

    //Converting current donation value to number;
    const currentDonationNumber = getTextInput(currentBalance);
    console.log(currentDonationNumber);

    //Updated donation after a donation.
    const updatedDonation = firstDonationNumber + currentDonationNumber;

    //Setting up the balance in frontend
    document.getElementById(
      currentBalance
    ).innerText = `${updatedDonation} BDT`;

    //Overall balance after making a donation
    const updatedMainBalance = mainBalanceNumber - firstDonationNumber;
    console.log(updatedMainBalance);

    //Setting up main balance in frontend.
    document.getElementById(
      mainBalance
    ).innerHTML = `${updatedMainBalance} BDT`;
  });
}
