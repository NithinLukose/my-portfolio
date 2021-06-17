let navigation = (function(){
    
    //cache dom
    let navMenu = document.querySelector('.nav-menu')
    let navToggle = document.querySelector('.nav-toggle')
    let navClose = document.querySelector('.nav-close')
    let navLink = document.querySelectorAll('.nav-link')

    
    const toggleNavigation = (e) => {
        let id = e.target.id
        if(id === 'open'){
            navMenu.classList.add('show-menu')
        }
        else if(id === 'close'){
            navMenu.classList.remove('show-menu')
        }
        
    }

    const hideMenu = () => {
        navMenu.classList.remove('show-menu')
    }

    //event binding
    navToggle.addEventListener('click',toggleNavigation);
    navClose.addEventListener('click',toggleNavigation);
    navLink.forEach(n=>n.addEventListener('click',hideMenu))
})()