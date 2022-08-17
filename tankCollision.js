function collision(side) {
    for(let bricks of brick) {
        let kirpXY = bricks.getBoundingClientRect();

        let tankLeft = parseInt(window.getComputedStyle(tank).left);
        let tankTop = parseInt(window.getComputedStyle(tank).top);

        if(tankLeft > parseInt(kirpXY.x) - 48 && tankTop < parseInt(kirpXY.y) + 13 && tankLeft < parseInt(kirpXY.x) + 40 && tankTop > parseInt(kirpXY.y) - 48) {
                if(side == "right") {
                    tank.style.left = (parseInt(kirpXY.x) - 50) + "px";
                    left = parseInt(kirpXY.x) - 50;
                }
                else if(side == "down") {
                    tank.style.top = (parseInt(kirpXY.y) - 50) + "px";
                    topP = parseInt(kirpXY.y) - 50;
                }
                else if(side == "top") {
                    tank.style.top = (parseInt(kirpXY.y) + 15) + "px";
                    topP = parseInt(kirpXY.y) + 15;
                }
                else if(side == "left") {
                    tank.style.left = (parseInt(kirpXY.x) + 42) + "px";
                    left = parseInt(kirpXY.x) + 42;
                }
        }
    }
}

function collisionGame(sideGame) {
    let tankTop = parseInt(window.getComputedStyle(tank).top);
    let tankLeft = parseInt(window.getComputedStyle(tank).left);

    let platformLeft = parseInt(window.getComputedStyle(platform).marginLeft);
    let platformTop = parseInt(window.getComputedStyle(platform).marginTop);

    if(sideGame == "right") {
        if(tankLeft >= platformLeft + 990){
            left = platformLeft + 990;
        }
    }
    else if(sideGame == "down") {
        if(tankTop >= platformTop + 633){
            topP = platformTop + 633;
        }
    }
    else if(sideGame == "top") {
        if(tankTop <= platformTop + 15){
            topP = platformTop + 15;
        }
    }
    else if(sideGame == "left") {
        if(tankLeft <= platformLeft + 15){
            left = platformLeft + 15;
        }
    }
}