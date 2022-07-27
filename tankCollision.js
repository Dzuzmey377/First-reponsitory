function collision(side) {
    for(let kirp of kirps) {
        let kirpXY = kirp.getBoundingClientRect();
        if(parseInt(window.getComputedStyle(tank).left) > parseInt(kirpXY.x) - 48 &&
            parseInt(window.getComputedStyle(tank).top) < parseInt(kirpXY.y) + 13 &&
            parseInt(window.getComputedStyle(tank).left) < parseInt(kirpXY.x) + 40 &&
            parseInt(window.getComputedStyle(tank).top) > parseInt(kirpXY.y) - 48) {
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
    if(sideGame == "right") {
        if(parseInt(window.getComputedStyle(tank).left) >= parseInt(window.getComputedStyle(platform).marginLeft) + 990){
            left = parseInt(window.getComputedStyle(platform).marginLeft) + 990;
        }
    }
    else if(sideGame == "down") {
        if(parseInt(window.getComputedStyle(tank).top) >= parseInt(window.getComputedStyle(platform).marginTop) + 633){
            topP = parseInt(window.getComputedStyle(platform).marginTop) + 633;
        }
    }
    else if(sideGame == "top") {
        if(parseInt(window.getComputedStyle(tank).top) <= parseInt(window.getComputedStyle(platform).marginTop) + 15){
            topP = parseInt(window.getComputedStyle(platform).marginTop) + 15;
        }
    }
    else if(sideGame == "left") {
        if(parseInt(window.getComputedStyle(tank).left) <= parseInt(window.getComputedStyle(platform).marginLeft) + 15){
            left = parseInt(window.getComputedStyle(platform).marginLeft) + 15;
        }
    }
}