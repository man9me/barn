/*const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


let correntActive = 1

next.addEventListener('click',()=>{
    currentActive++
    console.log(currentActive)
    if (currentActive > circles.length)
    currentActive = circles.length
})*/

// const panels = document.querySelectorAll('.panel')

// console.log(panels[1])

// panels.forEach((panel) =>{
// panel.addEventListener('click',() =>{
//     console.log('ssmsjfh')
//     removeActiveClasses()
//     panel.classList.add('active')
// })
// })

// function removeActiveClasses() {
//     panels.forEach((panel) =>{
//         panel.classList.remove('active')
//         })
// }


const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}