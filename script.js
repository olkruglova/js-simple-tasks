
var btn = document.querySelector('.btn1');

/*
task1: Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут
*/
btn.onclick = function() {
    var number1 = document.querySelector('.input1').value;
    var number2 = document.querySelector('.input2').value;
    var number3 = document.querySelector('.input3').value;
    var results = document.querySelector('.result');
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    number3 = parseInt(number3);
    var result = number1 + number2 + number3;
    results.value = result;
    //...и запишите их сумму в абзац с id="result"
    var sum = document.querySelector('#result');
    sum.innerHTML = '<h3><b>Twój wynik</b>: ' + result +'</h3>';
}

/*
task2: Дан инпут. В него вводится число. По нажатии на кнопку найдите сумму цифр этого числа.
*/
var btn2 = document.querySelector('.btn2');

btn2.onclick = function() {
    var num = document.querySelector('.input4').value;
    var summ = 0;
    var res = num.split('');
    console.log(res);
    for (var i=0; i<res.length; i++) {
        res[i] = parseInt(res[i]);
        summ += res[i];
    }
    var sum = document.querySelector('#result2');
    sum.innerHTML = '<h3><b>Twój wynik</b>: ' + summ +'</h3>';
}

/*
task3: Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел
*/
var form = document.querySelector(".input5");
form.addEventListener("blur", function() {
    var nums = form.value;
    nums = nums.split(',');
    console.log(nums)
    var res = 0;
    for(var i=0; i<nums.length; i++){
        nums[i] = parseInt(nums[i]);
        res += nums[i]/nums.length;
        console.log(res)
    }
    var wyn = document.querySelector('#result3');
    wyn.innerHTML = '<h3><b>Twój wynik</b>: ' + res +'</h3>';
}, true);

/*
task4: Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты.
*/
var form2 = document.querySelector(".input6");
form2.addEventListener("blur", function() {
    var names = form2.value;
    names = names.split(' ');
    var firstName = document.querySelector('.name-output1');
    firstName.value = names[0];
    var lastName = document.querySelector('.name-output2');
    lastName.value = names[1];
}, true);
/*
task5: Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).
*/
var form3 = document.querySelector(".input7");
form3.addEventListener("blur", function() {
    var names = form3.value;
    var arr = names.split(' ');
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i].split('');
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join('');
    }
    names = arr.join(' ');
    form3.value = names;

}, true);

/*
task6: Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
*/
var text = document.querySelector(".input8");
text.addEventListener("blur", function() {
    var txt = text.value;
    txt = txt.split(' ');
    console.log(txt)
    var res = 0;
    for(var i=0; i<txt.length; i++){
        res += 1;
        console.log(res)
    }
    var wyn = document.querySelector('#result5');
    wyn.innerHTML = '<h3><b>Ilość słów w tekście</b>: ' + res +'</h3>';
}, true);

/*
task7: Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.
*/
var text2 = document.querySelector(".input9");
text2.addEventListener("blur", function() {
    var txt = text2.value;
    txt = txt.split(' ');
    console.log(txt);
    var max = 0;
    for(var i=0; i<txt.length; i++){
        var num = 0;
        txt2 = txt[i].split('');
        for (var j=0; j<txt2.length; j++) {
            num += 1;
        }
        if (num > max){
            max = num;
        }
        console.log(max);
    }
    var wyn = document.querySelector('#result6');
    wyn.innerHTML = '<h3><b>Ilość znaków w najdłuższym słowie</b> :' + max + '</h3>';
}, true);

/*
task8: Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31
*/
var date = document.querySelector(".input10");
date.addEventListener("blur", function() {
    var dt = date.value;
    //console.log(dt);
    dt = dt.split('.');
    dt = dt.reverse();
    date2 = dt.join('-');
    //console.log(date2);
    date.value = date2;
}, true);

/*
task9: Дан инпут. В него вводится год рождения пользователя. По нажатию на кнопку выведите в абзац ниже сколько пользователю лет. 
*/
var btn3 = document.querySelector('.btn3');

btn3.onclick = function() {
    var date = document.querySelector('.input11').value;
    date = parseInt(date);
    var d = new Date();
    var dateNow = d.getFullYear();
    var age = dateNow - date;

    var userAge = document.querySelector('#result7');
    userAge.innerHTML = '<h3><b>Twój wiek</b>: ' + age +'</h3>';
}
/*
task10: Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
*/
var btn4 = document.querySelector('.btn4');

btn4.onclick = function func() {
    var dayWeak = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    //var month = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = document.querySelector('.input12').value;
    var arr = date.split('.');
    console.log(arr);
	var arr2 = arr.reverse();
    var str1 = arr2.join(',')
    console.log(str1);
	var date1 = new Date(str1);
	var day = date1.getDay();
	var p = document.getElementById('result8');
	p.innerHTML = dayWeak[day];
}
/*
task11: Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
*/
var btn5 = document.querySelector('.btn5');

btn5.onclick = function func() {
    var slowo = document.querySelector('.input13').value;
    var wyn = document.getElementById('result9');
    console.log(slowo);
    var slowoRev = slowo.split('').reverse().join('');
    console.log(slowoRev);
        if(slowo == slowoRev) {
            wyn.innerHTML = '<p><b>To jest słowo palindrom</b></p>';
        } else {
            wyn.innerHTML = '<p>To <b>nie jest</b> słowo palindrom</p>';
        }
}
/*
task12: Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3
*/
var btn6 = document.querySelector('.btn6');

btn6.onclick = function func() {
    var number = document.querySelector('.input14').value;
    var wyn = document.getElementById('result10');
    number = number.split('');
    console.log(number);
    for(i=0;i<number.length;i++){
        if(number[i] == 3) {
            wyn.innerHTML = '<p><b>Liczba zawiera cyfrę 3</b></p>';
        } else {
            wyn.innerHTML = '<p>Liczba <b>nie zawiera</b> cyfrę 3</p>';
        }
    }
}
/*
task13: Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
*/
var btn7 = document.querySelector('.btn7');

btn7.onclick = function func() {
    var p = document.getElementsByClassName('akapit');
    console.log(p);
    for(i=0;i<p.length;i++){
        p[i].innerHTML = p[i].innerHTML+ '<b>(akapit numer ' + (i+1) + ')';
    }
}