import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import emailjs from '@emailjs/browser';

emailjs.init('dMGcRvhkVvyyyaCz3')

const form = document.getElementById('form-contato');
// Selecionei o botão para dar o feedback de "Enviando"
const btn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const serviceID = 'service_ebxesn7';
    const templateID = 'template_f03h4iv';

    // Feedback visual profissional
    const textOriginal = btn.innerText;
    btn.innerText = "ENVIANDO...";
    btn.disabled = true;

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            Toastify({
                text: "Mensagem enviada com sucesso! Coleta realizada.",
                duration: 4000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #003366, #00f2ff)",
                    borderRadius: "10px",
                }
            }).showToast();
            form.reset();
        })
        .catch((err) => {
            Toastify({
                text: "Erro ao enviar: " + (err.text || "Falha na conexão"),
                duration: 5000,
                gravity: "top",
                position: "right",
                style: {
                    background: "#ef4444",
                    borderRadius: "10px",
                }
            }).showToast();
        })
        .finally(() => {
            // Restaura o botão após o término
            btn.innerText = textOriginal;
            btn.disabled = false;
        });
});