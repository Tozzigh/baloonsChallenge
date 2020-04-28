var array = ["","green", "gray","red","white","blue","yellow"];
var count = 1;
var vite = 3;

setInterval(function spawnBall() {
	    this.div = document.createElement("div") ;
        document.body.appendChild( this.div ) ;
        this.div.className = "ball rounded-circle" ;
        this.div.style.top = "100%";
        this.div.style.left = ( 90 * Math.random() ) + "%" ;
        this.div.style.backgroundColor = array[Math.floor((Math.random() * 6) + 1)];    

        this.div.onclick= function removeBall() {
            this.parentElement.removeChild(this);
            document.getElementById("score").innerHTML=count;
            count++;
        };

        if(vite == 3){
            this.div.addEventListener("webkitAnimationEnd", function(){document.getElementById("life1").className = "d-none";vite--; })
            
            }else if(vite==2){
                this.div.addEventListener("webkitAnimationEnd", function(){document.getElementById("life2").className = "d-none";vite--;})
                 
                }else if(vite==1){
                    this.div.addEventListener("webkitAnimationEnd", function(){document.getElementById("life3").className = "d-none";})
                    }
                    
        console.log(vite)

    }, 900);