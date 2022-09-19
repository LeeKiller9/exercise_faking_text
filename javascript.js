let realText = "Vui vẻ ko quạo nha!! :))"
let fakeArr = realText.split("")
console.log(fakeArr)
let display = document.getElementById('display');
let result = ""
let count = 0;

function fakeText() {
    result = result + fakeArr[count];
    display.value = result;
    count++;
    if (count > fakeArr.length) {
        display.value = "";
        result = "";
        count = 0;
    }
}

document.getElementById("display").addEventListener("keydown", function (event) {
    event.preventDefault()
});

