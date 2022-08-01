console.log('first')

const calc = (e) => {
    e.preventDefault()
} 

let calculate = () => {
    
    let amount = document.forms[0].betrag.value
    let amountB
    console.log(amount)
    const dir = document.forms[0].mehrwert.value
    console.log(dir)
    const tax = document.forms[0].satz.value
    console.log(tax)


    if(dir === 'auf' && tax === '19'){
        console.log('wir wollen 19% aufschlagen')
        amountB = (amount * 19) / 100
        amount *= 1.19
        console.log(amount, amountB)
/* 
        mwPTag = document.createElement('p')
        mwHTag = document.createElement('h4')
        let text = `Mehrwertsteuerbetrag`
        let mwprice = amountB
        mwPTag.innerHTML = text
        mwHTag.innerHTML = mwprice
        resultMwst.appendChild(mwPTag)
        resultMwst.appendChild(mwHTag)

        endPTag = document.createElement('p')
        endHTag = document.createElement('h4')
        let text2 = 'Bruttobetrag (Endpreis)'
        let endprice = amount
        endPTag.innerHTML = text2
        endHTag.innerHTML = endprice
        resultEnd.appendChild(endPTag)
        resultEnd.appendChild(endHTag)*/

        document.getElementById('mwsteuerbetrag').innerHTML = ` <p>Mehrwertsteuerbetrag</p> <h4>${amountB}</h4>`

        document.getElementById('endbetrag').innerHTML = ` <p>Bruttopreis (Endbetrag)</p> <h4>${amount}</h4>`
    } 

    if(dir === 'auf' && tax === '7'){

        amountB = (amount * 7) / 100
        amount *= 1.07
        console.log(amount)

        document.getElementById('mwsteuerbetrag').innerHTML = ` <p>Mehrwertsteuerbetrag</p> <h4>${amountB}</h4>`

        document.getElementById('endbetrag').innerHTML = ` <p>Bruttopreis (Endbetrag)</p> <h4>${amount}</h4>`
        

    }

    if(dir === 'ab' && tax === '19'){
        amount /= 1.19
        console.log(amount)

        document.getElementById('mwsteuerbetrag').innerHTML = ` <p>Mehrwertsteuerbetrag</p> <h4>${amountB}</h4>`

        document.getElementById('endbetrag').innerHTML = ` <p>Nettopreis</p> <h4>${Number (amount)}</h4>`
    }

    if(dir === 'ab' && tax === '7'){
        amount /= 1.07
        console.log(amount)

        document.getElementById('mwsteuerbetrag').innerHTML = ` <p>Mehrwertsteuerbetrag</p> <h4>${amountB}</h4>`

        document.getElementById('endbetrag').innerHTML = ` <p>Nettopreis</p> <h4>${Number (amount)}</h4>`
    }
    
}