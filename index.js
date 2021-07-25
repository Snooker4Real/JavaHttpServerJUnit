var password = "12345";

function passcheck(){
    if(document.getElementById('pass1').value != password){
        alert('Mauvais mot de passe, essayez encore.');
        return false;
    } else if(document.getElementById('pass1').value == password){
        alert('Mot de passe validé');
    }

}

