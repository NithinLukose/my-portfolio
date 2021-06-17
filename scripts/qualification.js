let qualification = (function(){
    let tabs = document.querySelectorAll('[data-target]')
    let tabContents = document.querySelectorAll('[data-content]')

    function toggleQualification(tab){
        let target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification-active')
        })

        target.classList.add('qualification-active')
        tabs.forEach(tab=>{
            tab.classList.remove('qualification-active')
        }) 
        tab.classList.add('qualification-active')
    }

    tabs.forEach(tab=>{
        tab.addEventListener('click',()=>toggleQualification(tab))
               
    })

})()