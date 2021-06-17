let skills = (function(){

    let skillsContent = document.querySelectorAll('.skills-content')
    let skillsHeader = document.querySelectorAll('.skills-header')

    function toggleSkills(){
        let itemClass = this.parentNode.className
        for(let i = 0;i<skillsContent.length;i++){
            skillsContent[i].className = 'skills-content skills-close'
        }
        if(itemClass === 'skills-content skills-close'){
            this.parentNode.className = 'skills-content skills-open'
        }
    }


    skillsHeader.forEach(n=>n.addEventListener('click',toggleSkills))

})()