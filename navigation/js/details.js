
var filmTitle;
var filmYear;

function getChosenFilm() //look in local storage for the chosen film
{
	var chosenFilm;
	if(sessionStorage.getItem("chosenFilm")){
		chosenFilm=JSON.parse(sessionStorage.getItem("chosenFilm"));
	}
	return chosenFilm;
}

function populateDetails()
{
	var chosenFilm=getChosenFilm();
	filmTitle.innerHTML=chosenFilm.title;
	filmYear.innerHTML=chosenFilm.year;
}

function init()
{
	filmTitle=document.getElementById("title");
	filmYear=document.getElementById("year");
	populateDetails()
}


window.addEventListener("load",init, false);
