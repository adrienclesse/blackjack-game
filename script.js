(function(){

    let randomNum;
            function getRandomNum(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                randomNum=( Math.floor(Math.random() * (max - min) + min));
                return randomNum;
            };

            function firstClick () {
   
               // document.getElementById("request").addEventListener("click",function  () {
                    let userCard1=getRandomNum(1,11);
                    
                    if (userCard1 ===1) {document.getElementById("card-spot1").src = "img/one.png";}
                    else if (userCard1 ===2) {document.getElementById("card-spot1").src = "img/two.png";}
                    else if (userCard1 ===3) {document.getElementById("card-spot1").src = "img/three.png";}
                    else if(userCard1 ===4) {document.getElementById("card-spot1").src = "img/four.png";}
                    else if(userCard1 ===5) {document.getElementById("card-spot1").src = "img/five.png";}
                    else if(userCard1 ===6) {document.getElementById("card-spot1").src="img/six.png";}
                    else if(userCard1 ===7)  {document.getElementById("card-spot1").src="img/seven.png";}
                    else if(userCard1 ===8) {document.getElementById("card-spot1").src="img/eight.png";}
                    else if(userCard1 ===9) {document.getElementById("card-spot1").src="img/nine.png";}
                    else if(userCard1 ===10) {document.getElementById("card-spot1").src="img/ten.png";}
                    return userCard1;
               // });

             }
             
             function secondClick () {
   
                // document.getElementById("request").addEventListener("click",function  () {
                    let userCard2=getRandomNum(1,11);
                     
                     if (userCard2 ===1) {document.getElementById("card-spot1").src = "img/one.png";}
                     else if (userCard2 ===2) {document.getElementById("card-spot1").src = "img/two.png";}
                     else if (userCard2 ===3) {document.getElementById("card-spot1").src = "img/three.png";}
                     else if(userCard2 ===4) {document.getElementById("card-spot1").src = "img/four.png";}
                     else if(userCard2 ===5) {document.getElementById("card-spot1").src = "img/five.png";}
                     else if(userCard2 ===6) {document.getElementById("card-spot1").src="img/six.png";}
                     else if(userCard2 ===7)  {document.getElementById("card-spot1").src="img/seven.png";}
                     else if(userCard2 ===8) {document.getElementById("card-spot1").src="img/eight.png";}
                     else if(userCard2 ===9) {document.getElementById("card-spot1").src="img/nine.png";}
                     else if(userCard2 ===10) {document.getElementById("card-spot1").src="img/ten.png";}
                    return userCard2;
                // });
 
              }

    document.getElementById("computer").addEventListener("click",function () {
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

    });

    let timesClicked=0;
    let firstCard;
    let secondCard;
    
    document.getElementById("request").addEventListener("click",function() {
        timesClicked++;
        if (timesClicked===1) {
            firstCard=firstClick();  
            }
        else if (timesClicked===2) {
            secondCard=secondClick();
            console.log(firstCard);
            console.log(secondCard);
        }
    });
    
 //  let timesClicked=0;
//document.getElementById("request").click(function() {
//timesClicked++;

//if (timesClicked===1) { alert("a");}
   // firstclick();}
 //else if ( timesClicked===2) { alert("b");}
  //   secondclick();}

//});



})();
