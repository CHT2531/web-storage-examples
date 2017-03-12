var filmList;

function getAllFilms() //generate list of films (this could come via Ajax)
{
	var films=[]
	films.push({id:0,title:"No Country for Old Men",year:"2007"});
	films.push({id:1,title:"Jaws",year:"1975"});
	films.push({id:2,title:"Winter's Bone",year:"2010"});
	films.push({id:3,title:"Back to the Future",year:"1985"});
	return films;
}

function viewDetails(film){
	return function(){
		//put the film object into web storage
		sessionStorage.setItem("chosenFilm", JSON.stringify(film));
		//navigate to the details page
		window.location.assign("details.html");
	}
	
}

function populateList() //populate the first list with a div for each film
{
	var allFilms=getAllFilms();
	filmList.innerHTML="";
	allFilms.forEach(function(film){
		var newDiv=document.createElement("div");
		newDiv.innerHTML=film.title;
		newDiv.addEventListener("click",viewDetails(film),false)
		filmList.appendChild(newDiv);
	})
}

function init()
{
	filmList=document.getElementById("filmList");
	populateList()
}


window.addEventListener("load",init, false);
