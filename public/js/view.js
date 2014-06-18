function View() {
  this.introContainerSelector = '.inner-intro';
  this.introContentSelector = '.inner-intro div';
  this.navbarSelector = '#navbar';
  this.connectContainerSelector = '.connect';
  this.monitorPosition = 1000;
  this.windowDelta = 0;
  this.lastWindowScrollY = 0;
  
  this.introContainerToTop = 0;
  this.introContainerDisplayRatio = 0;
  this.introContainer;
  this.introContent;
}

View.prototype = {
  bindEvents: function() {
    document.addEventListener( 'scroll', this.handleScroll.bind(this) );
  },

  handleScroll: function() {
    this.introContainer = document.querySelector( this.introContainerSelector );
    this.introContent = document.querySelector( this.introContentSelector );
    var introContainerHeight = this.introContainer.clientHeight;

    this.introContainerToTop = introContainerHeight - window.scrollY;
    this.introContainerDisplayRatio = ( this.introContainerToTop - 75 ) / ( introContainerHeight - 75 );

    this.updateIntroContainer();
    this.updateNavbar();
    this.updateMonitor();
    this.updateProjectContainers();
    this.updateProjectImages();
    console.log(window.scrollY)

  },

  updateIntroContainer: function() {
    this.introContainer.style.clip = "rect(0px, 1920px, " + this.introContainerToTop + "px, 0px)";
    this.introContent.style.opacity = this.introContainerDisplayRatio;
  },

  updateNavbar: function() {
    var navbar = document.querySelector( this.navbarSelector );
    if (this.introContainerToTop < 50) {
      opacity = ( 30 - this.introContainerToTop ) / 30;
      navbar.style.opacity = opacity;
    }
  },

  updateMonitor: function() {
    var monitor = document.querySelectorAll( '.monitor-container' )
    this.manageYPos( monitor )
  },

  updateProjectContainers: function() {
    var gistboard = document.querySelector('#gistboard')
    gistboard.style.clip = "rect(158px, 238px, 158px, 0px)";

    var textCols = document.querySelectorAll('.text-col')
    this.manageYPos( textCols )
  },

  updateProjectImages: function() {
    var trala = document.querySelector('#trala')
    var gistBoard = document.querySelector('#gistboard')
    if ( window.scrollY > 1233 && window.scrollY < 1394 ) {
      var scrollDelta = window.scrollY - 1233
      // trala.style.opacity = ( 158 - scrollDelta ) / 158 
      gistboard.style.clip = "rect(" + ( 158 - scrollDelta ).toString() + "px, 238px, 158px, 0px)";
      trala.style.clip = "rect(" + ( 0 - scrollDelta ).toString() + "px, 238px, 158px, 0px)";

    }
  },

  manageYPos: function(elements) {
    if ( window.scrollY < 700 ) {
      this.setYpos( elements, 1000 - window.scrollY )
    }
    else if ( window.scrollY > 700 ) {
      this.setYpos( elements, 300 ) 
    }
  },

  setYpos: function(elements, yPos) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.top = yPos.toString() + "px";
    }
  }
}









