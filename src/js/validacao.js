
function validarFormulario() {
    const inputs = document.querySelectorAll("#myForm input");
    const erros = document.querySelectorAll(".erro");

    inputs.forEach(function (input) {
        const erro = document.querySelector(`#erro-${input.name}`);
        if (input.value == "") {
            input.classList.remove('campo');
            input.classList.add('nao-valido');
            erroDeCampo(erro);
        } else {
            input.classList.remove('campo');
            input.classList.add('valido');
            erro.classList.remove('ativo');
            erro.classList.add('erro');
        }
    });

    function erroDeCampo(erro) {
        erro.classList.remove("erro")
        erro.classList.add("ativo")
        
    }

}






