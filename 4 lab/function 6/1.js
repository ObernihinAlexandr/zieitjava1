function add (a,b) {
    return a+b;
}
function sub(a,b) {
    return a -b;
}
function mul(a,b) {
    return a * b;
}

function div(a, b) {
    return a/b;
}
var operand1 = prompt("Введите первое число:")
var sign = prompt("Введите знак арифмитической операции: + - * / @ ^");
var operand2 = prompt("Введите второе число:");
var result = undefined;

operand1 = parseInt(operand1);
operand2 = parseInt(operand2);

switch(sign) {
    case "+":
        result = add(operand1, operand2);
        break;
    case "-":
        result = sub(operand1, operand2);
        break;
    case "*":
        result = mul(operand1, operand2);
        break;
    case "/":
        result = div(operand1, operand2);
        break;
    case "@":
        result = Math.pow(operand1, operand2);
        break;
    case "^":
        result = Math.sqrt(operand1, operand2);
        break;
    
    default:
        document.write("<p><b style='color:red'>"+
        sign + "</b> - не является знаком арифмитеской операции");
    }

    if (result != undefined)
        document.write("<p>" + operand1 + " " +  sign + " " 
        + operand2 + " = " + result); 