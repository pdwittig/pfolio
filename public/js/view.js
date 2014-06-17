function View() {
  this.introContainerSelector = '.inner-intro';
  this.introContentSelector = '.inner-intro div';
  this.navbarSelector = '#navbar';
  this.connectContainerSelector = '.connect';
  this.monitorPosition = 800;
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

  },

  updateIntroContainer: function() {
    this.introContainer.style.clip = "rect(0px, 1920px, " + this.introContainerToTop + "px, 0px";
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
    var monitor = document.querySelector( '.monitor-container' )
    console.log("Scroll Y: " + window.scrollY)
    if ( window.scrollY < 550 ) {
      monitor.style.top = (800 - window.scrollY).toString() + "px";
    }
    else if ( window.scrollY > 550 ) {
      monitor.style.top = "250px"
    }
  }
}