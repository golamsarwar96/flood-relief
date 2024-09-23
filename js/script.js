//Change the color of main donation button and history button
const mainDonationBtn = document.getElementById('main-donation-btn');
const mainHistoryBtn = document.getElementById('main-history-btn');

mainDonationBtn.addEventListener('click',function(){
    mainDonationBtn.style.backgroundColor = '#B4F461';
    mainHistoryBtn.style.backgroundColor = '#F2F2F2';

    showForm('donation-form');
})

mainHistoryBtn.addEventListener('click',function(){
    mainHistoryBtn.style.backgroundColor = '#B4F461';
    mainDonationBtn.style.backgroundColor = '#F2F2F2';

    showForm('history-form');
})

//Donation Calculation
document.getElementById('first-donation-btn')
.addEventListener('click',function(){
    
    //Overall balance
    const  mainBalanceNumber = getTextInput('main-balance');
    console.log(mainBalanceNumber);

    //Validation : main balance should be greater than 0
    if(mainBalanceNumber<=0){
        alert('You do not have sufficient balance');
        return;
    }

    //capturing donation input.
    const firstDonation = document.getElementById('first-donation-field').value;
    //converting it to a floating number
    const firstDonationNumber = parseFloat(firstDonation);

    //Validation : check if the number is a string or not.
    if(isNaN(firstDonationNumber)){
        alert('Not a valid number');
        return;
    }

    //Converting current donation value to number;
    const currentDonationNumber = getTextInput('current-donation');
    console.log(currentDonationNumber);

    //Updated donation after a donation.
    const updatedDonation = firstDonationNumber + currentDonationNumber;

    //Setting up the balance in frontend
    document.getElementById('current-donation').innerText = `${updatedDonation} BDT`;

    //Overall balance after making a donation
    const updatedMainBalance = mainBalanceNumber - firstDonationNumber;
    console.log(updatedMainBalance);

    //Setting up main balance in frontend.
    document.getElementById('main-balance').innerHTML = `${updatedMainBalance} BDT`;

})