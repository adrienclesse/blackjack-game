(function(){

    let randomNum;
            function getRandomNum(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                randomNum=( Math.floor(Math.random() * (max - min) + min));
                return randomNum;
            };

            function drawCard () {
   
               
                    let userCard=getRandomNum(1,11);
                    
                    if (userCard ===1) {document.getElementById("card-spot1").src = "img/one.png";}
                    else if (userCard ===2) {document.getElementById("card-spot1").src = "img/two.png";}
                    else if (userCard ===3) {document.getElementById("card-spot1").src = "img/three.png";}
                    else if(userCard===4) {document.getElementById("card-spot1").src = "img/four.png";}
                    else if(userCard ===5) {document.getElementById("card-spot1").src = "img/five.png";}
                    else if(userCard ===6) {document.getElementById("card-spot1").src="img/six.png";}
                    else if(userCard ===7)  {document.getElementById("card-spot1").src="img/seven.png";}
                    else if(userCard ===8) {document.getElementById("card-spot1").src="img/eight.png";}
                    else if(userCard ===9) {document.getElementById("card-spot1").src="img/nine.png";}
                    else if(userCard ===10) {document.getElementById("card-spot1").src="img/ten.png";}
                    return userCard;
               

             };
             
 
              
             function computerDraw () {
                    
                    let comptuterCard=getRandomNum(1,11);
                        console.log(comptuterCard);
                        if (comptuterCard ===1) {document.getElementById("card-spot2").src = "img/one.png";}
                        else if (comptuterCard ===2) {document.getElementById("card-spot2").src = "img/two.png";}
                        else if (comptuterCard ===3) {document.getElementById("card-spot2").src = "img/three.png";}
                        else if(comptuterCard ===4) {document.getElementById("card-spot2").src = "img/four.png";}
                        else if(comptuterCard ===5) {document.getElementById("card-spot2").src = "img/five.png";}
                        else if(comptuterCard ===6) {document.getElementById("card-spot2").src="img/six.png";}
                        else if(comptuterCard ===7)  {document.getElementById("card-spot2").src="img/seven.png";}
                        else if(comptuterCard ===8) {document.getElementById("card-spot2").src="img/eight.png";}
                        else if(comptuterCard ===9) {document.getElementById("card-spot2").src="img/nine.png";}
                        else if(comptuterCard ===10) {document.getElementById("card-spot2").src="img/ten.png";}
                        return comptuterCard;

                    };

    let timesClicked=0;
    let firstCard;
    let secondCard;
    let thirdCard;
    let fourthCard;
    let fifthCard;
    document.getElementById("request").addEventListener("click",function() {
        timesClicked++;
        if (timesClicked===1) {
            firstCard=drawCard()
            console.log(firstCard); 
            }
        else if (timesClicked===2) {
            secondCard=drawCard();
            console.log(secondCard);
        }
        else if (timesClicked===3) {
            thirdCard=drawCard();
            console.log(thirdCard);
        }

        else if (timesClicked===4) {
            fourthCard=drawCard();
            console.log(fourthCard);
        }
        else if (timesClicked===5) {
            fifthCard=drawCard();
            console.log(fifthCard);
        }
    
    if(timesClicked===1) {document.getElementById("info").innerHTML=firstCard;}
    else if(timesClicked===2) {document.getElementById("info").innerHTML=firstCard+secondCard;}
    else if(timesClicked===3) {document.getElementById("info").innerHTML=firstCard+secondCard+thirdCard;}
    else if(timesClicked===4) {document.getElementById("info").innerHTML=firstCard+secondCard+thirdCard+fourthCard;}
    else if(timesClicked===5) {document.getElementById("info").innerHTML=firstCard+secondCard+thirdCard+fourthCard+fifthCard;}

    

    });
    
    let timesClicked1=0;
    let firstCard1;
    let secondCard1;
    let thirdCard1;
    let fourthCard1;
    let fifthCard1;
    document.getElementById("computer").addEventListener("click",function() {
        timesClicked1++;
        if (timesClicked1===1) {
            firstCard1=computerDraw();
            console.log(firstCard1);
            }
        else if (timesClicked1===2) {
            secondCard1=computerDraw();
            console.log(secondCard1);
            
        }
        else if (timesClicked1===3) {
            thirdCard1=computerDraw();
            console.log(thirdCard1);
        }

        else if (timesClicked1===4) {
            fourthCard1=computerDraw();
            console.log(fourthCard1);
        }
        else if (timesClicked1===5) {
            fifthCard1=computerDraw();
            console.log(fifthCard1);
        }
    
    if(timesClicked1===1) {document.getElementById("info1").innerHTML=firstCard1;}
    else if(timesClicked1===2) {document.getElementById("info1").innerHTML=firstCard1+secondCard1;}
    else if(timesClicked1===3) {document.getElementById("info1").innerHTML=firstCard1+secondCard1+thirdCard1;}
    else if(timesClicked1===4) {document.getElementById("info1").innerHTML=firstCard1+secondCard1+thirdCard1+fourthCard1;}
    else if(timesClicked1===5) {document.getElementById("info1").innerHTML=firstCard1+secondCard1+thirdCard1+fourthCard1+fifthCard1;}

    });
    document.getElementById("request").addEventListener("click",function() {
    var Result = document.getElementById("info").innerHTML;
    if (Result===21) {alert("You've reach 21, you've won!")}
    else if (Result>21) {alert("You've been been beyond 21, you've lost!")}
    
    });

    document.getElementById("computer").addEventListener("click",function() {
        var Result1 = document.getElementById("info1").innerHTML;
        if (Result1===21) {alert("The computer has reached 21, you've lost!")}
        else if (Result1>21) {alert("The computer has been beyond 21, you've won!")}
        
        });

})();
