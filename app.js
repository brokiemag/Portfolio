$(document).ready(function(){
	
	// Seagreen
	$("#seagreen").mouseover(function(){
	  $(".Neon").addClass("seagreen");
	});
	$("#seagreen").mouseout(function(){
	  $(".Neon").removeClass("seagreen");
	});
	// Pink
	$("#pink").mouseover(function(){
	  $(".Neon").addClass("pink");
	});
	$("#pink").mouseout(function(){
	  $(".Neon").removeClass("pink");
	});
	// Purple
	$("#purple").mouseover(function(){
	  $(".Neon").addClass("purple");
	});
	$("#purple").mouseout(function(){
	  $(".Neon").removeClass("purple");
	});
	// Yellow
	$("#yellow").mouseover(function(){
	  $(".Neon").addClass("yellow");
	});
	$("#yellow").mouseout(function(){
	  $(".Neon").removeClass("yellow");
	});
	// navyblue
	$("#red").mouseover(function(){
	  $(".Neon").addClass("red");
	});
	$("#red").mouseout(function(){
	  $(".Neon").removeClass("red");
	});
	// green
	$("#green").mouseover(function(){
	  $(".Neon").addClass("green");
	});
	$("#green").mouseout(function(){
	  $(".Neon").removeClass("green");
	});
	// orange
	$("#orange").mouseover(function(){
	  $(".Neon").addClass("orange");
	});
	$("#orange").mouseout(function(){
	  $(".Neon").removeClass("orange");
	});
});//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".wrapper");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) ";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});


