//RESOURCES
//const resources = ["https://www.instagram.com/adelle.vvho/", "https://nu.edu.kz/academics/program/ba-in-languages-linguistics-and-literature", "https://www.youtube.com/watch?v=liyFKUFCQno", "https://en.wikipedia.org/wiki/Kazakh_literature", "https://www.youtube.com/channel/UCqUOcvbIXinAezsVdExGuOQ", "https://en.wikipedia.org/wiki/Dragon", "https://en.wikipedia.org/wiki/Bridge_of_Sighs"];
//function findResource(index){
//    alert ("Visit this page for more information:" + " " + resources[index])
//}

// NAVIGATION BUTTONS
function navRight(){
    const pageOne = document.getElementById("navigation_one_page");
    const pageTwo = document.getElementById("navigation_two_page");
    pageOne.style.display = 'none';
    pageTwo.style.display = 'block';
}
function navLeft(){
    const pageOne = document.getElementById("navigation_one_page");
    const pageTwo = document.getElementById("navigation_two_page");
    pageOne.style.display = 'block';
    pageTwo.style.display = 'none';
}

// FILTERS
function toggleGrayscale(){
    document.getElementById("content").classList.toggle("grayscale-mode");
}
function toggleInverted(){
    document.getElementById("content").classList.toggle("inverted-mode");
}
function toggleConnected(){
    document.getElementById("connection").classList.toggle("visible");
}
function toggleFishes(){
    document.getElementById("fishdance").classList.toggle("visible");
}
function toggleDark(){
    document.getElementById("content").classList.toggle("dark-mode");
}

// FEEDER
function foodChecker() {
    let food = document.getElementById("food").value;
    String(food);
    if (food==="shrimp"){
        window.location.href = "https://jala.tech/blog/cultivation-tips/cannibalism-on-shrimp#:~:text=Vannamei%20shrimp%20which%20has%20the,all%20types%20of%20shrimp%20family.";
    } else{
        window.location.href = "fed.html";
    }
}

let foodItem;
function foodAdder(){
    let food = document.getElementsByClassName("food_again")[0].value;
    foodItem = document.createElement("h2");
    foodItem.innerText = food;
    document.getElementsByClassName("food_list")[0].appendChild(foodItem);
    foodHealther();
}
function foodDeleter(){
    let lastFood = document.getElementsByClassName("food_list")[0];
    lastFood.removeChild(lastFood.lastElementChild);
    foodHealther();
}
document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("lister_button").addEventListener("click", foodLister);
    document.getElementById("lister_button").addEventListener("click", foodAlerter);
});
document.addEventListener("DOMContentLoaded", foodHealther);
function foodLister(){
    const firstFood = document.getElementsByTagName("h2");
    document.getElementById("first_item").innerHTML = firstFood[0].innerHTML;
}
function foodAlerter(){
    const firstFood = document.getElementsByTagName("h2");
    alert("First food is" + " " + firstFood[0].innerHTML);
}

function foodHealther(){
    let hunger = document.getElementsByTagName("h2").length;
    switch (hunger){
        default:
            document.getElementById("hunger_meter").innerHTML = "X-X";
            break;
        case 0:
            document.getElementById("hunger_meter").innerHTML = "I am hungry!!! Feed me!!!";
            break;
        case 1:
            document.getElementById("hunger_meter").innerHTML = "I am hungry!!! Feed me!!!";
            break;
        case 2:
            document.getElementById("hunger_meter").innerHTML = "Mmm.....foooood)))";
            break;
        case 3:
            document.getElementById("hunger_meter").innerHTML = "Mmm.....foooood)))";
            break;
        case 4:
            document.getElementById("hunger_meter").innerHTML = "Okay, I am satisfied. No more.";
            break;
    }
}
