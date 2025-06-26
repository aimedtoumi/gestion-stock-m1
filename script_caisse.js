let produits = JSON.parse(localStorage.getItem('produits')) || [];
let panier = [];

function remplirSelect() {
  const select = document.getElementById('produitSelect');
  produits.forEach((p, i) => {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = `${p.nom} - ${p.prix} DA`;
    select.appendChild(option);
  });
}

function ajouterPanier() {
  let index = document.getElementById('produitSelect').value;
  let qte = parseInt(document.getElementById('qteVente').value);
  let produit = produits[index];
  panier.push({ nom: produit.nom, prix: produit.prix, quantite: qte });
  produits[index].quantite -= qte;
  localStorage.setItem('produits', JSON.stringify(produits));
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById('panier');
  liste.innerHTML = '';
  let total = 0;
  panier.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.nom} x${item.quantite} - ${item.prix * item.quantite} DA`;
    total += item.prix * item.quantite;
    liste.appendChild(li);
  });
  document.getElementById('total').textContent = total;
}

remplirSelect();