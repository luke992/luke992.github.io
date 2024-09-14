class Button {
    constructor(symbol, width) {
        this.b = createButton(symbol);
        this.width = width;
        this.setStyle();
        this.symbol = symbol;
    }

    position(x, y) {
        this.b.position(x, y);
    }

    mousePressed(fxn) {
        this.b.mousePressed(fxn);
    }

    getSymbol() {
        return this.symbol;
    }

    setColor(color) {
        this.b.style("background-color:" + color + ";");
    }

    setStyle() {
        this.b.style(
            "width:" +
                this.width * 1.25 * hU +
                "px; height:" +
                1.25 * hU +
                "px; border:" +
                hU / 18 +
                "px solid black; font-size:" +
                (1.25 * hU) / 3 +
                "px;"
        );
    }
}
