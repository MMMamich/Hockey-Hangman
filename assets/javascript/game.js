var alaphet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["Breakaway", "Crossbar", "Deke", "Dangles", "Five Hole","Goon", "Hat Trick","Icing","One Timer","Poke Check","Slap Shot","Zamboni",]

var randomWord = words[Math.floor(Math.random() * words.length)]; //Math.floor truncates number of Math.random and then times

var s;
var count=0;
var answerArray=[]; //empty array stores guesses 

function startUp(){
    
    for (var i=0;i < randomWord.length; i++){
        
            answerArray[i] = "_";
            
    }
    
    s = answerArray.join(" "); //s variable puts in string
    document.getElementById("answer").innerHTML;
    
}

startUp();


function Letter() //going to replace with onkeypress
{
    // what we type in box
    var letter = document.getElementById("letter").value;
    
    //only letters
    if (letter.length > 0)
    {    
    
        for(var i=0; i<randomWord.length; i++)
        {   
            
            if(randomWord[i] === letter)
            {
            
                answerArray[i] = letter;
            
            }
            
        }
        //how many times it takes to guess
        count++;
        document.getElementById("counter").innerHTML ="No of clicks": + count;
        document.getElementById("answer").innerHTML =answerArray.join(" ");
    }
    
}
    
    


