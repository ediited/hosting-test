
function täglicheAutos(){
	var bigcarPower = 400;
	//0,2 pro km
	bigcarPower = bigcarPower-((Math.random()*20+20)*(0.2)*2);
	var geladen = 0;

	while (true){
		var smallCarUsage = smallcar();
		if(bigcarPower-smallCarUsage<0){
			break;
		}
		else{
			bigcarPower = bigcarPower-smallCarUsage;
			geladen++;
		}


	}

	return geladen;
}

function smallcar(){
	//0.15 / km 

	var distZurArbeit = Math.random()*20+20;

	var verbrauch = 0;
	
	verbrauch = verbrauch + distZurArbeit*2;
	
	if(Math.round(Math.random()*4) == 2){
	
		verbrauch = verbrauch + distZurArbeit/2;
	
	}
	
	verbrauch = verbrauch * 0.15
	return verbrauch;

	}
