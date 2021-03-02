	function findDom(metod,selector){
		if(typeof(metod) == 'string' && typeof(selector) == 'string'){

		switch (metod){
			case 'id':
				return document.getElementById(selector);
			case 'class':
				return document.getElementsByClassName(selector);
			case 'tag':
				return document.getElementsByTagName(selector);
			case 'name':
				return document.getElementByName(selector);
			}
		}
		else if(typeof(metod) == 'undefined' || typeof(selector) == 'undefined'){
			console.log(`findDom('metod[id,class,tag,name]',selector)`);
		}
		else{
			console.log("Error in type");
		}
	}
	
//Возрастающий счётчик ###########################################
function IncreasingСounter(target,startCount = 0,endCount,time,step) {
	let t = Math.round(time / (endCount / step));
	target.innerHTML = startCount;
	let interval = setInterval(() => {
	startCount = startCount + step;
	target.innerHTML = startCount;
	  if (n >= endCount) {
		target.innerHTML = 4560;
		clearInterval(interval);
	  }else{
		target.innerHTML = n;
	  }
	}, t);
}