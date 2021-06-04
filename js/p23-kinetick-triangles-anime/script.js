const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {

        // позиция нажатия во вью - порте
        const x = e.clientX
        const y = e.clientY
            // позиция кнопки
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
            // кординта внутри кнопки
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})