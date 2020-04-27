setInterval(function spawnBall() {
	    this.div = document.createElement("div") ;
        document.body.appendChild( this.div ) ;
        this.div.className = "ball rounded-circle" ;
        this.div.style.top = parseInt( 100 * Math.random() ) + "%" ;
        this.div.style.left = parseInt( 100 * Math.random() ) + "%" ;
        this.div.style.backgroundColor = "hsla("+parseInt( 360 * Math.random() )+", "+parseInt( 100 * Math.random() )+"%, "+parseInt( 100 * Math.random() )+"%, "+Math.random()+")";
    }, 1);