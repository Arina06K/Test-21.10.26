function verify() {
    console.log("a,b,c")
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    console.log(a, b, c)

    if (a < b && b < c) {
        result = "A < B < C";
        check = true;
    } else if (a < b && b > c) {
        result = "A < B > C";
        check = true;
    } else {
        result = "Ни одно условие не выполнено"
        check = false;
    }

    document.getElementById("result").value = result;
}

function sendData() {
    verify();

    if (check) {
        document.getElementById("q").value =
            "A=" + elementA.value +
            ", B=" + elementB.value +
            ", C=" + elementC.value +
            ", результат: " + result;

        document.getElementById("UserEnter").submit();
    }
    else {
        alert("Ни одно условие не выполнено");
    }
}

let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

document.getElementById("verify").addEventListener("click", verify);
document.getElementById("send").addEventListener("click", sendData);