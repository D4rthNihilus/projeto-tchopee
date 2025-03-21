function estciv() {
    estciv = document.getElementsByName('matstatus')
    qjp = document.querySelector('div#qjp')

    if(estciv[2].checked) {
        qjp.style.display ='block'
    }
}