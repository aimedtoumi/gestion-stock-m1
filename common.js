let stock = JSON.parse(localStorage.getItem('stock')) || [];
function enregistrerStock() {localStorage.setItem('stock', JSON.stringify(stock));}