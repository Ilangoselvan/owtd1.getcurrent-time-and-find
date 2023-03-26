//get current time and find(morning,afteernoon or night)
let a=new Date();
	let hour=a.getHours();
	if(hour>=6 && hour<=11)
	{
		console.log("Morning");
	}
	else if(hour>=12 && hour<=16)
	{
		console.log("Afternoon");
	}
	else{
		console.log("Night")
	}