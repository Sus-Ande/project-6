// HeaderScroll shows when scroll up

(function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    const header = document.querySelector('.site-header');
  
    var checkScroll = function() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 52) { 
        
        //replace 52 with the height of your header in px
  
        header.classList.add('site-header--hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('site-header--hide');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })();

// ScrollHeader shows when scroll down Hero
  const headerScroll = () => {

    // Get elements from DOM
    const header = document.querySelector('.site-header')

    // Toggle Header Class
    const toggleHeaderClass = () => {

        // If window has scrolled more than 170px, add a class
        // Else remove it.
        if ( window.scrollY > 170 ) {
            
            header.classList.add('site-header--scroll')
            
        } else {

            header.classList.remove('site-header--scroll')
           
        }
    

       
    }

    // Add event to window scroll
    window.addEventListener('scroll', toggleHeaderClass)

}

headerScroll()

