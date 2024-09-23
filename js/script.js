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