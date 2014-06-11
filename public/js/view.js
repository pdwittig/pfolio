function View() {
  this.introContainerSelector = '.inner-intro';
  this.introContentSelector = '.inner-intro div';
  this.navbarSelector = '#navbar'
  this.connectContainerSelector = '.connect'
}

View.prototype = {
  bindEvents: function() {
    document.addEventListener( 'scroll', this.handleScroll.bind(this) );
  },

  handleScroll: function() {
    var introContainer = document.querySelector( this.introContainerSelector );
    var introContent = document.querySelector( this.introContentSelector );
    var navbar = document.querySelector( this.navbarSelector );
    // var connectContainer = document.querySelector( this.connectContainerSelector );

    var newHeight = introContainer.clientHeight - window.scrollY;
    var newHeightRatio = ( newHeight - 75 ) / ( 700 - 75 );
    console.log("scrollY: " + window.scrollY)
    // var connectOpacity = ( newHeight - 595 ) / 100;

    // console.log("conect opacity " + connectOpacity)

    console.log("new height: " + newHeight );    
    console.log(newHeightRatio);

    introContainer.style.clip = "rect(0px, 1920px, " + newHeight + "px, 0px";
    introContent.style.opacity = newHeightRatio;

    // connectContainer.style.opacity = connectOpacity;

    if (newHeight < 50) {
      opacity = ( 30 - newHeight ) / 30;
      navbar.style.opacity = opacity;
    }

    // if ( window.scrollY > 1550 ) {
    //   console.log("fucxk yoiu")
    //   document.querySelector('li').style.color = "#34495E"
    // }
  }
}