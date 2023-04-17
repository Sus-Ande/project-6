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

