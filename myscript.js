var array = ["","green", "gray","red","white","blue","yellow"];
setInterval(function spawnBall() {
	    this.div = document.createElement("div") ;
        document.body.appendChild( this.div ) ;
        this.div.className = "ball rounded-circle" ;
        this.div.style.top = "90%";
        this.div.style.left = parseInt( 100 * Math.random() ) + "%" ;
        this.div.style.backgroundColor = array[Math.floor((Math.random() * 6) + 1)];
        this.div.onclick= function () {
            this.parentElement.removeChild(this);
        };
        if(this.div.position().top == 100){
            document.getElementById("life1").classList.add("d-none");
        }
        
    }, 900);
