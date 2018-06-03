# biCalendar

### 演示地址

[http://calendar.pannnda.com](demo)

### 启动

```
$npm install
$npm run build
$npm run dev
```

### 使用

1. 引入**src**文件下的`bicalendar.js` 和**docs**文件夹下的`bicalendar.css`

2. 插入HTML

   ```html
   <div id="mycalendar"></div>
   ```

3. 初始化

   ```js
   var mycalendar = new biCalendar({
       el: '#mycalendar',
       language: 'en',
       width: '100%',
       height: '120vw',
       background: 'rgb(215, 225, 249)'
   })
   ```

4. API

   ```js
   //默认设置
   new biCalendar({
       el: '#mycalendar',                //element             (必选)
       language: 'en',                   //中文:cn 英文:en      (可选)
       width: '300px',                   //宽度大小             (可选)
       height: '350px',                  //高度大小             (可选)
       background: '#fff',               //背景颜色             (可选)
   	todo: true,                       //是否开启备忘录和闹钟  (可选)
       color: '#000'                     //字体颜色             (可选)
   })
   //显示日历
   mycalendar.show()
   //关闭日历
   mycalendar.colse()
   //获取选中日期的年月日
   mycalendar.onDateSelected().then(res => {
       /*
       dosomthing...
       document.querySelector('.xxxButton').addEventListener('click', () => alert(`${res.year}		年${res.month}月${res.date}日`))
       */
   })
   ```

   ### Todo

   - 假期高亮
   - 导入ics文件