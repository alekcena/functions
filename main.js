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
	function $(elem){
		return document.querySelector(elem);
	}
function test(){
	console.log("test");
}