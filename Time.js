var isec,mySec,iMin;
isec = 0;
iMin = 0;
function timer(){
 	mySec = setInterval(secc,1000)
}
function secc(){
	isec++;
	if(isec<10){
	document.getElementById("sec").innerHTML = "0"+isec;	
	}
	else if(isec<60){
	document.getElementById("sec").innerHTML = isec;
	}
	else{
	iMin++;
	document.getElementById("min").innerHTML = iMin;
	isec=0;
	document.getElementById("sec").innerHTML = "0"+isec;	
	}
	}
timer();
