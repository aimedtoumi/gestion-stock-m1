let produits = JSON.parse(localStorage.getItem('produits')) || [];

function afficherProduits() {
  const liste = document.getElementById('listeProduits');
  liste.innerHTML = '';
  produits.forEach((p, i) => {
    let item = document.createElement('li');
    item.textContent = `${p.nom} - ${p.quantite} - ${p.prix} DA`;
    liste.appendChild(item);
  });
}

function ajouterProduit() {
  let nom = document.getElementById('nom').value;
  let quantite = parseInt(document.getElementById('quantite').value);
  let prix = parseFloat(document.getElementById('prix').value);
  produits.push({ nom, quantite, prix });
  localStorage.setItem('produits', JSON.stringify(produits));
  afficherProduits();
}

afficherProduits();