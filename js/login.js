//assim que a página iniciar
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

const salvarUsuarios = () => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

document.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(localStorage.getItem('usuarios')) || [];

    const formLogin = document.getElementById('formLogin');
    const formCadastro = document.getElementById('formCadastro');
    const btncadastrar = document.getElementById('cadastrar'); //add onclicl
    const btnlogar = document.getElementById('logar');

})

//funções
function apagar(){
    console.log("fui rodado apagar")
    //tela login
    document.getElementById("usuariol").value = "";
    document.getElementById("senhal").value = "";
    //tela cadastro
    document.getElementById('usuarioc').value = "";
    document.getElementById('uemail').value = "";
    document.getElementById('senhac').value = "";
    document.getElementById('senhacconfirm').value = "";
}

function trocapag(){
    console.log("fui rodado trocapag")
    document.getElementById('login').classList.toggle('sumir');
    document.getElementById('criarconta').classList.toggle('sumir');
    apagar();

}

//Abre a pag de cadastro
document.getElementById('abrircadastro').addEventListener('click', () => {
    trocapag();
});

//form de cadastro
document.getElementById('formCadastro').addEventListener('submit', (e) => {
    e.preventDefault();

    const novoUsuarioI = document.getElementById("usuarioc").value;
    const novoEmailI = document.getElementById("uemail").value;
    const novaSenhaI = document.getElementById("senhac").value;
    const novaConfirmacaoI = document.getElementById("senhacconfirm").value;


    if (novoUsuarioI.trim() == "") {
        console.log(novoUsuarioI);
        alert("Todos os campos devem ser preencidos");
        document.getElementById("usuarioc").focus();
    }
    else if (novoEmailI.trim() == "") {
        alert("Todos os campos devem ser preencidos");
        document.getElementById("uemail").focus();

    }
    else if (novaSenhaI.trim() == "") {
        alert("Todos os campos devem ser preencidos");
        document.getElementById("senhac").focus();

    }
    else if (novaConfirmacaoI.trim() == "") {
        alert("Todos os campos devem ser preencidos");
        document.getElementById("senhacconfirm").focus();
    }
    else{
        if (novaSenhaI === novaConfirmacaoI) {
            const novoUsuario = {
                usuario: novoUsuarioI.trim(),
                email: novoEmailI.trim(),    
                senha: novaSenhaI.trim()     
            };

            const usuarioExistente = usuarios.find((u) => u.usuario === novoUsuario.usuario);

            if(usuarioExistente) {
                alert("Este usuário já existe");
            }
            else{
                usuarios.push(novoUsuario);
                salvarUsuarios();
                alert("Cadastro realizado com sucesso!");
                trocapag();
            }            
        }
        //condição de senha errada
        else{
            document.getElementById('senhaerrada').classList.remove('sumir'); // Mostra a mensagem de erro
            setTimeout(() => {
                document.getElementById('senhaerrada').classList.add('sumir');
            }, 6000); // Esconde a mensagem após 3 segundos
        }
    }
})

//Abre pag de login
document.getElementById('fechacadastro').addEventListener('click', () => {
    trocapag();
});


//quando clica o botao de login
document.getElementById('formLogin').addEventListener("submit", (e) => {
    e.preventDefault();

    const usuariologinValor = document.getElementById('usuariol').value.trim();
    const senhaloginValor = document.getElementById('senhal').value.trim();

    const usuarioValido = usuarios.find((u) => u.usuario === usuariologinValor && u.senha === senhaloginValor);
    console.log(usuarioValido);

    
    if(usuarioValido){
        alert("Acesso autorizado!");
        window.location.href = "index.html";
        
    }
    else {
        document.getElementById("usuariol").focus();
        document.getElementById('loginerrado').classList.remove('sumir'); // Mostra a mensagem de erro
        setTimeout(() => {
            document.getElementById('loginerrado').classList.add('sumir');
        }, 6000); // Esconde a mensagem após 3 segundos
    }

})

