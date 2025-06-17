const usuario = [];
//fechar parte de login e abre cadastro
document.getElementById('abrircadastro').addEventListener('click', () => {
    document.getElementById('login').classList.toggle('sumir')
    document.getElementById('criarconta').classList.toggle('sumir')

    document.getElementById('usuariol').value = "";
    document.getElementById('senhal').value = "";
});

//fechar parte de cadastro e abre login
document.getElementById('fechacadastro').addEventListener('click', () => {
    console.log("Botão clicado")
    document.getElementById('login').classList.toggle('sumir')
    document.getElementById('criarconta').classList.toggle('sumir')
    
    document.getElementById('usuarioc').value = "";
    document.getElementById('unome').value = "";
    document.getElementById('uemail').value = "";
    document.getElementById('senhac').value = "";
    document.getElementById('senhacconfirm').value = "";
});

//quando a conta é criada
document.getElementById('criadordeconta').addEventListener("submit", (e) => {
    e.preventDefault();

    if (document.getElementById("usuarioc").value == "") {
        document.getElementById('errosenha').classList.toggle('sumir');
        alert("Todos os campos devem ser preencidos");
        document.getElementById("usuarioc").focus();
        console.log(document.getElementById('errosenha').className);
        if(document.getElementById('errosenha').className =="sumir"){
        }
        else{
            console.log("ok");
            document.getElementById('errosenha').classList.toggle('sumir');

        }
    }
    else if (document.getElementById("uemail") == "") {
        document.getElementById("uemail").focus();

    }
    else if (document.getElementById("senhac") == "") {
        alert("Todos os campos devem ser preencidos");
        document.getElementById("senhac").focus();

    }
    else if (document.getElementById("senhacconfirm") == "") {
        document.getElementById("senhacconfirm").focus();

    }
    else{
        //condição de senha errada
        if (document.getElementById("senhac") === document.getElementById("senhacconfirm")) {
            usuario.push(novoUsuario); //add ao usuário o perfil escrito
            alert("Cadastro realizado com sucesso!");
            
            document.getElementById('login').classList.toggle('sumir')
            document.getElementById('criarconta').classList.toggle('sumir')
        }
        else{
            document.getElementById('senhaerrada').classList.toggle('sumir')
        }

    }
});

//quando clica o botao de login
document.getElementById('logador').addEventListener("submit", (e) => {
    e.preventDefault();

    const usuariologin = document.getElementById("usuariol").value;
    const senhalogin = document.getElementById("senhal").value;

    const usuario_Valido = usuario.find((u) => u.usuario === usuariologin && u.senha === senhalogin);
    console.log(usuario_Valido)

    if(usuario_Valido){
        alert("Acesso autorizado!");
        window.location.href = "index.html";
        
    }
    else{
        document.getElementById("usuariol").value = "";
        document.getElementById("senhal").value = "";
        document.getElementById("usuariol").focus();
        document.getElementById('loginerrado').classList.toggle('sumir');
    }

})



const novoUsuario = {
    usuario: document.getElementById("usuarioc").value,
    email: document.getElementById("uemail").value,
    senha: document.getElementById("senhac").value,
    senhaconfirm: document.getElementById("senhacconfirm").value
};