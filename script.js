document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;

    // Envoi du feedback à l'API (à définir)
    fetch('/api/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Succès:', data);
        alert('Merci pour votre retour !');
    })
    .catch((error) => {
        console.error('Erreur:', error);
    });
});
