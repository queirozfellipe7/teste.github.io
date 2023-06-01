document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('musicPopup');
    popup.classList.add('active');
});

function redirecionarWhatsApp() {
    window.open("https://api.whatsapp.com/send?phone=+5593991885821&text=Só%20se%20for%20agora,%20meu%20patrão", target="_blank");
}

function mostrarPopup(button) {
    var noPopup = document.getElementById('noPopup');
    noPopup.classList.add('active');
    button.classList.add('hide');
}

function iniciarMusica() {
    var musicPopup = document.getElementById('musicPopup');
    musicPopup.classList.remove('active');
    var audio = document.getElementById('audio');
    audio.play();
}

function fecharPopup() {
    var noPopup = document.getElementById('noPopup');
    noPopup.classList.remove('active');
}

function fecharPopupmusic() {
    var musicPopup = document.getElementById('musicPopup');
    musicPopup.style.display = 'none';
}