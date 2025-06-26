let produits = JSON.parse(localStorage.getItem('produits')) || [];

function afficherProduits() {
  const tableau = document.getElementById('listeProduits');
  tableau.innerHTML = '';  // Réinitialiser le tableau

  produits.forEach((p, i) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${p.nom}</td>
      <td>${p.quantite}</td>
      <td>${p.prixAchat} DA</td>
      <td>${p.prix} DA</td>
      <td>${(p.prix - p.prixAchat).toFixed(2)} DA</td>
    `;
    tableau.appendChild(row);
  });
}

function ajouterProduit() {
  let nom = document.getElementById('nom').value;
  let quantite = parseInt(document.getElementById('quantite').value);
  let prixAchat = parseFloat(document.getElementById('prixAchat').value);
  let prix = parseFloat(document.getElementById('prix').value);

  if (!nom || isNaN(quantite) || isNaN(prixAchat) || isNaN(prix)) {
    return alert("Veuillez remplir tous les champs.");
  }

  produits.push({ nom, quantite, prixAchat, prix });
  localStorage.setItem('produits', JSON.stringify(produits));
  afficherProduits();
}

afficherProduits();