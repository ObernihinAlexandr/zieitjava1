let time = prompt("Введите время");
let name = prompt("Как вас зовут");
let password  =  prompt("Пароль?");
let a = prompt("Введите число 1");
let b = prompt("Введите число 2");
let c = prompt("Введите число 3");

if (name == 'John Wick' && password == 1234) {
    alert(name)
}
    else if( name == 'Ivan' && password == 3456 ){
        alert(name)
    }
    else if( name == 'Vanya' && password == 4567 ){
        alert(name)
    }
    else
        alert('Такого пользователя нет')

if (time >= 17  ) {
    alert("Добрый вечер")
}
else{
    alert("Добрый день")
}

if (a>b && a>c) {
    alert(a)
}
else if (b>c && b>a) {
    alert(b)
}
else if (c>a && c>b)
    alert(c)
else if (c==a && a==b && b ==c)
    alert(a)

// все 3 задания  