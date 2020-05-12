var array = ["","green", "gray","red","white","blue","yellow"];
var count = 1;
var vite = 3;

window.onload = () => {

    const threeLifes = (new Array(vite)).fill(null).map(x => "<li><img src='icons8-heart-64.png'></li>").join("");
    document.querySelector(".lifeBar").innerHTML = threeLifes; 

    const spawn = setInterval(function spawnBall() {
        if ( document.hasFocus() ) {
            const div = document.createElement("div") ;
            document.body.appendChild( div ) ;
            div.className = "ball rounded-circle" ;
            div.style.top = "100%";
            div.style.left = ( 90 * Math.random() ) + "%" ;
            div.style.backgroundColor = array[Math.floor((Math.random() * 6) + 1)];    

            div.addEventListener("click", function(ball){
                ball.target.parentElement.removeChild(ball.target);
                document.getElementById("score").innerHTML=count;
                count++;
            });

            div.addEventListener("animationend", function(ball){
                ball.target.parentElement.removeChild(ball.target);
                vite--; 
                document.querySelector("li").remove(); 
                console.log(vite)           
                if(vite<1){
                    clearInterval(spawn);
                    document.body.innerHTML = "<div class='gg'><h1>Game Over</h1><h2>"+count+"</h2><button onClick='window.location.reload()'>Retry</button></div>";
                }
            });
        }
    }, 900);
    
           
}