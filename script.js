
var btn = document.querySelector('.btn');

btn.onclick = function(){
    var number1 = document.querySelector('.input1').value;
    var number2 = document.querySelector('.input2').value;
    var number3 = document.querySelector('.input3').value;
    var results = document.querySelector('.result');
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    number3 = parseInt(number3);
    var result = number1 + number2 + number3;
    results.value = result;

    var sum = document.querySelector('#result');
    sum.innerHTML = '<h3><b>Twój wynik</b>: ' + result +'</h3>';
}