let boolValueDamEn = true;

damageEn = setInterval(function(){
    if(boolValueDamEn == true){
        let tankEn1Left = parseInt(window.getComputedStyle(tank).left);
        let tankEn1Top = parseInt(window.getComputedStyle(tank).top);
        let tankEn1Left2 = parseInt(window.getComputedStyle(tankEn1).left) + 22;
        let tankTop2 = parseInt(window.getComputedStyle(tankEn1).top) - 10;
        let tankTop3 = parseInt(window.getComputedStyle(tankEn1).top) + 50;
        let tankTop4 = parseInt(window.getComputedStyle(tankEn1).top) + 17;

        function damageEnemy(leftMove, topMove, rotateNum, direction) {
            bullet2.style.display = "block";

            bullet2.style.left = leftMove + "px";
            bullet2.style.top = topMove + "px";

            bullet2.style.transform = `rotate(${rotateNum}deg)`;
                
            boolValueDamEn = false;

            let num = 0;
            let an1 = function() {	
                if(direction == "top"){
                    tankTop2 -= 15;	
                    bullet2.style.top = tankTop2 + "px";
                }
                else if(direction == "down") {
                    tankTop3 += 15;
                    bullet2.style.top = tankTop3 + "px";
                }
                else if(direction == "left") {
                    tankEn1Left2 -= 15;
                    bullet2.style.left = tankEn1Left2 + "px";
                }
                else if(direction == "right") {
                    tankEn1Left2 += 15;
                    bullet2.style.left = tankEn1Left2 + "px";
                }

                num += 15;
                
                let ran1 = requestAnimationFrame(an1);
                if(num >= 800){
                    cancelAnimationFrame(ran1);
                    bullet2.style.display = "none";
                    bullet2.style.left = tankEn1Left2 + "px";
                    bullet2.style.top = tankTop2 + "px";
                }
            }
            an1();
            setTimeout(() => {boolValueDamEn = true}, 2000);
        }

        if(tankEn1Left >= tankEn1Left2 - 50 && tankEn1Left <= tankEn1Left2 - 10 && tankEn1Top <= tankTop2){
            if(tankEn1.style.transform == "rotate(0deg)"){
                damageEnemy(tankEn1Left2, tankTop2, 0, "top");
            } 
        }  
        else if(tankEn1Left >= tankEn1Left2 - 50 && tankEn1Left <= tankEn1Left2 - 10 && tankEn1Top >= tankTop2){
            if(tankEn1.style.transform == "rotate(180deg)"){
                damageEnemy(tankEn1Left2, tankTop3, 180, "down");
            }
        }
        else if(tankEn1Left < tankEn1Left2 && tankEn1Top >= tankTop2 - 48 && tankEn1Top <= tankTop2 + 48){
            if(tankEn1.style.transform == "rotate(270deg)"){
                damageEnemy(tankEn1Left2, tankTop4, 270, "left");
            }
        }
        else if(tankEn1Left > tankEn1Left2 && tankEn1Top >= tankTop2 - 48 && tankEn1Top <= tankTop2 + 48){
            if(tankEn1.style.transform == "rotate(90deg)"){
                damageEnemy(tankEn1Left2, tankTop4, 90, "right");
            }
        }
    //     else if(tL >= tL2 - 50 && tL <= tL2 - 10 && tT >= tT2){
    //         if(tankEn1.style.transform == "rotate(180deg)"){
    //             pulAll2.style.display = "block";

    //             pulAll2.style.left = tL2 + "px";
    //             pulAll2.style.top = tT3 + "px";

    //             pulAll2.style.transform = "rotate(180deg)";
                
    //             boolValueDamEn = false;

    //             let num = 0;
    //             let an1 = function(){	
    //                 tT3 += 15;	
    //                 num += 15;
    //                 pulAll2.style.top = tT3 + "px";
    //                 let ran1 = requestAnimationFrame(an1);
    //                 if(num >= 800){
    //                     cancelAnimationFrame(ran1);
    //                     pulAll2.style.display = "none";
    //                     pulAll2.style.left = tL2 + "px";
    //                     pulAll2.style.top = tT3 + "px";
    //                 }
    //             }
    //             an1();
    //             setTimeout(() => {boolValueDamEn = true}, 2000);
    //         }
    //     }    
    //     else if(tL < tL2 && tT >= tT2 - 48 && tT <= tT2 + 48){
    //         if(tankEn1.style.transform == "rotate(270deg)"){
    //             pulAll2.style.display = "block";

    //             pulAll2.style.left = tL2 + "px";
    //             pulAll2.style.top = tT4 + "px";

    //             pulAll2.style.transform = "rotate(270deg)";
                
    //             boolValueDamEn = false;

    //             let num = 0;
    //             let an1 = function(){	
    //                 tL2 -= 15;	
    //                 num += 15;
    //                 pulAll2.style.left = tL2 + "px";
    //                 let ran1 = requestAnimationFrame(an1);
    //                 if(num >= 1500){
    //                     cancelAnimationFrame(ran1);
    //                     pulAll2.style.display = "none";
    //                     pulAll2.style.left = tL2 + "px";
    //                     pulAll2.style.top = tT4 + "px";
    //                 }
    //             }
    //             an1();
    //             setTimeout(() => {boolValueDamEn = true}, 2000);
    //         }
    //     }  
    //     else if(tL > tL2 && tT >= tT2 - 48 && tT <= tT2 + 48){
    //         if(tankEn1.style.transform == "rotate(90deg)"){
    //             pulAll2.style.display = "block";

    //             pulAll2.style.left = tL2 + "px";
    //             pulAll2.style.top = tT4 + "px";

    //             pulAll2.style.transform = "rotate(90deg)";
                
    //             boolValueDamEn = false;

    //             let num = 0;
    //             let an1 = function(){	
    //                 tL2 += 15;	
    //                 num += 15;
    //                 pulAll2.style.left = tL2 + "px";
    //                 let ran1 = requestAnimationFrame(an1);
    //                 if(num >= 1500){
    //                     cancelAnimationFrame(ran1);
    //                     pulAll2.style.display = "none";
    //                     pulAll2.style.left = tL2 + "px";
    //                     pulAll2.style.top = tT4 + "px";
    //                 }
    //             }
    //             an1();
    //             setTimeout(() => {boolValueDamEn = true}, 2000);
    //         }
    //     }  
    }
}, 10);

let boolValueEnemy = true;

consoleDamEnemy = setInterval(function(){
    if(boolValueEnemy == true){
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