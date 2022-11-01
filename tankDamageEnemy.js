let boolValueDamEn = true;

function damageEnemyes(tankElem, bulletElem) {
    damageEn = setInterval(function() {
        if(boolValueDamEn == true) {
            let tankElement = document.getElementById(tankElem);
            let bulletElement = document.getElementById(bulletElem);

            let tankEn1Left2 = parseInt(window.getComputedStyle(tankElement).left) + 22;
            let tankTop2 = parseInt(window.getComputedStyle(tankElement).top) - 10;
            let tankTop3 = parseInt(window.getComputedStyle(tankElement).top) + 50;
            let tankTop4 = parseInt(window.getComputedStyle(tankElement).top) + 17;

            function damageEnemy(leftMove, topMove, rotateNum, direction) {
                bulletElement.style.display = "block";

                bulletElement.style.left = leftMove + "px";
                bulletElement.style.top = topMove + "px";

                bulletElement.style.transform = `rotate(${rotateNum}deg)`;
                    
                boolValueDamEn = false;

                let an1 = function() {	
                    if(direction == "top") {
                        tankTop2 -= 15;	
                        bulletElement.style.top = tankTop2 + "px";
                    }
                    else if(direction == "down") {
                        tankTop3 += 15;
                        bulletElement.style.top = tankTop3 + "px";
                    }
                    else if(direction == "left") {
                        tankEn1Left2 -= 15;
                        bulletElement.style.left = tankEn1Left2 + "px";
                    }
                    else if(direction == "right") {
                        tankEn1Left2 += 15;
                        bulletElement.style.left = tankEn1Left2 + "px";
                    }
                    
                    let ran1 = requestAnimationFrame(an1);

                    let bulletLeft = parseInt(window.getComputedStyle(bulletElement).left);
                    let bulletTop = parseInt(window.getComputedStyle(bulletElement).top);

                    let platformLeft = parseInt(window.getComputedStyle(platform).marginLeft);
                    let platformTop = parseInt(window.getComputedStyle(platform).marginTop);
                    
                    if(bulletLeft <= platformLeft || bulletLeft >= platformLeft + 1040 || bulletTop <= platformTop || bulletTop >= platformTop + 679) {
                        cancelAnimationFrame(ran1);
                        bulletElement.style.display = "none";
                        bulletElement.style.left = tankEn1Left2 + "px";
                        bulletElement.style.top = tankTop2 + "px";
                    }
                }
                an1();
                setTimeout(() => {boolValueDamEn = true}, 1750);
            }

            if(tankElement.style.transform == "rotate(0deg)") {
                damageEnemy(tankEn1Left2, tankTop2, 0, "top");
            }  
            else if(tankElement.style.transform == "rotate(180deg)") {
                damageEnemy(tankEn1Left2, tankTop3, 180, "down"); 
            }
            else if(tankElement.style.transform == "rotate(270deg)") {
                damageEnemy(tankEn1Left2, tankTop4, 270, "left");
            }
            else if(tankElement.style.transform == "rotate(90deg)") {  
                damageEnemy(tankEn1Left2, tankTop4, 90, "right");  
            }
        }
    }, 10);
}

damageEnemyes("tankEn1", "bullet2");

let boolValueEnemy = true;

consoleDamEnemy = setInterval(function() {
    if(boolValueEnemy == true) {
        let bullet2Left = parseInt(window.getComputedStyle(bullet2).left);
        let bullet2Top = parseInt(window.getComputedStyle(bullet2).top);
        let tankLeft = parseInt(window.getComputedStyle(tank).left);
        let tankTop = parseInt(window.getComputedStyle(tank).top);

        if(bullet2Left >= tankLeft - 11 && bullet2Left <= tankLeft + 48 && bullet2Top >= tankTop - 11 && bullet2Top <= tankTop + 48) {
            console.log("Попали в мой танк");
            bullet2.style.display = "none";
            boolValueEnemy = false;
            setTimeout(() => {boolValueEnemy = true}, 1000);
        }
    }
}, 10);
