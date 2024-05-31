document.getElementById('formIMC').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores de peso y estatura
    var peso = parseFloat(document.getElementById('peso').value);
    var estatura = parseFloat(document.getElementById('estatura').value);

    // Calcular el IMC
    var imc = peso / (estatura * estatura);

    // Mostrar el resultado
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Tu IMC es: ' + imc.toFixed(2);

    // Determinar la posición en la tabla del IMC
    if (imc < 18.5) {
        resultado.innerHTML += '<br> Peso inferior al normal';
    } else if (imc < 25) {
        resultado.innerHTML += '<br> Peso normal';
    } else if (imc < 30) {
        resultado.innerHTML += '<br> Sobrepeso';
    } else {
        resultado.innerHTML += '<br> Obesidad';
    }
});