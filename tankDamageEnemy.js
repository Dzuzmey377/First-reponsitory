let boolValueDamEn = true;

dam = setInterval(function(){
    if(boolValueDamEn == true){
        let tL = parseInt(window.getComputedStyle(tank).left);
        let tT = parseInt(window.getComputedStyle(tank).top);
        let tL2 = parseInt(window.getComputedStyle(tankEn1).left) + 22;
        let tT2 = parseInt(window.getComputedStyle(tankEn1).top) - 10;
        let tT3 = parseInt(window.getComputedStyle(tankEn1).top) + 50;
        let tT4 = parseInt(window.getComputedStyle(tankEn1).top) + 17;

        function damageEnemy(leftMove, topMove, rotateNum, direction) {
            pulAll2.style.display = "block";

            pulAll2.style.left = leftMove + "px";
            pulAll2.style.top = topMove + "px";

            pulAll2.style.transform = `rotate(${rotateNum}deg)`;
                
            boolValueDamEn = false;

            let num = 0;
            let an1 = function() {	
                if(direction == "top"){
                    tT2 -= 15;	
                    pulAll2.style.top = tT2 + "px";
                }
                else if(direction == "down") {
                    tT3 += 15;
                    pulAll2.style.top = tT3 + "px";
                }
                else if(direction == "left") {
                    tL2 -= 15;
                    pulAll2.style.left = tL2 + "px";
                }
                else if(direction == "right") {
                    tL2 += 15;
                    pulAll2.style.left = tL2 + "px";
                }

                num += 15;
                
                let ran1 = requestAnimationFrame(an1);
                if(num >= 800){
                    cancelAnimationFrame(ran1);
                    pulAll2.style.display = "none";
                    pulAll2.style.left = tL2 + "px";
                    pulAll2.style.top = tT2 + "px";
                }
            }
            an1();
            setTimeout(() => {boolValueDamEn = true}, 2000);
        }

        if(tL >= tL2 - 50 && tL <= tL2 - 10 && tT <= tT2){
            if(tankEn1.style.transform == "rotate(0deg)"){
                damageEnemy(tL2, tT2, 0, "top");
            } 
        }  
        else if(tL >= tL2 - 50 && tL <= tL2 - 10 && tT >= tT2){
            if(tankEn1.style.transform == "rotate(180deg)"){
                damageEnemy(tL2, tT3, 180, "down");
            }
        }
        else if(tL < tL2 && tT >= tT2 - 48 && tT <= tT2 + 48){
            if(tankEn1.style.transform == "rotate(270deg)"){
                damageEnemy(tL2, tT4, 270, "left");
            }
        }
        else if(tL > tL2 && tT >= tT2 - 48 && tT <= tT2 + 48){
            if(tankEn1.style.transform == "rotate(90deg)"){
                damageEnemy(tL2, tT4, 90, "right");
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
        if(parseInt(window.getComputedStyle(pulAll2).left) >= parseInt(window.getComputedStyle(tank).left) - 11 &&
        parseInt(window.getComputedStyle(pulAll2).left) <= parseInt(window.getComputedStyle(tank).left) + 48 &&
        parseInt(window.getComputedStyle(pulAll2).top) >= parseInt(window.getComputedStyle(tank).top) - 11 &&
        parseInt(window.getComputedStyle(pulAll2).top) <= parseInt(window.getComputedStyle(tank).top) + 48) {
            console.log("Попали в мой танк");
            pulAll2.style.display = "none";
            boolValueEnemy = false;
            setTimeout(() => {boolValueEnemy = true}, 1000);
        }
    }
}, 10);