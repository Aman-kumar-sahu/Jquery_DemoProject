$("button").first().on("click",function(){
	$("img").last().slideToggle(1000,function(){
		alert("Done!");
	});
});