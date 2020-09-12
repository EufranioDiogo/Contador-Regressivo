let today = new Date()
var userDate = window.location.toString()

userDate = userDate.split('?')[1]
userDate = userDate.split('=')[1].split('-')
userDate = {
    year: parseInt(userDate[0]),
    month: parseInt(userDate[1]),
    day: parseInt(userDate[2])
}



let actualDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds())
userDate = new Date(userDate.year, userDate.month - 1, userDate.day, today.getHours(), today.getMinutes(), today.getSeconds())
let timeLess = userDate.getTime() - actualDate.getTime()
let days, hours, minutes, seconds
let btnReset = document.getElementById('reiniciar')
let btnGoBack = document.getElementById('voltar')

setTime(timeLess)

function setTime(timeLess){
    days = parseInt(timeLess / 86400000) // 86.400.000 is equal one day
    timeLess = timeLess - (86400000 * days)
    
    hours = parseInt(timeLess / 3600000) // 3.600.000 is equal a hour
    timeLess = timeLess - (3600000 * hours)
    
    minutes = parseInt(timeLess / 60000) // 60.000 is equal a minute
    timeLess = timeLess - (60000 * minutes)
    
    seconds = parseInt(timeLess / 1000)
    timeLess = timeLess - (1000 * seconds)
}

function cronometro(){
    if(days != 0 || hours != 0 || minutes != 0 || seconds != 0){
        if(days > 0 && hours == 0 && minutes == 0 && seconds == 0){
            days -= 1;
            hours = 23;
            minutes = 59;
            seconds = 59;
        } else {
            if(hours > 0 && minutes == 0 && seconds == 0){
                hours -= 1;
                minutes = 59;
                seconds = 59;
            } else if(minutes > 0 && seconds == 0){
                minutes -= 1;
                seconds = 59;
            }
        }
        document.querySelector('#days-lessing > h1:nth-child(1)').innerText = days;
        document.querySelector('#hours-lessing > h1:nth-child(1)').innerText = hours;
        document.querySelector('#minutes-lessing > h1:nth-child(1)').innerText = minutes;
        document.querySelector('#seconds-lessing > h1:nth-child(1)').innerText = seconds;
        seconds -= 1;
    } else {
        clearInterval(controller)
        document.querySelector('.information-title').innerText = 'Terminou!';
    }
}

controller = setInterval(cronometro, 1000)

btnGoBack.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})

btnReset.addEventListener('click', ()=>{
    clearInterval(controller)
    setTime(timeLess)
    setInterval(cronometro, 1000)
})