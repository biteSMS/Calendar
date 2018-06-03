import './bicalendar.less'
import {biCalendar} from './bicalendar.js'

if (module.hot) {
    module.hot.accept()
}

var mycalendar1 = new biCalendar({
    el: '#mycalendar1',
    language: 'en',
    width: '100%',
    height: '120vw',
    background: 'rgb(196, 255, 212)'
})
mycalendar1.show()

var mycalendar2 = new biCalendar({
    el: '#mycalendar2',
    language: 'cn'
})

document.querySelector('input').addEventListener('focus', () => {
    mycalendar2.show()
})

document.querySelector('#t-submit').addEventListener('click', () => {
    mycalendar2.onDateSelected().then(res => {
        document.querySelector('#t-input').value = `${res.year}年${res.month}月${res.date}日`
    })
    mycalendar2.close()
})

var mycalendar3 = new biCalendar({
    el: '#mycalendar3',
    width: '400px',
    height: '500px',
    background: 'rgba(255, 255, 255, .5)'
}).show()

var mycalendar4 = new biCalendar({
    el: '#mycalendar4',
    width: '230px',
    height: '260px',
    language: 'en',
    todo: false,
    color: '#fff',
    background: '#000'
}).show()