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
let user1 = document.getElementById('user1')
let user2 = document.getElementById('user2')
let user3 = document.getElementById('user3')
let username = document.getElementById('username')
let tslt = false
let ssscom = document.getElementById('ssscom')
let ptslt = document.getElementById('trnslt')

//Funções de avaliar

let star = 0
let nt1 = document.getElementById('nota1')
let nt2 = document.getElementById('nota2')
let nt3 = document.getElementById('nota3')
let nt4 = document.getElementById('nota4')
let nt5 = document.getElementById('nota5')

let on = false

function nota1(){
    if (on == false) {
        star = 1
        nt1.innerHTML = '★'
        nt2.innerHTML = '☆'
        nt3.innerHTML = '☆'
        nt4.innerHTML = '☆'
        nt5.innerHTML = '☆'

        on = true
    } else {
        star = 0
        nt1.innerHTML = '☆'
        nt2.innerHTML = '☆'
        nt3.innerHTML = '☆'
        nt4.innerHTML = '☆'
        nt5.innerHTML = '☆'

        on = false
    }
}

function nota2(){
    star = 2
    nt1.innerHTML = '★'
    nt2.innerHTML = '★'
    nt3.innerHTML = '☆'
    nt4.innerHTML = '☆'
    nt5.innerHTML = '☆'
}

function nota3(){
    nota2()
    star = 3
    nt3.innerHTML = '★'
    nt4.innerHTML = '☆'
    nt5.innerHTML = '☆'
}

function nota4(){
    nota3()
    star = 4
    nt4.innerHTML = '★'
    nt5.innerHTML = '☆'
}

function nota5(){
    nota4()
    star = 5
    nt5.innerHTML = '★'
}


function comment() {
    if (txt.value == '' || txt == 'undefined') {
        window.alert('Digite seu comentário!')
    } else {
        if (next == 3) {

            c3.style.display = 'block'
            hr3.style.display = 'block'
            c3txt.innerHTML = txt.value
            next = 2

            switch (star) {
                case 1:
                    c3st1.innerHTML = '★'
                break
                case 2:
                    c3st1.innerHTML = '★'
                    c3st2.innerHTML = '★'
                break
                case 3:
                    c3st1.innerHTML = '★'
                    c3st2.innerHTML = '★'
                    c3st3.innerHTML = '★'
                break
                case 4:
                    c3st1.innerHTML = '★'
                    c3st2.innerHTML = '★'
                    c3st3.innerHTML = '★'
                    c3st4.innerHTML = '★'
                break
                case 5:
                    c3st1.innerHTML = '★'
                    c3st2.innerHTML = '★'
                    c3st3.innerHTML = '★'
                    c3st4.innerHTML = '★'
                    c3st5.innerHTML = '★'
                break
            }
        } else {

            if (next == 2) {
                c2.style.display = 'block'
                hr2.style.display = 'block'
                user2.innerHTML = username.value
                c2txt.innerHTML = txt.value
                next = 1

                switch (star) {
                    case 1:
                        c2st1.innerHTML = '★'
                    break
                    case 2:
                        c2st1.innerHTML = '★'
                        c2st2.innerHTML = '★'
                    break
                    case 3:
                        c2st1.innerHTML = '★'
                        c2st2.innerHTML = '★'
                        c2st3.innerHTML = '★'
                    break
                    case 4:
                        c2st1.innerHTML = '★'
                        c2st2.innerHTML = '★'
                        c2st3.innerHTML = '★'
                        c2st4.innerHTML = '★'
                    break
                    case 5:
                        c2st1.innerHTML = '★'
                        c2st2.innerHTML = '★'
                        c2st3.innerHTML = '★'
                        c2st4.innerHTML = '★'
                        c2st5.innerHTML = '★'
                    break
                }
                
            } else {
                if (next == 1) {
                    c1.style.display = 'block'
                    hr1.style.display = 'block'
                    user1.innerHTML = username.value
                    c1txt.innerHTML = txt.value
                    next = 0

                    switch (star) {
                        case 1:
                            c1st1.innerHTML = '★'
                        break
                        case 2:
                            c1st1.innerHTML = '★'
                            c1st2.innerHTML = '★'
                        break
                        case 3:
                            c1st1.innerHTML = '★'
                            c1st2.innerHTML = '★'
                            c1st3.innerHTML = '★'
                        break
                        case 4:
                            c1st1.innerHTML = '★'
                            c1st2.innerHTML = '★'
                            c1st3.innerHTML = '★'
                            c1st4.innerHTML = '★'
                        break
                        case 5:
                            c1st1.innerHTML = '★'
                            c1st2.innerHTML = '★'
                            c1st3.innerHTML = '★'
                            c1st4.innerHTML = '★'
                            c1st5.innerHTML = '★'
                        break
                    }

                } else {
                    window.alert('Você só pode enviar até 3 comentários')
                }
            }
        }

        txt.value = ''
        username.value = ''

        nt1.innerHTML = '☆'
        nt2.innerHTML = '☆'
        nt3.innerHTML = '☆'
        nt4.innerHTML = '☆'
        nt5.innerHTML = '☆'

        star = 0
    }
}

function translate() {
    window.alert('Tudo OK')
    if (tslt == false) {
        ssscom.innerHTML = 'Olá, boa noite, Tchopee. Me chamo Sílvio, vim dos Estados Unidos para fazer uma reclamação. Minha filha de apenas 8 anos tem medo de aranhas. Peço que tirem a Matildes da loja. Obrigado pela atenção. Tenha uma boa tarde!'
        tslt = true
    } else {
        ssscom.innerHTML = 'Hi, good evening Tchopee. My name is Silvio, I came from USA to make a complaint. My daughter, whos only 8 years old is afraid of spiders. I ask that you please remove Matildes from the store. Thanks for your attention. Have a great afternoon!'
        ptslt.innerHTML = 'Mostar original'
        tslt = false
    }
}
