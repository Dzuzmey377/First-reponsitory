let rand1 = true;
let rand2 = true;
let rand3 = true;
let rand4 = true;
let rand5 = true;
let rand6 = true;
let rand7 = true;
let rand8 = true;

let setTime;
let acceptR = true;

let tankEnD = document.querySelectorAll(".tankEnAll > div");

for(let tankEns of tankEnD) {
    function move(collision1, collision2) {
        let rn = Math.round(Math.random() * 1);
        if(rn == 0) {
            moveTank = collision1;
        }
        else if(rn == 1) {
            moveTank = collision2;
        }
    }

    function moveRandomTime(collision11, collision21) {
        if(acceptR == true) {
            acceptR = false;
            clearTimeout(setTime);
            setTime = setTimeout(function() {
                move(collision11, collision21);
                acceptR = true;
            }, Math.random() * 4000 + 2000);
        }
            
    }

    function direct(location, direction, traffic, num) {
        if(location == "sum") {
            if(direction == "left") {
                tankEns.style.left = (traffic + num) + "px";
                left2 = traffic + num;
                return;
            }
            tankEns.style.top = (traffic + num) + "px";
            topP2 = traffic + num;
            return;
        }
        if (location == "difference") {
            if(direction == "left") {
                tankEns.style.left = (traffic - num) + "px";
                left2 = traffic - num;
                return;
            }
            tankEns.style.top = (traffic - num) + "px";
            topP2 = traffic - num;
            return;
        }
    }

    function acceptRandom(randomAccept, direct1, direct2) {
        if(randomAccept == true){
            move(direct1, direct2);
            randomAccept = false;
            setTimeout(function(){
                randomAccept = true;
            }, 1000);
        }
    }

    function controlBricks(side) {
        let tankTop = parseInt(window.getComputedStyle(tankEns).top);
        let tankLeft = parseInt(window.getComputedStyle(tankEns).left);

        for(let bricks of brick) {
            let brickXY = bricks.getBoundingClientRect();

            let bricksX = parseInt(brickXY.x);
            let bricksY = parseInt(brickXY.y);

            if(tankLeft > bricksX - 48 && tankTop < bricksY + 13 && tankLeft < bricksX + 40 && tankTop > bricksY - 48) {
                    if(side == "right") {
                        direct("difference", "left", bricksX, 50);
                        acceptRandom(rand5, "down", "top");
                    }
                    else if(side == "down") {
                        direct("difference", "top", bricksY, 50);
                        acceptRandom(rand6, "right", "left");
                    }
                    else if(side == "top") {
                        direct("sum", "top", bricksY, 15);
                        acceptRandom(rand7, "right", "left");
                    }
                    else if(side == "left") {
                        direct("sum", "left", bricksX, 42);
                        acceptRandom(rand8, "down", "top");
                    }
            }
        }
    }

    function controlPlatf() {
        let tankTop = parseInt(window.getComputedStyle(tankEns).top);
        let tankLeft = parseInt(window.getComputedStyle(tankEns).left);

        let platformLeft = parseInt(window.getComputedStyle(platform).marginLeft);
        let platformTop = parseInt(window.getComputedStyle(platform).marginTop);
        
        if(tankTop < platformTop + 10){
            direct("sum", "top", platformTop, 11);
            acceptRandom(rand1, "left", "right");
        }
        else if(tankLeft < platformLeft + 10){
            direct("sum", "left", platformLeft, 11);
            acceptRandom(rand2, "down", "top");
        }
        else if(tankTop > platformTop + 637){
            direct("sum", "top", platformTop, 636);
            acceptRandom(rand3, "left", "right");
            
        }
        else if(tankLeft > platformLeft + 990){
            direct("sum", "left", platformLeft, 989);
            acceptRandom(rand4, "down", "top");
        }
    }

    let left2 = parseInt(window.getComputedStyle(tankEns).left);
    let topP2 = parseInt(window.getComputedStyle(tankEns).top);

    function animEn() {
        if(tankEns.style.transform == "rotate(90deg)"){
            controlBricks("right");
            moveRandomTime("top", "down");
        } 
        else if(tankEns.style.transform == "rotate(180deg)"){
            controlBricks("down");
            moveRandomTime("left", "right");
        }   
        else if(tankEns.style.transform == "rotate(0deg)"){
            controlBricks("top");
            moveRandomTime("left", "right");
        }
        else if(tankEns.style.transform == "rotate(270deg)"){
            controlBricks("left");
            moveRandomTime("top", "down");
        }

        controlPlatf();

        if(moveTank == "top") {
            tankEns.style.transform = "rotate(0deg)";
            topP2 -= 2;
            tankEns.style.top = topP2 + "px";
        }
        else if(moveTank == "down") {
            tankEns.style.transform = "rotate(180deg)";
            topP2 += 2;
            tankEns.style.top = topP2 + "px";
        }
        else if(moveTank == "left") {
            tankEns.style.transform = "rotate(270deg)";
            left2 -= 2;
            tankEns.style.left = left2 + "px";
        }
        else if(moveTank == "right") {
            tankEns.style.transform = "rotate(90deg)";
            left2 += 2;
            tankEns.style.left = left2 + "px";
        }
        
        requestAnimationFrame(animEn);
    }

    animEn();
}

