class biCalendar {
    constructor({
        el,
        width = '300px',
        height = '350px',
        language = 'en',
        background = '#fff',
        todo = true,
        color = '#000'
    }) {
        this.el = el
        this.container = document.querySelector(el)
        this.layout = `<div class="bi-calendar">
        <div class="bi-header">
            <button>&lt;&lt;</button>
            <button>&lt;</button>
            <span></span>
            <button>&gt;</button>
            <button>&gt;&gt;</button>
        </div>
        <div class="bi-container">
            <div class="bi-week">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
            </div>
            <div class="bi-date">
            </div>
        </div>
        <div class="bi-footer">
            <button>Now</button>
            <button>Todo</button>
        </div>
        </div>`
        this.dateLayOut = ``
        this.todoLayOut = `<div class="bi-todo"><textarea placeholder="todo..."></textarea><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1527965249412" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" p-id="3337" width="20%" height="20%"><defs><style type="text/css"></style></defs><path d="M510.107395 120.31318c-197.189058 0-357.623004 160.427806-357.623004 357.616864s160.434969 357.616864 357.623004 357.616864S867.724259 675.119101 867.724259 477.930043 707.296453 120.31318 510.107395 120.31318zM510.107395 788.743952c-171.384345 0-310.827211-139.429563-310.827211-310.813908s139.442866-310.813908 310.827211-310.813908 310.813908 139.429563 310.813908 310.813908S681.491741 788.743952 510.107395 788.743952zM316.535725 819.980373c-10.43363-7.600095-25.073048-5.328355-32.69975 5.119601l-71.967078 98.712209c-7.613398 10.446933-5.315052 25.086351 5.118578 32.69975 4.16588 3.03001 8.984628 4.492314 13.776771 4.492314 7.221472 0 14.338566-3.329838 18.921955-9.610892l71.967078-98.712209C329.268724 842.23319 326.970378 827.593771 316.535725 819.980373zM731.089345 825.099974c-7.626701-10.446933-22.265096-12.731976-32.69975-5.119601-10.43363 7.613398-12.731976 22.251793-5.119601 32.69975l71.967078 98.712209c4.583388 6.281053 11.700483 9.610892 18.921955 9.610892 4.792143 0 9.610892-1.462305 13.776771-4.492314 10.43363-7.613398 12.731976-22.251793 5.118578-32.69975L731.089345 825.099974zM184.637696 214.428697c12.719696-67.005067 72.411193-112.149243 132.886543-100.6964 12.69309 2.363837 24.955368-5.941316 27.358091-18.635429 2.402723-12.706393-5.941316-24.942065-18.635429-27.358091-86.019119-16.271592-170.078607 45.601594-187.590446 137.967258-2.408863 12.69309 5.929036 24.942065 18.628266 27.358091 1.475608 0.274246 2.937912 0.405229 4.387937 0.405229C172.694689 233.468332 182.509219 225.64618 184.637696 214.428697zM879.843274 205.705012C862.318132 113.339348 778.101055 51.531654 692.239526 67.737754c-12.69309 2.416026-21.038152 14.651698-18.635429 27.358091 2.402723 12.69309 14.691607 20.998243 27.358091 18.635429 60.462047-11.43954 120.18015 33.665751 132.886543 100.6964 2.128477 11.217483 11.949146 19.039635 22.970154 19.039635 1.450025 0 2.912329-0.130983 4.387937-0.405229C873.900935 230.647077 882.245997 218.398102 879.843274 205.705012zM688.414407 469.969745 525.321912 469.969745 525.321912 289.444205c0-12.928451-10.473539-23.400966-23.400966-23.400966-12.928451 0-23.400966 10.473539-23.400966 23.400966l0 203.927529c0 12.928451 10.473539 23.400966 23.400966 23.400966l186.493461 0c12.928451 0 23.400966-10.473539 23.400966-23.400966S701.342858 469.969745 688.414407 469.969745z" p-id="3338"></path></svg></div>`
        this.currentYear = new Date().getFullYear()
        this.currentMonth = new Date().getMonth() + 1
        this.language = language
        this.width = width
        this.height = height
        this.background = background
        this.color = color
        this.todo = todo
        this.init()
    }
    init() {
        this.createLayout()
        this.changeStyle()
        this.bindEvent()
        if (this.todo) {this.todof()}
    }
    createLayout() {
        this.container.innerHTML = this.layout
        if (!this.todo) {
            this.container.querySelectorAll('.bi-footer button')[1].innerText = 'Close'
        }
        this.createDateLayout()
        this.showMonth()
    }
    setDate(y, m) {
        this.lastDate = new Date(y, m, 0).getDate()
        this.lastDay = new Date(y, m, 0).getDay()
        this.firstDate = new Date(y, m - 1, 1).getDate()
        this.firstDay = new Date(y, m - 1, 1).getDay()
        this.lastMonthLastDate = new Date(y, m + 1, 0).getDate()
    }
    createDateLayout(y = new Date().getFullYear(), m = new Date().getMonth() + 1) {
        this.setDate(y, m)
        let lastMonthLastDate = this.lastMonthLastDate - this.firstDay + 1
        //上个月
        for (let i = 0; i < this.firstDay; i++) {
            this.dateLayOut += `<span class="bi-date-other bi-last">${lastMonthLastDate}</span>`
            lastMonthLastDate++
        }
        //本月
        for (let i = 0; i < this.lastDate; i++) {
            if (this.currentYear === new Date().getFullYear() && this.currentMonth === new Date().getMonth() + 1 && i + 1 === new Date().getDate()) {
                this.dateLayOut += `<span class="bi-date-today bi-date-recent">${i + 1}</span>`
            } else {
                this.dateLayOut += `<span class="bi-date-recent">${i + 1}</span>`
            }
        }
        //下个月
        for (let i = 0; i < 6 - this.lastDay; i++) {
            this.dateLayOut += `<span class="bi-date-other bi-next">${i + 1}</span>`
        }
        this.container.querySelector('.bi-date').innerHTML = this.dateLayOut
        this.dateLayOut = ``
        this.dateToggle()
        this.selectDate()
    }
    showMonth(y = this.currentYear, m = this.currentMonth) {
        if (this.language.toLowerCase() === 'cn') {
            let cnMonth = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
            this.container.querySelector('.bi-header span').innerHTML = `${y}年${cnMonth[m - 1]}月`
            let cnWeek = ['日', '一', '二', '三', '四', '五', '六']
            Array.from(this.container.querySelectorAll('.bi-week span')).forEach((e, i) => {
                e.innerText = cnWeek[i]
            })
        } else {
            let enMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            this.container.querySelector('.bi-header span').innerHTML = `${enMonth[m - 1]} ${y}`
        }
    }
    bindEvent() {
        this.ymToggle()
        this.container.querySelectorAll('.bi-footer button')[0].addEventListener('click', () => {
            this.returnToday()
        })
        if (!this.todo) {
            this.container.querySelectorAll('.bi-footer button')[1].addEventListener('click', () => {
                this.close()
            })
        }
    }
    ymToggle() {
        let prevYear = this.container.querySelectorAll('.bi-header button')[0]
        let prevMonth = this.container.querySelectorAll('.bi-header button')[1]
        let nextMonth = this.container.querySelectorAll('.bi-header button')[2]
        let nextYear = this.container.querySelectorAll('.bi-header button')[3]
        let datePrevMonth = Array.from(this.container.querySelectorAll('.bi-last'))
        prevYear.addEventListener('click', () => {
            this.currentYear--
                this.createDateLayout(this.currentYear, this.currentMonth)
            this.showMonth()
        })
        prevMonth.addEventListener('click', () => {
            this.currentMonth--
                this.createDateLayout(this.currentYear, this.currentMonth)
            this.changeMonth()
            this.showMonth()
        })
        nextYear.addEventListener('click', () => {
            this.currentYear++
                this.createDateLayout(this.currentYear, this.currentMonth)
            this.showMonth()
        })
        nextMonth.addEventListener('click', () => {
            this.currentMonth++
                this.createDateLayout(this.currentYear, this.currentMonth)
            this.changeMonth()
            this.showMonth()
        })
    }
    dateToggle() {
        let datePrevMonth = Array.from(this.container.querySelectorAll('.bi-last'))
        let dateNextMonth = Array.from(this.container.querySelectorAll('.bi-next'))
        let prevMonth = this.container.querySelectorAll('.bi-header button')[1]
        let nextMonth = this.container.querySelectorAll('.bi-header button')[2]
        datePrevMonth.forEach(e => {
            e.addEventListener('click', () => {
                prevMonth.click()
            })
        })
        dateNextMonth.forEach(e => {
            e.addEventListener('click', () => {
                nextMonth.click()
            })
        })
    }
    changeMonth() {
        if (this.currentMonth > 12) {
            this.currentMonth = 1
            this.currentYear++
        } else if (this.currentMonth < 1) {
            this.currentMonth = 12
            this.currentYear--
        }
    }
    returnToday() {
        this.currentYear = new Date().getFullYear()
        this.currentMonth = new Date().getMonth() + 1
        this.showMonth()
        this.createDateLayout()
    }
    selectDate() {
        let recent = Array.from(this.container.querySelectorAll('.bi-date-recent'))
        let active
        recent.forEach(e => {
            if (e.classList.contains('bi-date-today')) {
                active = e
                e.addEventListener('click', () => {})
            } else {
                e.addEventListener('click', () => {
                    e.classList.add('bi-date-today')
                    if (active) {
                        active.classList.remove('bi-date-today')
                    }
                    this.selectDate()
                })
            }
        })
    }
    onDateSelected() {
        return new Promise((reslove, reject) => {
            let recent = Array.from(this.container.querySelectorAll('.bi-date-recent'))
            let dateSelected = ``
            recent.forEach(e => {
                if (e.classList.contains('bi-date-today')) {
                    dateSelected = e.innerText
                }
            })
            let y = this.currentYear
            let m = this.currentMonth
            let d = dateSelected
            let obj = {
                year: `${y}`,
                month: `${m}`,
                date: `${d}`
            }
            reslove(obj)
        })
    }
    show() {
        this.container.querySelector('.bi-calendar').style.display = 'flex'
    }
    close() {
        this.container.querySelector('.bi-calendar').style.display = 'none'
    }
    changeStyle() {
        if (this.width) {
            this.container.querySelector('.bi-calendar').style.width = this.width
        }
        if (this.height) {
            this.container.querySelector('.bi-calendar').style.height = this.height
        }
        if (this.background) {
            this.container.querySelector('.bi-calendar').style.background = this.background
        }
        if (this.color) {
            this.container.querySelector('.bi-calendar').style.color = this.color
        }
    }
    todof() {
        this.container.querySelectorAll('.bi-footer button')[1].addEventListener('click', () => {
            this.onDateSelected().then(res => {
                let obj = {
                    year: res.year,
                    month: res.month,
                    date: res.date,
                    hour: null,
                    minute: null,
                    todo: null,
                    done: false
                }
                //todoLayout
                this.container.querySelector('.bi-date').innerHTML = this.todoLayOut
                this.container.querySelector('.bi-header span').innerHTML = `<input type="number" class="bi-hour" placeholder="..." max="23" min="0">h <input type="number" class="bi-min" placeholder="...">m`
                //显示localStorage
                if (localStorage.getItem(`bi-${this.el}-${obj.year}${obj.month}${obj.date}`)) {
                    let returnObj = JSON.parse(localStorage.getItem(`bi-${this.el}-${obj.year}${obj.month}${obj.date}`))
                    this.container.querySelectorAll('.bi-header input')[0].value = returnObj.hour
                    this.container.querySelectorAll('.bi-header input')[1].value = returnObj.minute
                    this.container.querySelector('.bi-todo textarea').value = returnObj.todo
                }
                //判断时间格式
                let num = /^[0-9]*$/
                this.container.querySelectorAll('.bi-header input')[0].addEventListener('blur', () => {
                    if (this.container.querySelectorAll('.bi-header input')[0].value > 23) {
                        this.container.querySelectorAll('.bi-header input')[0].value = 23
                    }
                    if (!num.test(this.container.querySelectorAll('.bi-header input')[0].value)) {
                        this.container.querySelectorAll('.bi-header input')[0].value = 0
                    }
                })
                this.container.querySelectorAll('.bi-header input')[1].addEventListener('blur', () => {
                    if (this.container.querySelectorAll('.bi-header input')[1].value > 59) {
                        this.container.querySelectorAll('.bi-header input')[1].value = 59
                    }
                    if (!num.test(this.container.querySelectorAll('.bi-header input')[1].value)) {
                        this.container.querySelectorAll('.bi-header input')[1].value = 0
                    }
                })
                //储存localStorage
                this.container.querySelector('.bi-todo textarea').addEventListener('blur', () => {
                    obj.todo = this.container.querySelector('.bi-todo textarea').value
                    localStorage.setItem(`bi-${this.el}-${obj.year}${obj.month}${obj.date}`, JSON.stringify(obj))
                })
                this.container.querySelector('.bi-todo svg').addEventListener('click', () => {
                    if (!this.container.querySelector('.bi-hour').value || !this.container.querySelector('.bi-min').value) {
                        if (this.language.toLowerCase() === 'cn') {
                            alert('时间不能为空!')
                        } else {
                            alert('The time input cannot be empty!')
                            console.log(this.language.toLowerCase())
                        }
                    } else {
                        obj.hour = this.container.querySelector('.bi-hour').value
                        obj.minute = this.container.querySelector('.bi-min').value
                        obj.todo = this.container.querySelector('.bi-todo textarea').value
                        localStorage.setItem(`bi-${this.el}-${obj.year}${obj.month}${obj.date}`, JSON.stringify(obj))
                        alarmClock()
                        if (this.language.toLowerCase() === 'cn') {
                            alert('闹钟已经设置完毕!')
                        } else {
                            alert('Alarm clock set successfully')
                        }
                    }
                })
            })
        })
        //执行闹钟
         var alarmClock = () => {
            if (localStorage.getItem(`bi-${this.el}-${new Date().getFullYear()}${new Date().getMonth() + 1}${new Date().getDate()}`)) {
                let todayObj = JSON.parse(localStorage.getItem(`bi-${this.el}-${new Date().getFullYear()}${new Date().getMonth() + 1}${new Date().getDate()}`))
                console.log(todayObj)
                let clockTime = todayObj.hour * 3600 + todayObj.minute * 60
                let nowTime = new Date().getHours() * 3600 + new Date().getMinutes() * 60
                if (!todayObj.done) {
                    setTimeout(() => {
                        alert(`Alarm clock(${todayObj.hour}:${todayObj.minute}): \n${todayObj.todo}\n`)
                        todayObj.done = true
                        localStorage.setItem(`bi-${this.el}-${new Date().getFullYear()}${new Date().getMonth() + 1}${new Date().getDate()}`, JSON.stringify(todayObj))
                    }, (clockTime - nowTime) * 1000)
                }
            }
        }
        alarmClock()
    }
}

export {
    biCalendar
}