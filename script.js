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

    if(param == 'Rock' && options[bot] == 'Paper'){
        resultWindow('Você perdeu!')
        versus(param, options[bot]) 

    }else if(param == 'Paper' && options[bot] == 'Paper'){
        resultWindow('Empate!')
        versus(param, options[bot])

    }else if(param == 'Sci' && options[bot] == 'Paper'){
        resultWindow('Você ganhou!')
        versus(param, options[bot])


    } else if(param == 'Rock' && options[bot] == 'Rock'){
        resultWindow('Empate!')
        versus(param, options[bot])

    }else if(param == 'Paper' && options[bot] == 'Rock'){
        resultWindow('Você ganhou!')
        versus(param, options[bot])

    }else if(param == 'Sci' && options[bot] == 'Rock'){
        resultWindow('Você perdeu!')
        versus(param, options[bot])


    }else if(param == 'Rock' && options[bot] == 'Sci'){
        resultWindow('Você ganhou!')
        versus(param, options[bot])

    }else if(param == 'Paper' && options[bot] == 'Sci'){
        resultWindow('Você perdeu!')
        versus(param, options[bot])

    }else if(param == 'Sci' && options[bot] == 'Sci'){
        resultWindow('Empate!')
        versus(param, options[bot])
    }

    function versus(param, options){
        let elemDisplay = document.getElementById('textDply')
        elemDisplay.style.display = 'flex'
        elemDisplay.style.justifyContent += 'center'
        elemDisplay.style.position += 'relative'
        elemDisplay.style.top += '24%'
        display.innerHTML += '<img src="imgs/'+param+'.png" style="width:140px;height:140px; margin-bottom: 20px">'
        display.innerHTML += '<img src="imgs/versus.png" style="width:100px; height:100px; margin-left: 20px; margin-right: 20px; margin-top:15px">'
        display.innerHTML += '<img src="imgs/'+options+'.png" style="width:140px; margin-bottom: 20px">'
    }

    function resultWindow(result){
        if(result == 'Você perdeu!'){
            display.innerHTML = '<p id="resultDisplay" style="background-color: #FF0000; box-shadow: 0px 0px 12px 0px #FF0000">'+result+'</p>'
        }else if(result == 'Você ganhou!'){
            display.innerHTML = '<p id="resultDisplay" style="background-color: #03E535; box-shadow: 0px 0px 12px 0px #03E535">'+result+'</p>'
        }else{
            display.innerHTML = '<p id="resultDisplay" style="background-color: #8A8A8A; box-shadow: 0px 0px 12px 0px #8A8A8A">'+result+'</p>'
        }
    }
}
