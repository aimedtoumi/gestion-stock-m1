let produits = JSON.parse(localStorage.getItem('produits')) || [];

function afficherStats() {
  let stats = document.getElementById('stats');
  stats.innerHTML = '<h2>Stock actuel</h2>';
  produits.forEach(p => {
    stats.innerHTML += `<p>${p.nom} : ${p.quantite} en stock</p>`;
  });
}

afficherStats();