function damageTank(rotate, leftNum, topNum, direction, direction2, tankElem) {
    bulletEnemy = false;
    setTimeout(function(){
        bulletEnemy = true;
    }, 1250);

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
        let tankElement = document.getElementById(tankElem);

        let bulletTop = parseInt(window.getComputedStyle(bullet).top);
        let bulletLeft = parseInt(window.getComputedStyle(bullet).left);
        let tankEnementTop = parseInt(window.getComputedStyle(tankElement).top);
        let tankEnementLeft = parseInt(window.getComputedStyle(tankElement).left);

        if(direction == "left&right") {
            if(bulletLeft >= tankEnementLeft - 11 && bulletLeft <= tankEnementLeft + 65 && bulletTop >= tankEnementTop - 5 && bulletTop <= tankEnementTop + 42) {
                consoleDamage();
            }
        }
        else if(direction == "top&down") {
            if(bulletLeft >= tankEnementLeft - 5 && bulletLeft <= tankEnementLeft + 65 && bulletTop >= tankEnementTop - 11 && bulletTop <= tankEnementTop + 42){
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

		let ran1 = requestAnimationFrame(an1);

        let bulletLeft = parseInt(window.getComputedStyle(bullet).left);
        let bulletTop = parseInt(window.getComputedStyle(bullet).top);

        let platformLeft = parseInt(window.getComputedStyle(platform).marginLeft);
        let platformTop = parseInt(window.getComputedStyle(platform).marginTop);

		if(bulletLeft <= platformLeft || bulletLeft >= platformLeft + 1040 || bulletTop <= platformTop || bulletTop >= platformTop + 679) {
			cancelAnimationFrame(ran1);
			bullet.remove();
		}
	}

	an1();
}