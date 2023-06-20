// ouvrire la fenetre de demande devis

function openModal() {
  document.getElementById("modal").style.display = "block";
}

// fermer la fenetre demande devis

function closeModal() {
  document.getElementById("modal").style.display = "none";
}





  // Sélectionnez le formulaire et le bouton d'envoi
  const form = document.querySelector('form');
  const submitButton = document.querySelector('#envoye');

  // Ajoutez un gestionnaire d'événements au formulaire lorsqu'il est soumis
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Vérifiez si les champs sont vides
    const nom = document.querySelector('#nom').value;
    const number = document.querySelector('#number').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (nom && number && email && message) {
      // Tous les champs sont remplis, affichez le message de succès
      alert('Votre demande a été envoyée.');
	   document.getElementById("modal").style.display = "none";
	    location.reload();
    } else {
      // Certains champs sont vides, affichez le message d'erreur
      alert('Veuillez remplir tous les champs.');
    }
  });

  // Ajoutez un gestionnaire d'événements pour surveiller les changements dans les champs de saisie
  form.addEventListener('input', function() {
    // Vérifiez si tous les champs sont remplis
    const nom = document.querySelector('#nom').value;
    const number = document.querySelector('#number').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

 
  });
  