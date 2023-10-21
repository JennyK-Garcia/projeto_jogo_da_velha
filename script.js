document.getElementById('dataForm').addEventListener('submit', function (e) { 
    e.preventDefault();

    let inputName = this.querySelector("#name").value
    let inputEmail = this.querySelector("#email").value

    let inputName2 = this.querySelector("#name2").value
    let inputEmail2 = this.querySelector("#email2").value

    const data = { name:inputName, email:inputEmail, name2:inputName2, email2:inputEmail2 };
    console.log(data)

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            alert('Vamos Ao jogo!');
            window.location.href = '/game/game.html';
            
        } else {
            alert('Error inserting data into PostgreSQL.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
});
