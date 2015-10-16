 var tags = ["Abraham Lincoln", "Albert Einstein", "APJ Abdul Kalam","Bill Gates",
           "Charles Darwin", "Gautama Buddha", "John F. Kennedy", "Mahatma Gandhi", 
		   "Marilyn Monroe",  "Mother Teresa", "Nelson Mandela", "Steve Jobs", 
		   "Swami Vivekanand", "Winston Churchill"];

function allThoughtsGen(){
	var output="";
	$.each(tags, function(index, value){
		$.getJSON('json/'+value+'.json', function(data){
			$.each(data,function(key, val){
				output+='<p class="allThoughts4Search">';
				output+=val.content+'<br><em><b>('+val.header+')</b></em>';
				output+='</p>';
			});
		$('#allThoughts').html(output);
		});	
	});	
}

function browseThoughtsGen(){
	var output="";
	$.each(tags, function(index, value){
		output+='<a href="#thoughts" class="ui-btn ui-shadow ui-btn-inline ui-corner-all" onclick="showThoughts(';
		output+= "'"+value+"'";
		output+= ')">';
		output+=value;
		output+='</a>';		
	});	
	$('#cloud').html(output);
}

function showThoughts(tag){
	var output="";
	//the following request might seem redundant, and it is.
	//it's the result of careless design. take care, next time.
	$.getJSON('json/'+tag+'.json', function(data){
		var output="<h2><center>";
		output+=tag;
		output+="</center></h2>";
		$.each(data, function(key, val){
			output+='<p class="allThoughts4Search">';
			output+=val.content;
			output+='</p>';
			if(key!=data.length-1)
				output+='<hr>';
		});
		$('#thought-list').html(output);
	});
}
function randThoughtGen(){
	var output="";
	//// Returns a random integer between min (included)
	// and max (included)
	// Using Math.round() will give you a non-uniform distribution!
	//Math.floor(Math.random() * (max - min + 1)) + min;
	var randomTagNo = Math.floor(Math.random()*(tags.length-1-0+1)+0);
	$.getJSON('json/'+tags[randomTagNo]+'.json', function(data){			
		var randomThoughtNo = Math.floor(Math.random()*(data.length-1-0+1)+0);
		output=data[randomThoughtNo].content;
		$('#randomQuote').html(output);
	});
}

//on document ready...js...
$(document).ready(function(){

//Canvas Animation
var mainCanvas = document.querySelector("#myCanvas");
var mainContext = mainCanvas.getContext("2d");
var canvasHeight = mainCanvas.height;
var canvasWidth = mainCanvas.width;
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
var angle = 0;
var playing = true;
var circleid;

mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

function drawCircle(centerX, centerY, radius, color){
	//color in background
	//mainContext.fillStyle = "#eeeeee";
	//mainContext.fillRect(0,0,canvasWidth, canvasHeight);
	//draw circle
	mainContext.beginPath();
	mainContext.arc(centerX, centerY, radius, 0, Math.PI*2, false);
	mainContext.closePath();
	//color in circle
	mainContext.fillStyle=color;
	mainContext.fill();

	angle += Math.PI / 64;

}
var xcenter1 = (canvasWidth/3 - 0)/2;
var xcenter2 = xcenter1 + canvasWidth/3;
var xcenter3 = xcenter2 + canvasWidth/3;
var xcenter4 = xcenter3 + canvasWidth/3;

drawCircle(xcenter1, canvasHeight/2, 20, "#FFFFAA");
drawCircle(xcenter2, canvasHeight/2, 20, "#FFDD88");
drawCircle(xcenter3, canvasHeight/2, 20, "#FF0077");

});  //document.ready ended


//$(document).ready(function(){
//
//});
