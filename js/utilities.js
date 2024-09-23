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

function getDonation(
  buttonId,
  inputId,
  mainBalance,
  currentBalance,
  donation,
  modalId
) {
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
    const firstDonationNumber = parseFloat(firstDonation);

    const myModal1 = document.getElementById(modalId);
    if (firstDonation.trim() === "") {
      myModal1.close();
    } else {
      myModal1.showModal();
    }

    //converting it to a floating number

    console.log(firstDonationNumber);
    if (firstDonationNumber > mainBalanceNumber) {
      myModal1.close();
      alert("You do not have sufficient balance");
      return;
    }

    if (isNaN(firstDonationNumber)) {
      alert("Invalid input");
      myModal1.close();
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

    const today = new Date();
    const div = document.createElement("div");
    const donationName = document.getElementById(donation).innerText;
    div.innerHTML = `
         <div class="border border-zinc-200 w-full max-w-6xl rounded-2xl p-10 text-black text-left">
                <p class="font-semibold text-xl">
                    ${firstDonationNumber} Taka is Donated for ${donationName}.
                <p>
                <br>
                <p class="text-secondaryText">${today}</p>
            </div>
            <br>
    `;

    document.getElementById("history-form").appendChild(div);

    //modal
  });
}
