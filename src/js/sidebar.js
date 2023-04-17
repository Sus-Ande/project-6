const sidebar = () => {

    const menuButton = document.querySelector('.menu-button')
    const sidebar = document.querySelector('.sidebar')

    const toggleSidebar = () => {
        sidebar.classList.toggle('sidebar--open')
        menuButton.classList.toggle('menu-button--close')
        
    }

    menuButton.addEventListener('click', toggleSidebar)

}

sidebar()