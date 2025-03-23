function buscarCep() {
    //Pega o valor da pesquisa do usuário e armazena na variável
    let pesquisa = document.getElementById("cep").value;

    //Faz a requisição da pesquisa la no site viacep
    const ajax = new XMLHttpRequest();
    ajax.open('Get', "https://viacep.com.br/ws/" + pesquisa + "/json/");
    ajax.send();

    //Devolve a pesquisa em forma de texto
    ajax.onload = function () {

        //Transforma o texto puxado do site para objeto
        let obj = JSON.parse(this.responseText);

        //Puxa o parâmetro específico de dentro do objeto
        let logradouro = obj.logradouro;
        let bairro = obj.bairro;
        let uf = obj.uf;
        let estado = obj.estado;

        //Exibe na tela
        document.getElementById("texto").innerHTML = "Local: " + logradouro + "<br><br>Bairro: " + bairro + "<br><br>Uf: " + uf + "<br><br>Estado: " + estado;
    }
}





