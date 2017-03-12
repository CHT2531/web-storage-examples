var filmList;
var favList;

function getAllFilms() //generate list of films (this could come via Ajax)
{
	var films=[]
	films.push({id:0,title:"No Country for Old Men",year:"2007"});
	films.push({id:1,title:"Jaws",year:"1975"});
	films.push({id:2,title:"Winter's Bone",year:"2010"});
	films.push({id:3,title:"Back to the Future",year:"1985"});
	return films;
}


function getFavFilms() //look in web storage for array of films ids
{
	var favFilms=[]
	if(localStorage.getItem("favFilms")){
		favFilms=JSON.parse(localStorage.getItem("favFilms"));
	}
	return favFilms;
}


function removeFromFavs(id) //remove the id from web storage
{
	return function(){
		var favFilms = getFavFilms();
		var indexNum = favFilms.indexOf(id);
		if(indexNum != -1) {
			favFilms.splice(indexNum, 1);
		}
		localStorage.setItem("favFilms", JSON.stringify(favFilms))
		populateList();
	}
	
}
function addToFavs(id) //add the id to web storage
{
	return function(){
		var favFilms = getFavFilms();
		favFilms.push(id)
		localStorage.setItem("favFilms", JSON.stringify(favFilms))
		populateList();
	}
	
}
function populateList() //populate the first list with a div for each film
{
	var allFilms=getAllFilms(); 
	var favFilms=getFavFilms();
	filmList.innerHTML="";

	allFilms.forEach(function(film){
		var newLi=document.createElement("li");
		newLi.innerHTML=film.title+" ";
		var newSpan=document.createElement("span");
		if(favFilms.includes(film.id)){ //it's one of the favourites
			newSpan.innerHTML="(Remove from favourites)"
			newSpan.addEventListener("click",removeFromFavs(film.id),false)
		}else{
			newSpan.innerHTML="(Add to favourites)"
			newSpan.addEventListener("click",addToFavs(film.id),false)
		}
		newLi.append(newSpan)
		filmList.appendChild(newLi);
	})
	showFavFilms(); //populate the second
}

function showFavFilms() //populate the second list with all the favourites
{
	var allFilms=getAllFilms();
	var favFilms=getFavFilms();
	favList.innerHTML="";

	allFilms.forEach(function(film){
		if(favFilms.includes(film.id)){
			var newLi=document.createElement("li");
		    newLi.innerHTML=film.title+" ";
		    favList.appendChild(newLi);
		}
	})
}

function init()
{
	filmList=document.getElementById("filmList");
	favList=document.getElementById("favList");
	populateList()
}


window.addEventListener("load",init, false);
