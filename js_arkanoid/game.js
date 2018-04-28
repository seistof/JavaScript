var game = {
    width: 640,
    height: 360,
    ctx: undefined,
    platform: undefined,
    ball: undefined,
    rows: 4,
    cols: 8,
    block: [],
    sprites: {
        background: undefined,
        platform: undefined,
        ball: undefined,
        block: undefined,
    },

    init: function () {
        var canvas = document.getElementById("mycanvas");
        this.ctx = canvas.getContext("2d");

        window.addEventListener("keydown", function (e) {
            if (e.keyCode == 37) {


            } else if (e.keyCode == 39) {


            }
        })
    },

    load: function () {
        for (var key in this.sprites) {
            this.sprites[key] = new Image();
            this.sprites[key].src = "images/" + key + ".png";
        }
    },

    create: function () {
        for (var row = 0; row < this.rows; row++) {

            for (var col = 0; col < this.cols; col++) {
                this.block.push({
                    x: 76 * col + 17,
                    y: 38 * row + 25,
                    width: 72,
                    height: 32,
                });
            }
        }
    },

    start: function () {
        this.init();
        this.load();
        this.create();
        this.run();
    },

    render: function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.ctx.drawImage(this.sprites.ball, this.ball.width * this.ball.frame, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height);

        this.ctx.drawImage(this.sprites.block, this.block.x, this.block.y);

        this.block.forEach(function (element) {
            this.ctx.drawImage(this.sprites.block, element.x, element.y);
        }, this)

    },

    run: function () {
        this.render();

        window.requestAnimationFrame(function () {
            game.run();
        });
    }
};

game.platform = {
    x: 300,
    y: 300,
}

game.ball = {
    width: 36,
    height: 36,
    frame: 0,
    x: 350,
    y: 265,
}
window.addEventListener("load", function () {
    game.start();
});
