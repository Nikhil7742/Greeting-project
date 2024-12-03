function showInput() {
    var inputelement1 = document.getElementById("input1").value;
    document.getElementById("toOutPut").innerText = inputelement1
}
function fromInput() {
    var inputelement2 = document.getElementById("input2").value;
    document.getElementById("fromOutPut").innerText = inputelement2
}
function msgInput() {
    var inputelement3 = document.getElementById("textarea").value;
    document.getElementById("messageOutPut").innerText = inputelement3;
}
function imagechange1() {
    var img1 = document.getElementById("img1").src;
    document.querySelector(".output-section").style.backgroundImage = 'url(' + img1 + ')';
}
function imagechange2() {
    var img2 = document.getElementById("img2").src;
    document.querySelector(".output-section").style.backgroundImage = 'url(' + img2 + ')';
}
function imagechange3() {
    var img3 = document.getElementById("img3").src;
    document.querySelector(".output-section").style.backgroundImage = 'url(' + img3 + ')';
}
function imagechange4() {
    var img4 = document.getElementById("img4").src;
    document.querySelector(".output-section").style.backgroundImage = 'url(' + img4 + ')';
}
function change1() {
    var body = document.querySelector("body");
    var box1 = document.querySelector(".c-1");
    // Access the computed style of box1 to get the background color
    var box1BackgroundColor = window.getComputedStyle(box1).backgroundColor;
    // Set the body's text color to the background color of box1
    body.style.color = box1BackgroundColor;
}
function change2() {
    var body = document.querySelector("body");
    var box2 = document.querySelector(".c-2");
    // Access the computed style of box1 to get the background color
    var box2BackgroundColor = window.getComputedStyle(box2).backgroundColor;
    // Set the body's text color to the background color of box1
    body.style.color = box2BackgroundColor;
}
function change3() {
    var body = document.querySelector("body");
    var box3 = document.querySelector(".c-3");
    // Access the computed style of box1 to get the background color
    var box3BackgroundColor = window.getComputedStyle(box3).backgroundColor;
    // Set the body's text color to the background color of box1
    body.style.color = box3BackgroundColor;
}
function change4() {
    var body = document.querySelector("body");
    var box4 = document.querySelector(".c-4");
    // Access the computed style of box1 to get the background color
    var box4BackgroundColor = window.getComputedStyle(box4).backgroundColor;
    // Set the body's text color to the background color of box1
    body.style.color = box4BackgroundColor;
}

function change5() {
    var body = document.querySelector("body");
    var box5 = document.querySelector(".c-5");
    // Access the computed style of box1 to get the background color
    var box5BackgroundColor = window.getComputedStyle(box5).backgroundColor;
    // Set the body's text color to the background color of box1
    body.style.color = box5BackgroundColor;
}

function resetbtn() {
    document.querySelector("body").style = "";
    document.querySelector(".output-section").style.backgroundImage = 'url()';

}

