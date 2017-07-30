var alaphet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["Breakaway", "Crossbar", "Deke", "Dangles", "Five Hole","Goon", "Hat Trick","Icing","One Timer","Poke Check","Slap Shot","Zamboni"]

var randomWord = words[Math.floor(Math.random() * words.length)]; //Math.floor truncates number of Math.random and then times
console.log("The random word is " + randomWord);

var win = 0;
var loss = 0;
var randomHangman = []; //Adds underscores
var letterGuessed = []; //Adds letter typed, that user guessed
var letterWrong = []; //Adds letter typed that user guessed that was wrong

//What should be loaded when screen loads up
window.onload = function screenLoaded() {
    
    console.log("Screen Has Loaded!")
    randomWordUnderscores();
    
};

//What happens when user types
document.onkeyup = function userTyped(event) {
    
    var letter = String.fromCharCode(event.keyCode);
    console.log(letter);
    
    showCorrectLetter();
    
    //Everytime User types correct letter show corresponding letter

    function showCorrectLetter(){

       var splitWord = randomWord.split("");
       console.log(splitWord);
        
       for (var i = 0; i < splitWord.length; i++){ 
           
       if (splitWord[i] === letter) {
           
            letterGuessed[i] = letter; // Adds letter To Correct Letters
            document.getElementById("randomLetters").innerHTML = letterGuessed;
            console.log(letter + " was added!");
           
        }else {
            
            letterWrong += letter; // Add letters to Wrong guess
            document.getElementById("wrongGuesses").innerHTML = letterWrong;
            console.log(letter + " was added to Wrong guess!");
        }
    }
    
           
    }
};

    

   // Create Underscore Accoringingly to what random word is chosen
   function randomWordUnderscores(){
    
    for (var i=0; i < randomWord.length; i++){
        
            randomHangman += " __";// creating underscores 
            document.getElementById("randomUnderscores").innerHTML = randomHangman;
            console.log("Underscore was made!")
    }
    
}

    
    

    
    
    
  
    
    
    
    
    
    







   
    


