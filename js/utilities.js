function showForm(id){
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}