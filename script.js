document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=> {
        item.classList.toggle('change')
    })
})


const icons = document.querySelectorAll('.section-1-icons i')

let i = 1    /*since the value of the keyword is going to be changed use let keyword on each change it increases to 1 and after it reaches the length of the icons and reset to 1 afterthe total length*/
setInterval(() => {
    i++  
    const icon = document.querySelector('.section-1-icons .change')

    icon.classList.remove('change')

    if (i > icons.length) {
        icons[0].classList.add('change')
        i = 1
    }
    else {
        icon.nextElementSibling.classList.add('change')
    }
},4000) 