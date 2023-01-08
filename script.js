function pressed(param){
    let press = document.getElementById('img'+param)
    press.style.boxShadow = 'none'
}

function loosed(param){
    let press = document.getElementById('img'+param)
    press.style.boxShadow = '0px 5px 12px 0px #867420'
}

async function opt(param){
    let display = document.getElementById('textDply')
    let options = ['Rock', 'Paper', 'Sci']

    let player = document.getElementById('img'+param)
    let bot = Math.floor(Math.random() * options.length)

    display.innerHTML = 'Seu oponente está escolhendo...'
    await new Promise(r => setTimeout(r, 1000))

    display.innerHTML = param+' '
    display.innerHTML += options[bot]

    if(param == 'Rock' && options[bot] == 'Paper'){
        versus(param, options[bot])

    }else if(param == 'Paper' && options[bot] == 'Paper'){
        versus(param, options[bot])

    }else if(param == 'Sci' && options[bot] == 'Paper'){
        versus(param, options[bot])


    } else if(param == 'Rock' && options[bot] == 'Rock'){
        versus(param, options[bot])

    }else if(param == 'Paper' && options[bot] == 'Rock'){
        versus(param, options[bot])

    }else if(param == 'Sci' && options[bot] == 'Rock'){
        versus(param, options[bot])


    }else if(param == 'Rock' && options[bot] == 'Sci'){
        versus(param, options[bot])

    }else if(param == 'Paper' && options[bot] == 'Sci'){
        versus(param, options[bot])

    }else if(param == 'Sci' && options[bot] == 'Sci'){
        versus(param, options[bot])
    }

    function versus(param, options){
        let elemDisplay = document.getElementById('textDply')
        elemDisplay.style.display = 'flex'
        elemDisplay.style.justifyContent += 'center'
        elemDisplay.style.position += 'relative'
        elemDisplay.style.top += '24%'
        display.innerHTML = '<img src="imgs/'+param+'.png" style="width:140px;height:140px; margin-bottom: 20px">'
        display.innerHTML += '<img src="imgs/versus.png" style="width:100px; height:100px; margin-left: 20px; margin-right: 20px; margin-top:15px">'
        display.innerHTML += '<img src="imgs/'+options+'.png" style="width:140px; margin-bottom: 20px">'
    }
}
