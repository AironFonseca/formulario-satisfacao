document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pesquisaFormulario");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valido = true;
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const avaliacao = document.querySelector('input[name="avaliacao"]:checked');
        const categoria = document.getElementById("categoria").value;

        document.querySelectorAll('.erro').forEach(el => el.textContent = '');

        if (nome.length < 5) {
            document.getElementById("erroNome").textContent = "Nome deve ter pelo menos 5 caracteres.";
            valido = false;
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            document.getElementById("erroEmail").textContent = "E-mail inválido.";
            valido = false;
        }
        if (!avaliacao) {
            document.getElementById("erroAvaliacao").textContent = "Escolha uma avaliação.";
            valido = false;
        }
        if (!categoria) {
            document.getElementById("erroCategoria").textContent = "Escolha uma categoria.";
            valido = false;
        }

        if (valido) {
            resultado.textContent = "Formulário enviado com sucesso! Obrigado.";
            resultado.style.color = "green";
            setTimeout(() => { form.reset(); resultado.textContent = ""; }, 3000);
        }
    });
});
