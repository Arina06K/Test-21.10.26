//console.log('мой скрипт')

const change=document.getElementById('change')

change.addEventListener('click', my_fun)

function my_fun(){
    console.log('мой скрипт запущен')
    if (document.getElementsByTagName('div')[2].innerHTML=='Комарова'){

        document.getElementsByTagName('div')[2].innerHTML='Komarova'
        document.getElementsByTagName('div')[3].innerHTML='Arina'
        document.getElementsByTagName('div')[4].innerHTML='fem&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 06/06/2007'
        document.body.style.backgroundImage =  'url(фото/eng_pas.jpg)'
    }

    else {
        if (document.getElementsByTagName('div')[2].innerHTML=='Komarova') {

            document.getElementsByTagName('div')[2].innerHTML = 'Комарова'
            document.getElementsByTagName('div')[3].innerHTML = 'Арина'
            document.getElementsByTagName('div')[4].innerHTML = 'жен&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 06/06/2007'
            document.body.style.backgroundImage =  'url(pasport_shablon.png)'

    }//else

    }//fun




}