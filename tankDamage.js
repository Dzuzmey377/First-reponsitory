function damageTank(rotate, leftNum, topNum, direction, direction2) {
    bulletEnemy = false;
    setTimeout(function(){
        bulletEnemy = true;
    }, 1500);

    let bullet = document.querySelector(".bullet" + numD);
    numD += 1;

    bullet.style.display = "block";

	let newElem = document.createElement("div");
	newElem.style.position = "absolute";
	newElem.style.display = "none";
	newElem.classList.add("bullet" + numD);
	document.getElementById("bulletAll").appendChild(newElem);

	let elemDivD = document.createElement("img");
	elemDivD.src = "bullet.png";
	document.querySelector(".bullet" + numD).appendChild(elemDivD);
                
	bullet.style.transform = `rotate(${rotate}deg)`;

    let tL = parseInt(window.getComputedStyle(tank).left) + leftNum;
	let tT = parseInt(window.getComputedStyle(tank).top) + topNum;

    bullet.style.display = "block";

    bullet.style.left = tL + "px";
	bullet.style.top = tT + "px";

    function consoleDamage(){
        console.log("Попал во врага");
        bullet.style.display = "none";
        clearInterval(setT);
    }

    let setT;

    setT = setInterval(function(){
        let bulletTop = parseInt(window.getComputedStyle(bullet).top);
        let bulletLeft = parseInt(window.getComputedStyle(bullet).left);
        let tankEn1Top = parseInt(window.getComputedStyle(tankEn1).top);
        let tankEn1Left = parseInt(window.getComputedStyle(tankEn1).left);

        if(direction == "left&right") {
            if(bulletLeft >= tankEn1Left - 11 && bulletLeft <= tankEn1Left + 65 && bulletTop >= tankEn1Top - 5 && bulletTop <= tankEn1Top + 42) {
                consoleDamage();
            }
        }
        else if(direction == "top&down") {
            if(bulletLeft >= tankEn1Left - 5 && bulletLeft <= tankEn1Left + 65 && bulletTop >= tankEn1Top - 11 && bulletTop <= tankEn1Top + 42){
                consoleDamage();
            }
        }
            
    }, 10);

    let pxL = parseInt(window.getComputedStyle(tank).left) + leftNum;
    let pxT = parseInt(window.getComputedStyle(tank).top) + topNum;
    
	let num = 0;		

	let an1 = function() {	
        if(direction2 == "right") {
            pxL += 15;	
            bullet.style.left = pxL + "px";
        }
        else if(direction2 == "down") {
            pxT += 15;	
            bullet.style.top = pxT + "px";
        }
        else if(direction2 == "top") {
            pxT -= 15;	
            bullet.style.top = pxT + "px";
        }
        else if(direction2 == "left") {
            pxL -= 15;	
            bullet.style.left = pxL + "px";
        }

        num += 15;
		let ran1 = requestAnimationFrame(an1);
		if(num >= 980) {
			cancelAnimationFrame(ran1);
			bullet.remove();
		}
	}

	an1();
}