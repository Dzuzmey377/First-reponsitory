function damageTank(rotate, leftNum, topNum, direction, direction2) {
    pulZam = false;
    setTimeout(function(){
        pulZam = true;
    }, 1500);

    let pul = document.querySelector(".pul" + numD);
    numD += 1;

    pul.style.display = "block";

	let newElem = document.createElement("div");
	newElem.style.position = "absolute";
	newElem.style.display = "none";
	newElem.classList.add("pul" + numD);
	document.getElementById("pulAll").appendChild(newElem);

	let elemDivD = document.createElement("img");
	elemDivD.src = "bullet.png";
	document.querySelector(".pul" + numD).appendChild(elemDivD);
                
	pul.style.transform = `rotate(${rotate}deg)`;

    let tL = parseInt(window.getComputedStyle(tank).left) + leftNum;
	let tT = parseInt(window.getComputedStyle(tank).top) + topNum;

    pul.style.display = "block";

    pul.style.left = tL + "px";
	pul.style.top = tT + "px";

    function consoleDamage(){
        console.log("Попал во врага");
        pul.style.display = "none";
        clearInterval(setT);
    }

    let setT;

    setT = setInterval(function(){
        if(direction == "left&right") {
            if(parseInt(window.getComputedStyle(pul).left) >= parseInt(window.getComputedStyle(tankEn1).left)-11 &&
            parseInt(window.getComputedStyle(pul).left) <= parseInt(window.getComputedStyle(tankEn1).left)+65 &&
            parseInt(window.getComputedStyle(pul).top) >= parseInt(window.getComputedStyle(tankEn1).top)-5 &&
            parseInt(window.getComputedStyle(pul).top) <= parseInt(window.getComputedStyle(tankEn1).top)+42){
                consoleDamage();
            }
        }
        else if(direction == "top&down") {
            if(parseInt(window.getComputedStyle(pul).left) >= parseInt(window.getComputedStyle(tankEn1).left)-5 &&
            parseInt(window.getComputedStyle(pul).left) <= parseInt(window.getComputedStyle(tankEn1).left)+65 &&
            parseInt(window.getComputedStyle(pul).top) >= parseInt(window.getComputedStyle(tankEn1).top)-11 &&
            parseInt(window.getComputedStyle(pul).top) <= parseInt(window.getComputedStyle(tankEn1).top)+42){
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
            pul.style.left = pxL + "px";
        }
        else if(direction2 == "down") {
            pxT += 15;	
            pul.style.top = pxT + "px";
        }
        else if(direction2 == "top") {
            pxT -= 15;	
            pul.style.top = pxT + "px";
        }
        else if(direction2 == "left") {
            pxL -= 15;	
            pul.style.left = pxL + "px";
        }

        num += 15;
		let ran1 = requestAnimationFrame(an1);
		if(num >= 980) {
			cancelAnimationFrame(ran1);
			pul.remove();
		}
	}

	an1();
}