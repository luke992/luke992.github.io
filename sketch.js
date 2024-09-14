let ratio = 16 / 9;
let wU, hU;
let cnv;
let cnvX, cnvY;

let taskP, codeP, responseP;

let buttons;
let delButton;
let submitButton;

let instructions;

function setup() {
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
    taskP.addClass("taskP");

    instructions = document.createElement("ol");
    instructions.style.fontSize = (1.4 * hU) / 4 + "px";
    taskP.child(instructions);

    addInstruction("Hello abc bac basud iausd iasd iasud ");
    addInstruction("Hack@CMU ■");
    addInstruction("ababab");
    addInstruction(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    codeP = createP("▲■●★➤⧫");
    codeP.position(6.5 * wU + cnvX, 1.25 * hU + cnvY);
    codeP.size(5 * wU - 20, 2 * hU - 20);
    codeP.style("font-size:" + (1.4 * hU) / 3 + "px;");
    codeP.addClass("codeP");

    responseP = createP("");
    responseP.position(6.5 * wU + cnvX, 3.75 * hU + cnvY);
    responseP.size(5 * wU - 20, 5 * hU - 20);
    responseP.style("font-size:" + (1.4 * hU) / 3 + "px;");
    responseP.addClass("responseP");

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

    for (let i = 0; i < 4; i++) {
        rect(12.5 * wU, 2 * hU + i * 1.25 * hU, 1.25 * hU, 1.25 * hU);
        rect(13.75 * wU, 2 * hU + i * 1.25 * hU, 1.25 * hU, 1.25 * hU);
    }

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
    translate(6 * wU, 0);
    drawLeftHand();
    translate(6 * wU, 0);
    drawRightHand();
    translate(-12 * wU, 0);
}

function drawRightHand() {
    beginShape();
    vertex(0, height);
    bezierVertex(
        -0.2 * wU,
        height - 0.7 * hU,
        -0.3 * wU,
        height - 1.3 * hU,
        -0.5 * wU,
        height - 1.3 * hU
    );
    vertex(-0.5 * wU, height - 1.3 * hU);
    bezierVertex(
        -0.8 * wU,
        height - 1.3 * hU - wU,
        -(0.5 * wU + wU),
        height - 1.3 * hU,
        -(0.5 * wU + 0.4 * hU),
        height - 0.9 * hU
    );
    vertex(-(0.5 * wU + 0.4 * hU), height - 0.9 * hU);
    bezierVertex(
        -(0.3 * wU + 0.4 * wU),
        height - 0.9 * hU,
        -(0.1 * wU + 0.4 * wU),
        height - 0.4 * hU,
        -0.4 * wU,
        height + 0.4 * hU
    );

    endShape();
}

function drawLeftHand() {
    beginShape();
    vertex(0, height);
    bezierVertex(
        0.2 * wU,
        height - 0.7 * hU,
        0.3 * wU,
        height - 1.3 * hU,
        0.5 * wU,
        height - 1.3 * hU
    );
    vertex(0.5 * wU, height - 1.3 * hU);
    bezierVertex(
        0.8 * wU,
        height - 1.3 * hU - wU,
        0.5 * wU + wU,
        height - 1.3 * hU,
        0.5 * wU + 0.4 * hU,
        height - 0.9 * hU
    );
    vertex(0.5 * wU + 0.4 * hU, height - 0.9 * hU);
    bezierVertex(
        0.3 * wU + 0.4 * wU,
        height - 0.9 * hU,
        0.1 * wU + 0.4 * wU,
        height - 0.4 * hU,
        0.4 * wU,
        height + 0.4 * hU
    );
    vertex(0.4 * wU, height + 0.4 * hU);
    endShape();
}

function buttonSetup() {
    buttons = [
        new Button("▲", 1),
        new Button("■", 1),
        new Button("●", 1),
        new Button("★", 1),
        new Button("➤", 1),
        new Button("⧫", 1),
        new Button("⧫", 1),
        new Button("⧫", 1),
    ];

    submitButton = new Button("Submit", 2);
    submitButton.position(12.5 * wU + cnvX, 7 * hU + cnvY);
    submitButton.setColor("rgb(0,255,0)");
    for (let i = 0; i < 8; i++) {
        buttons[i].position(
            wU * (12.5 + (i % 2) * 1.25) + cnvX,
            hU * (2 + 1.25 * Math.floor(i / 2)) + cnvY
        );
        buttons[i].mousePressed(() => {
            addSymbol(buttons[i].getSymbol());
        });
    }
}

function addSymbol(symbol) {
    let str = responseP.html(responseP.html() + symbol + "&#8203;");
}

function keyPressed() {
    console.log(key);
    if ((key >= "a" && key <= "z") || (key >= "0" && key <= "9")) {
        addSymbol(key);
    } else if (key.charCodeAt(0) == 66) {
        deleteSymbol();
    }
}

function addInstruction(instruction) {
    var li = document.createElement("li");
    instructions.appendChild(li);
    li.innerHTML = instruction;
}

function deleteSymbol() {
    let str = responseP.html();
    if (str !== "") {
        responseP.html(str.substring(0, str.length - 2));
    }
}
