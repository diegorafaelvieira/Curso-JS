function multiplicar() {
    let val = document.getElementById('txtv')
    let tab = document.getElementById('seltab')

    if(val.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let v = Number(val.value)
        tab.innerHTML = ''
        for(let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${v} x ${i} = ${v*i} `
            item.value = `tab${i}` //Usado no PHP
            tab.appendChild(item)
        }
    }
}