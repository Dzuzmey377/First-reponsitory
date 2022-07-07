let rand1 = true;
let rand2 = true;
let rand3 = true;
let rand4 = true;
let rand5 = true;
let rand6 = true;
let rand7 = true;
let rand8 = true;

let animEn = function(){
    if(parseInt(window.getComputedStyle(tankEn1).top) < parseInt(window.getComputedStyle(platform).marginTop) + 10){
        tankEn1.style.top = (parseInt(window.getComputedStyle(platform).marginTop) + 11) + "px";
        topP2 = parseInt(window.getComputedStyle(platform).marginTop) + 11;
        if(rand1 == true){
            let rn = Math.round(Math.random() * 1);
            if(rn == 0){
                st = "left";
            }
            else if(rn == 1){
                st = "right";
            }
            rand1 = false;
            setTimeout(function(){
                rand1 = true;
            }, 1000);
        }
        
    }
    else if(parseInt(window.getComputedStyle(tankEn1).left) < parseInt(window.getComputedStyle(platform).marginLeft) + 10){
        tankEn1.style.left = (parseInt(window.getComputedStyle(platform).marginLeft) + 11) + "px";
        left2 = parseInt(window.getComputedStyle(platform).marginLeft) + 11;
        if(rand2 == true){
            let rn = Math.round(Math.random() * 1);
            if(rn == 0){
                st = "down";
            }
            else if(rn == 1){
                st = "top";
            }
            rand2 = false;
            setTimeout(function(){
                rand2 = true;
            }, 1000);
        } 
    }
    else if(parseInt(window.getComputedStyle(tankEn1).top) > parseInt(window.getComputedStyle(platform).marginTop) + 637){
        tankEn1.style.top = (parseInt(window.getComputedStyle(platform).marginTop) + 636) + "px";
        topP2 = parseInt(window.getComputedStyle(platform).marginTop) + 636;
        if(rand3 == true){
            let rn = Math.round(Math.random() * 1);
            if(rn == 0){
                st = "left";
            }
            else if(rn == 1){
                st = "right";
            }
            rand3 = false;
            setTimeout(function(){
                rand3 = true;
            }, 1000);
        }
        
    }
    else if(parseInt(window.getComputedStyle(tankEn1).left) > parseInt(window.getComputedStyle(platform).marginLeft) + 990){
        tankEn1.style.left = (parseInt(window.getComputedStyle(platform).marginLeft) + 989) + "px";
        left2 = parseInt(window.getComputedStyle(platform).marginLeft) + 989;
        if(rand4 == true){
            let rn = Math.round(Math.random() * 1);
            if(rn == 0){
                st = "down";
            }
            else if(rn == 1){
                st = "top";
            }
            rand4 = false;
            setTimeout(function(){
                rand4 = true;
            }, 1000);
        }
    }
    
    if(tankEn1.style.transform == "rotate(90deg)"){
        for(let kirp of kirps){
            let kirpXY = kirp.getBoundingClientRect();

            if(parseInt(window.getComputedStyle(tankEn1).left) >= parseInt(kirpXY.x) - 48 &&
                parseInt(window.getComputedStyle(tankEn1).top) <= parseInt(kirpXY.y) + 13 &&
                parseInt(window.getComputedStyle(tankEn1).left) <= parseInt(kirpXY.x) + 40 &&
                parseInt(window.getComputedStyle(tankEn1).top) >= parseInt(kirpXY.y) - 48){
                    tankEn1.style.left = (parseInt(kirpXY.x) - 50) + "px";
                    left2 = parseInt(kirpXY.x) - 50;
                    if(rand5 == true){
                        let rn = Math.round(Math.random() * 1);
                        if(rn == 0){
                            st = "down";
                        }
                        else if(rn == 1){
                            st = "top";
                        }
                        rand5 = false;
                        setTimeout(function(){
                            rand5 = true;
                        }, 1000);
                    }
            }
        }
    } 
    else if(tankEn1.style.transform == "rotate(180deg)"){
        for(let kirp of kirps){
            let kirpXY = kirp.getBoundingClientRect();

            if(parseInt(window.getComputedStyle(tankEn1).left) > parseInt(kirpXY.x) - 48 &&
                parseInt(window.getComputedStyle(tankEn1).top) < parseInt(kirpXY.y) + 13 &&
                parseInt(window.getComputedStyle(tankEn1).left) < parseInt(kirpXY.x) + 40 &&
                parseInt(window.getComputedStyle(tankEn1).top) >= parseInt(kirpXY.y) - 48){
                    tankEn1.style.top = (parseInt(kirpXY.y) - 50) + "px";
                    topP2 = parseInt(kirpXY.y) - 50;
                    if(rand6 == true){
                        let rn = Math.round(Math.random() * 1);
                        if(rn == 0){
                            st = "right";
                        }
                        else if(rn == 1){
                            st = "left";
                        }
                        rand6 = false;
                        setTimeout(function(){
                            rand6 = true;
                        }, 1000);
                    }
            }
        }
    }   
    else if(tankEn1.style.transform == "rotate(0deg)"){
        for(let kirp of kirps){
            let kirpXY = kirp.getBoundingClientRect();

            if(parseInt(window.getComputedStyle(tankEn1).left) > parseInt(kirpXY.x) - 48 &&
                parseInt(window.getComputedStyle(tankEn1).top) <= parseInt(kirpXY.y) + 13 &&
                parseInt(window.getComputedStyle(tankEn1).left) < parseInt(kirpXY.x) + 40 &&
                parseInt(window.getComputedStyle(tankEn1).top) > parseInt(kirpXY.y) - 48){
                    tankEn1.style.top = (parseInt(kirpXY.y) + 15) + "px";
                    topP2 = parseInt(kirpXY.y) + 15;
                    if(rand7 == true){
                        let rn = Math.round(Math.random() * 1);
                        if(rn == 0){
                            st = "right";
                        }
                        else if(rn == 1){
                            st = "left";
                        }
                        rand7 = false;
                        setTimeout(function(){
                            rand7 = true;
                        }, 1000);
                    }
            }
        }
    }
    else if(tankEn1.style.transform == "rotate(270deg)"){
        for(let kirp of kirps){
            let kirpXY = kirp.getBoundingClientRect();
    
            if(parseInt(window.getComputedStyle(tankEn1).left) > parseInt(kirpXY.x) - 48 &&
                parseInt(window.getComputedStyle(tankEn1).top) < parseInt(kirpXY.y) + 13 &&
                parseInt(window.getComputedStyle(tankEn1).left) <= parseInt(kirpXY.x) + 40 &&
                parseInt(window.getComputedStyle(tankEn1).top) > parseInt(kirpXY.y) - 48){
                    tankEn1.style.left = (parseInt(kirpXY.x) + 42) + "px";
                    left2 = parseInt(kirpXY.x) + 42;
                    if(rand8 == true){
                        let rn = Math.round(Math.random() * 1);
                        if(rn == 0){
                            st = "down";
                        }
                        else if(rn == 1){
                            st = "top";
                        }
                        rand8 = false;
                        setTimeout(function(){
                            rand8 = true;
                        }, 1000);
                    }
                }
            }
    }  

    if(st == "top"){
        tankEn1.style.transform = "rotate(0deg)";
        topP2 -= 3;
        tankEn1.style.top = topP2 + "px";
    }
    else if(st == "down"){
        tankEn1.style.transform = "rotate(180deg)";
        topP2 += 3;
        tankEn1.style.top = topP2 + "px";
    }
    else if(st == "left"){
        tankEn1.style.transform = "rotate(270deg)";
        left2 -= 3;
        tankEn1.style.left = left2 + "px";
    }
    else if(st == "right"){
        tankEn1.style.transform = "rotate(90deg)";
        left2 += 3;
        tankEn1.style.left = left2 + "px";
    }
    requestAnimationFrame(animEn);
}

animEn();