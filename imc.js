var botaoCalcular = document.getElementById('botaoCalcular');
botaoCalcular.onclick = calcularImc;
var resultado = document.getElementById("resultado");
var inputPeso = document.getElementById('peso');
var inputAltura = document.getElementById('altura');
var li = document.getElementById('li')


function calcularImc() {
    console.log("entrou");
    var peso = parseFloat(inputPeso.value);
    var altura = parseFloat(inputAltura.value);;
    resultado.innerText = (peso / (altura * altura));

    var calculo = parseFloat((peso) / (parseFloat(altura) * (parseFloat(altura))));
    console.log(calculo);

    if (calculo < 16) {
        li.innerText = "Magreza grave";
        li.style.color = 'red';
    } else if ((calculo >= 16) && (calculo < 17)) {
        li.innerText = "Magreza moderada";
        li.style.color = '#ed7d31';

    } else if ((calculo >= 17) && (calculo < 18.5)) {
        li.innerText = "Magreza leve";
        li.style.color = '#44546a';

    } else if ((calculo >= 18.5) && (calculo < 25)) {
        li.innerText = "Saudável";
        li.style.color = '#00b050';

    } else if ((calculo >= 25) && (calculo < 30)) {
        li.innerText = "Sobrepeso";
        li.style.color = '#44546a';

    } else if ((calculo >= 30) && (calculo < 35)) {
        li.innerText = "Obesidade Grau I";
        li.style.color = '#ed7d31';

    } else if ((calculo >= 35) && (calculo < 40)) {
        li.innerText = "Obesidade Grau II (severa)";
        li.style.color = '#c00000';

    } else if (calculo >= 40) {
        li.innerText = "Obesidade Grau III (mórbida)";
        li.style.color = '#c00000';
    }

}