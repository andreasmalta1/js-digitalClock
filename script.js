const hours = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

window.onload = () => (updateTime())

function updateTime(){
    let today = new Date();

    hours.innerText = (today.getHours() < 10 ? '0' : '') + today.getHours()
    minutes.innerText = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes()
    seconds.innerText = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds()
    ampm.innerText = (today.getHours() < 12 ? 'AM' : 'PM')

    setTimeout(updateTime, 1000)
}
