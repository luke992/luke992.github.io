let ratio = 16 / 9;
let wU, hU;
let cnv;
let cnvX, cnvY;

let taskP, codeP, responseP;

let buttons;
let delButton;
let submitButton;

function setup() {

    shiftHeld = false;
    justShifted = false;

    if (windowHeight * ratio > windowWidth) {
        cnv = createCanvas(windowWidth, windowWidth / ratio);
    } else {
        cnv = createCanvas(windowHeight * ratio, windowHeight);
    }

    wU = width / 16;
    hU = height / 9;

    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);

    cnvX = (windowWidth - width) / 2;
    cnvY = (windowHeight - height) / 2;
    cnv.position(cnvX, cnvY);

    taskP = createP("Task 1");
    taskP.position(wU / 2 + cnvX, 2 * hU + cnvY);
    taskP.size(5 * wU - 20, 6 * hU - 20);
    taskP.style("font-size:" + (1.4 * hU) / 3 + "px;");

    codeP = createP("▲■●★➤⧫");
    codeP.position(6.5 * wU + cnvX, 1.25 * hU + cnvY);
    codeP.size(5 * wU - 20, 2 * hU - 20);
    codeP.style("font-size:" + (1.4 * hU) / 3 + "px;");
    codeP.addClass("codeP");

    responseP = createP("SDFGHJKDFGHJKUQ EYVKIQEVFKUQE BFILQEUBF");
    responseP.position(6.5 * wU + cnvX, 3.75 * hU + cnvY);
    responseP.size(5 * wU - 20, 5 * hU - 20);
    responseP.style("font-size:" + (1.4 * hU) / 3 + "px;");

    buttonSetup();
}

function draw() {
    background(255);

    stroke(0);
    strokeWeight(hU / 9);
    fill(255);

    // task page
    rect(wU / 2, 2 * hU, 5 * wU, 6 * hU);

    // code page
    rect(6.5 * wU, 1.25 * hU, 5 * wU, 2 * hU);

    // response page
    rect(6.5 * wU, 3.75 * hU, 5 * wU, 5 * hU);

    drawBackground();

    // symbol buttons

    for (let i = 0; i < 3; i++) {
        rect(12.5 * wU, 2 * hU + i * 1.25 * hU, 1.25 * hU, 1.25 * hU);
        rect(13.75 * wU, 2 * hU + i * 1.25 * hU, 1.25 * hU, 1.25 * hU);
    }

    // delete button
    fill(255, 0, 0, 50);
    rect(12.5 * wU, 5.75 * hU, 2.5 * hU, 1.25 * hU);

    // submit button
    fill(0, 255, 0, 50);
    rect(12.5 * wU, 7 * hU, 2.5 * hU, 1.25 * hU);
}

function drawBackground() {
    // light
    push();
    noStroke();
    fill(255, 255, 0, 50);
    rect(6 * wU, hU / 2, 6 * wU, hU / 2);
    pop();

    // walls
    rect(0, 0, 6 * wU, hU);
    rect(12 * wU, 0, 4 * wU, hU);

    // door
    rect(6 * wU, 0, 6 * wU, hU / 2);

    // hands
}

function buttonSetup() {
    buttons = [
        new Button("▲ ", 1),
        new Button("■ ", 1),
        new Button("● ", 1),
        new Button("★ ", 1),
        new Button("➤ ", 1),
        new Button("⧫ ", 1),
    ];

    delButton = new Button("Delete", 2);
    delButton.position(12.5 * wU + cnvX, 5.75 * hU + cnvY);
    delButton.mousePressed(() => {
        let str = responseP.html();
        if (str) {
            var charsToDelete = str[str.length - 1] == " " ? 2 : 1;
            responseP.html(str.substring(0, str.length - charsToDelete));
        }
    });

    submitButton = new Button("Submit", 2);
    submitButton.position(12.5 * wU + cnvX, 7 * hU + cnvY);

    for (let i = 0; i < 6; i++) {
        buttons[i].position(
            wU * (12.5 + (i % 2) * 1.25) + cnvX,
            hU * (2 + 1.25 * Math.floor(i / 2)) + cnvY
        );
        buttons[i].mousePressed(() => {
            responseP.html(responseP.html() + buttons[i].getSymbol());
        });
    }
}

function keyPressed() { 
    var s = ""+key;

    console.log(key);

    if (key == "Backspace") {
        let str = responseP.html();
        if (str) {
            var charsToDelete = str[str.length - 1] == " " ? 2 : 1;
            responseP.html(str.substring(0, str.length - charsToDelete));
        }
    }

    if (key == "Shift") {
        shiftHeld = true;
    }

    if (s.length > 1) return;
    if (!isAlphaNumeric(s)) return;
    if (!isLetter(s)) return;

    if (shiftHeld) {
        justShifted = !justShifted;
        if (justShifted) return;
    }

    let str = responseP.html();
    if (!shiftHeld)
        s = s.toLowerCase();



    responseP.html(responseP.html() + s);
    // responseP.html(str.substring(0, str.length - 1));
  } 

  function keyReleased() {
    if (key == "Shift") {
        shiftHeld = false;
    }

  }

  function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  function isLetter(s) {
    var chars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    for (var i = 0; i < 26; i++) {
        if (s == chars[i])
            return true;
    }
    return false;
  }

