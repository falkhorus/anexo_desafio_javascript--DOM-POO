
let contatoArr = [];

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

window.addEventListener('DOMContentLoaded', (event) => { // Garantir que o DOM esteja carregado antes de adicionar o listener
    const form = document.getElementById("formid");

    form.addEventListener("submit", function(event) { // Adicionar listener de evento de submit
        event.preventDefault(); // Para prevenir o comportamento padrão do formulário de recarregar a página
        
        let data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value,
            form.elements.namedItem("email").value,
            form.elements.namedItem("cpf").value,
            form.elements.namedItem("telefone").value,
            form.elements.namedItem("contato").value
        );
        
        contatoArr.push(data); // Adiciona o novo contato ao final do array
        
        console.log("Array de contatos foi atualizado:");
        console.log(contatoArr);

        if (data.nome !== "") {  // Verifica se o nome contido no objeto (contato) não está vazio, para poder exibir a mensagem de alerta
            alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
        }

        form.reset(); // Limpa os campos do formulário após o envio
    });
});