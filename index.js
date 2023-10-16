
document.querySelector("button").addEventListener("click", Dicethrow)

var randomnum1 =  Math.floor((Math.random() * 6)  + 1 ) ;
var randomnum2 = Math.floor((Math.random() * 6)  + 1 ) ;

function Dicethrow() {
if (randomnum1 === 1 ) {
    document.querySelector(".img1").setAttribute("src" , " ./images/dice1.png ")} 
 else if (randomnum1 === 2 ) {
    document.querySelector(".img1").setAttribute("src" , " ./images/dice2.png ") }
    else if (randomnum1 === 3 ) {
        document.querySelector(".img1").setAttribute("src" , " ./images/dice3.png ") }
        else if (randomnum1 === 4 ) {
            document.querySelector(".img1").setAttribute("src" , " ./images/dice4.png ") }
            else if (randomnum1 === 5 ) {
                document.querySelector(".img1").setAttribute("src" , " ./images/dice5.png ") }
                else if (randomnum1 === 6 ) {
                    document.querySelector(".img1").setAttribute("src" , " ./images/dice6.png ") } ;


if (randomnum2 === 1 ) {
    document.querySelector(".img2 ").setAttribute("src" , " ./images/dice1.png ")}      
    else if  (randomnum2 === 2 ) {
        document.querySelector(".img2").setAttribute("src" , " ./images/dice2.png ") }   
        else if  (randomnum2 === 3 ) {
            document.querySelector(".img2").setAttribute("src" , " ./images/dice3.png ") }   
            else if  (randomnum2 === 4 ) {
                document.querySelector(".img2").setAttribute("src" , " ./images/dice4.png ") }   
                else if  (randomnum2 === 5 ) {
                    document.querySelector(".img2").setAttribute("src" , " ./images/dice5.png ") }   
                    else if  (randomnum2 === 6 ) {
                        document.querySelector(".img2").setAttribute("src" , " ./images/dice6.png ") } ;

 
if ( randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"}
    else if ( randomnum2 > randomnum1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins"}
        else  {
            document.querySelector("h1").innerHTML = "It's a Draw"}        
 document.querySelector("footer").innerHTML = "Refresh the page and roll again"                          
}