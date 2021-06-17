let main = (function(){

    let sections = document.querySelectorAll('section[id]')
    let nav = document.getElementById('header')
    let scrollTop = document.getElementById('scroll-up')
    let themeButton = document.getElementById('theme-button')
    let darkTheme = 'dark-theme'
    let iconTheme = 'uil-sun'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')


    const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' :'light'
    const getCurrentIcon = () => document.body.classList.contains(iconTheme)? 'uil-moon' :'uil-sun'

    if(selectedTheme){
        document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedTheme === 'uil-moon'? 'add' : 'remove'](iconTheme)
    }

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current=>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            }
            else{
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }

    function scrollHeader(){
        if(this.scrollY >= 80){
            nav.classList.add('scroll-header')
        }
        else{
            nav.classList.remove('scroll-header')
        }

    }

    function scrollUp(){
        if(this.scrollY >= 560){
            scrollTop.classList.add('scroll-scroll')
        }
        else{
            scrollTop.classList.remove('scroll-scroll')
        }
    } 

    window.addEventListener('scroll',scrollActive)
    window.addEventListener('scroll',scrollHeader)
    window.addEventListener('scroll',scrollUp)

    themeButton.addEventListener('click',()=>{
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme',getCurrentTheme())
        localStorage.setItem('selected-icon',getCurrentIcon())
    })
})()