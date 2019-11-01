var mainPage = document.getElementById("main");
var questionPage = document.getElementById("question-page");
var submitPage = document.getElementById("submit");
var scorePage = document.getElementById("score");


var timer = document.getElementById("timer");
var CustomSelect = document.getElementById("CustomSelect");

var startquiz = document.getElementById("startquiz");
var question = document.getElementById("question");

var selection1 = document.getElementById("selection1");
var selection2 = document.getElementById("selection2");
var selection3 = document.getElementById("selection3");
var selection4 = document.getElementById("selection4");
var option = document.getElementById("option")

var yourscore = document.getElementById("your-score");
var InputName = document.getElementById("InputName");
var submitbutton= document.getElementById("submitbutton");
var scorelist = document.getElementById("scorelist");
var goback = document.getElementById("goback");
var clear = document.getElementById("clear");

var score = 0;
var timercount = 50;
var questionindex = 0;


// main process

//initial page
init();
startquiz.addEventListener("click", function(){
    
    questionpage();
    display(0);

});

option.addEventListener("click", function(event){
    console.log(event.target);
    console.log(event.target.id);
    // var X = event.target.id;

    var y = selection(event.target.id);
    validate(y);
  
});






//function
function init(){
    mainPage.style.display= "block";
    questionPage.style.display = "none";
    submitPage.style.display = "none";
    scorePage.style.display = "none";
}

function questionpage(){
    if(getquizset()!==false){
        mainPage.style.display= "none";
        questionPage.style.display = "block";
        submitPage.style.display = "none";
        scorePage.style.display = "none"; 
    }
    
}



function getquizset(){
    var N = CustomSelect.value;

    if(N === "1"){
        return quiz1;
    }
    else if (N==="2"){
        return quiz2;
    }
    else if (N==="3"){
        return quiz3;
    }
    else {
        alert("Please select one quiz set, Please!");
        return false;
        
    }
}

function display(i){
    question.textContent = getquizset().question(i);
    selection1.textContent = "1." + getquizset().selection(4*i);
    selection2.textContent = "2." + getquizset().selection(4*i+1);
    selection3.textContent = "3." + getquizset().selection(4*i+2);
    selection4.textContent = "4." + getquizset().selection(4*i+3);
}

function selection(X){
    if(X === "selection1"){
        return "a";
    }
    else if (X==="selection2"){
       return "b";  
    }
    else if (X==="selection3"){
        return "c";
    }
    else {
        return "d";
    }
}


function validate(X){
    if(X ===getquizset().answer(questionindex)){
        questionindex ++;
        display(questionindex);
        score++;      
    }
    else{
        questionindex ++;
        display(questionindex);
        timercount -= 10;
    }
}















