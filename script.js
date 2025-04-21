let c1 = document.getElementById('com1')
let hr1 = document.getElementById('uhr1')
let c2 = document.getElementById('com2')
let hr2 = document.getElementById('uhr2')
let c3 = document.getElementById('com3')
let hr3 = document.getElementById('uhr3')
let next = 3
let txt = document.getElementById('text')
let c1txt = document.getElementById('c1txt')
let c2txt = document.getElementById('c2txt')
let c3txt = document.getElementById('c3txt')

function comment() {

    if (next == 3) {
        c3.style.display = 'block'
        hr3.style.display = 'block'

        c3txt.innerHTML = txt.value
        next = 2
    } else {
        if (next == 2) {
            c2.style.display = 'block'
            hr2.style.display = 'block'

            c2txt.innerHTML = txt.value
            next = 1
        } else {
            if (next == 1) {
                c1.style.display = 'block'
                hr1.style.display = 'block'

                c1txt.innerHTML = txt.value
                next = 0
            } else {
                window.alert('Você só pode enviar até 3 comentários')
            }
        }
    }

    txt.value = ''
} 
