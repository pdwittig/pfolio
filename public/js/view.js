function View() {
  this.introContainerSelector = '.inner-intro';
  this.introContentSelector = '.inner-intro div';
}

View.prototype = {
  bindEvents: function() {
    document.addEventListener( 'scroll', this.handleScroll.bind(this) );
  },

  handleScroll: function() {
    var introContainer = document.querySelector( this.introContainerSelector );
    var introContent = document.querySelector( this.introContentSelector );

    var newHeight = introContainer.clientHeight - window.scrollY;
    var newHeightRatio = (newHeight - 150) / ( 700 - 150 );

    console.log(newHeight );    
    console.log(newHeightRatio);

    introContainer.style.clip = "rect(0px, 1920px, " + newHeight + "px, 0px";
    introContent.style.opacity = newHeightRatio;
  }
}