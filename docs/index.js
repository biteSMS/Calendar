!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!m[e]||!_[e])return;for(var t in _[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(p[t]=n[t]);0==--b&&0===v&&M()}(e,t),n&&n(e,t)};var t,r=!0,a="ce1cb4181f2d993fd18e",o=1e4,i={},c=[],s=[];function l(e){var n=j[e];if(!n)return x;var r=function(r){return n.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(c=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),x(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(n){x[e]=n}}};for(var o in x)Object.prototype.hasOwnProperty.call(x,o)&&"e"!==o&&Object.defineProperty(r,o,a(o));return r.e=function(e){return"ready"===u&&h("prepare"),v++,x.e(e).then(n,function(e){throw n(),e});function n(){v--,"prepare"===u&&(g[e]||S(e),0===v&&0===b&&M())}},r}var d=[],u="idle";function h(e){u=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var f,p,y,b=0,v=0,g={},_={},m={};function w(e){return+e+""===e?+e:e}function D(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,h("check"),(n=o,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=x.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;_={},g={},m=e.c,y=e.h,h("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});p={};return S("index"),"prepare"===u&&0===v&&0===b&&M(),n});var n}function S(e){m[e]?(_[e]=!0,b++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=x.p+""+e+"."+a+".hot-update.js",n.appendChild(t)}(e)):g[e]=!0}function M(){h("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return k(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in p)Object.prototype.hasOwnProperty.call(p,t)&&n.push(w(t));e.resolve(n)}}function k(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,o,s,l;function d(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((s=j[o])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var c=0;c<s.parents.length;c++){var l=s.parents[c],d=j[l];if(d){if(d.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([l]),moduleId:o,parentId:l};-1===n.indexOf(l)&&(d.hot._acceptedDependencies[o]?(t[l]||(t[l]=[]),f(t[l],[o])):(delete t[l],n.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var b={},v=[],g={},_=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var D in p)if(Object.prototype.hasOwnProperty.call(p,D)){var S;l=w(D);var M=!1,k=!1,L=!1,O="";switch((S=p[D]?d(l):{type:"disposed",moduleId:D}).chain&&(O="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(M=new Error("Aborted because of self decline: "+S.moduleId+O));break;case"declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(M=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+O));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(S),n.ignoreUnaccepted||(M=new Error("Aborted because "+l+" is not accepted"+O));break;case"accepted":n.onAccepted&&n.onAccepted(S),k=!0;break;case"disposed":n.onDisposed&&n.onDisposed(S),L=!0;break;default:throw new Error("Unexception type "+S.type)}if(M)return h("abort"),Promise.reject(M);if(k)for(l in g[l]=p[l],f(v,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,l)&&(b[l]||(b[l]=[]),f(b[l],S.outdatedDependencies[l]));L&&(f(v,[S.moduleId]),g[l]=_)}var q,E=[];for(r=0;r<v.length;r++)l=v[r],j[l]&&j[l].hot._selfAccepted&&E.push({module:l,errorHandler:j[l].hot._selfAccepted});h("dispose"),Object.keys(m).forEach(function(e){!1===m[e]&&function(e){delete installedChunks[e]}(e)});for(var A,C,P=v.slice();P.length>0;)if(l=P.pop(),s=j[l]){var T={},H=s.hot._disposeHandlers;for(o=0;o<H.length;o++)(t=H[o])(T);for(i[l]=T,s.hot.active=!1,delete j[l],delete b[l],o=0;o<s.children.length;o++){var Y=j[s.children[o]];Y&&((q=Y.parents.indexOf(l))>=0&&Y.parents.splice(q,1))}}for(l in b)if(Object.prototype.hasOwnProperty.call(b,l)&&(s=j[l]))for(C=b[l],o=0;o<C.length;o++)A=C[o],(q=s.children.indexOf(A))>=0&&s.children.splice(q,1);for(l in h("apply"),a=y,g)Object.prototype.hasOwnProperty.call(g,l)&&(e[l]=g[l]);var I=null;for(l in b)if(Object.prototype.hasOwnProperty.call(b,l)&&(s=j[l])){C=b[l];var $=[];for(r=0;r<C.length;r++)if(A=C[r],t=s.hot._acceptedDependencies[A]){if(-1!==$.indexOf(t))continue;$.push(t)}for(r=0;r<$.length;r++){t=$[r];try{t(C)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:C[r],error:e}),n.ignoreErrored||I||(I=e)}}}for(r=0;r<E.length;r++){var N=E[r];l=N.module,c=[l];try{x(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||I||(I=t),I||(I=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||I||(I=e)}}return I?(h("fail"),Promise.reject(I)):(h("idle"),new Promise(function(e){e(v)}))}var j={};function x(n){if(j[n])return j[n].exports;var r=j[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:D,apply:k,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:i[e]};return t=void 0,n}(n),parents:(s=c,c=[],s),children:[]};return e[n].call(r.exports,r,r.exports,l(n)),r.l=!0,r.exports}x.m=e,x.c=j,x.d=function(e,n,t){x.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},x.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},x.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(n,"a",n),n},x.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},x.p="",x.h=function(){return a},l("./src/index.js")(x.s="./src/index.js")}({"./src/bicalendar.js":
/*!***************************!*\
  !*** ./src/bicalendar.js ***!
  \***************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar biCalendar = function () {\n    function biCalendar(_ref) {\n        var el = _ref.el,\n            _ref$width = _ref.width,\n            width = _ref$width === undefined ? '300px' : _ref$width,\n            _ref$height = _ref.height,\n            height = _ref$height === undefined ? '350px' : _ref$height,\n            _ref$language = _ref.language,\n            language = _ref$language === undefined ? 'en' : _ref$language,\n            _ref$background = _ref.background,\n            background = _ref$background === undefined ? '#fff' : _ref$background,\n            _ref$todo = _ref.todo,\n            todo = _ref$todo === undefined ? true : _ref$todo,\n            _ref$color = _ref.color,\n            color = _ref$color === undefined ? '#000' : _ref$color;\n\n        _classCallCheck(this, biCalendar);\n\n        this.el = el;\n        this.container = document.querySelector(el);\n        this.layout = '<div class=\"bi-calendar\">\\n        <div class=\"bi-header\">\\n            <button>&lt;&lt;</button>\\n            <button>&lt;</button>\\n            <span></span>\\n            <button>&gt;</button>\\n            <button>&gt;&gt;</button>\\n        </div>\\n        <div class=\"bi-container\">\\n            <div class=\"bi-week\">\\n            <span>Su</span>\\n            <span>Mo</span>\\n            <span>Tu</span>\\n            <span>We</span>\\n            <span>Th</span>\\n            <span>Fr</span>\\n            <span>Sa</span>\\n            </div>\\n            <div class=\"bi-date\">\\n            </div>\\n        </div>\\n        <div class=\"bi-footer\">\\n            <button>Now</button>\\n            <button>Todo</button>\\n        </div>\\n        </div>';\n        this.dateLayOut = '';\n        this.todoLayOut = '<div class=\"bi-todo\"><textarea placeholder=\"todo...\"></textarea><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" t=\"1527965249412\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" p-id=\"3337\" width=\"20%\" height=\"20%\"><defs><style type=\"text/css\"></style></defs><path d=\"M510.107395 120.31318c-197.189058 0-357.623004 160.427806-357.623004 357.616864s160.434969 357.616864 357.623004 357.616864S867.724259 675.119101 867.724259 477.930043 707.296453 120.31318 510.107395 120.31318zM510.107395 788.743952c-171.384345 0-310.827211-139.429563-310.827211-310.813908s139.442866-310.813908 310.827211-310.813908 310.813908 139.429563 310.813908 310.813908S681.491741 788.743952 510.107395 788.743952zM316.535725 819.980373c-10.43363-7.600095-25.073048-5.328355-32.69975 5.119601l-71.967078 98.712209c-7.613398 10.446933-5.315052 25.086351 5.118578 32.69975 4.16588 3.03001 8.984628 4.492314 13.776771 4.492314 7.221472 0 14.338566-3.329838 18.921955-9.610892l71.967078-98.712209C329.268724 842.23319 326.970378 827.593771 316.535725 819.980373zM731.089345 825.099974c-7.626701-10.446933-22.265096-12.731976-32.69975-5.119601-10.43363 7.613398-12.731976 22.251793-5.119601 32.69975l71.967078 98.712209c4.583388 6.281053 11.700483 9.610892 18.921955 9.610892 4.792143 0 9.610892-1.462305 13.776771-4.492314 10.43363-7.613398 12.731976-22.251793 5.118578-32.69975L731.089345 825.099974zM184.637696 214.428697c12.719696-67.005067 72.411193-112.149243 132.886543-100.6964 12.69309 2.363837 24.955368-5.941316 27.358091-18.635429 2.402723-12.706393-5.941316-24.942065-18.635429-27.358091-86.019119-16.271592-170.078607 45.601594-187.590446 137.967258-2.408863 12.69309 5.929036 24.942065 18.628266 27.358091 1.475608 0.274246 2.937912 0.405229 4.387937 0.405229C172.694689 233.468332 182.509219 225.64618 184.637696 214.428697zM879.843274 205.705012C862.318132 113.339348 778.101055 51.531654 692.239526 67.737754c-12.69309 2.416026-21.038152 14.651698-18.635429 27.358091 2.402723 12.69309 14.691607 20.998243 27.358091 18.635429 60.462047-11.43954 120.18015 33.665751 132.886543 100.6964 2.128477 11.217483 11.949146 19.039635 22.970154 19.039635 1.450025 0 2.912329-0.130983 4.387937-0.405229C873.900935 230.647077 882.245997 218.398102 879.843274 205.705012zM688.414407 469.969745 525.321912 469.969745 525.321912 289.444205c0-12.928451-10.473539-23.400966-23.400966-23.400966-12.928451 0-23.400966 10.473539-23.400966 23.400966l0 203.927529c0 12.928451 10.473539 23.400966 23.400966 23.400966l186.493461 0c12.928451 0 23.400966-10.473539 23.400966-23.400966S701.342858 469.969745 688.414407 469.969745z\" p-id=\"3338\"></path></svg></div>';\n        this.currentYear = new Date().getFullYear();\n        this.currentMonth = new Date().getMonth() + 1;\n        this.language = language;\n        this.width = width;\n        this.height = height;\n        this.background = background;\n        this.color = color;\n        this.todo = todo;\n        this.init();\n    }\n\n    _createClass(biCalendar, [{\n        key: 'init',\n        value: function init() {\n            this.createLayout();\n            this.changeStyle();\n            this.bindEvent();\n            if (this.todo) {\n                this.todof();\n            }\n        }\n    }, {\n        key: 'createLayout',\n        value: function createLayout() {\n            this.container.innerHTML = this.layout;\n            if (!this.todo) {\n                this.container.querySelectorAll('.bi-footer button')[1].innerText = 'Close';\n            }\n            this.createDateLayout();\n            this.showMonth();\n        }\n    }, {\n        key: 'setDate',\n        value: function setDate(y, m) {\n            this.lastDate = new Date(y, m, 0).getDate();\n            this.lastDay = new Date(y, m, 0).getDay();\n            this.firstDate = new Date(y, m - 1, 1).getDate();\n            this.firstDay = new Date(y, m - 1, 1).getDay();\n            this.lastMonthLastDate = new Date(y, m + 1, 0).getDate();\n        }\n    }, {\n        key: 'createDateLayout',\n        value: function createDateLayout() {\n            var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getFullYear();\n            var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getMonth() + 1;\n\n            this.setDate(y, m);\n            var lastMonthLastDate = this.lastMonthLastDate - this.firstDay + 1;\n            //上个月\n            for (var i = 0; i < this.firstDay; i++) {\n                this.dateLayOut += '<span class=\"bi-date-other bi-last\">' + lastMonthLastDate + '</span>';\n                lastMonthLastDate++;\n            }\n            //本月\n            for (var _i = 0; _i < this.lastDate; _i++) {\n                if (this.currentYear === new Date().getFullYear() && this.currentMonth === new Date().getMonth() + 1 && _i + 1 === new Date().getDate()) {\n                    this.dateLayOut += '<span class=\"bi-date-today bi-date-recent\">' + (_i + 1) + '</span>';\n                } else {\n                    this.dateLayOut += '<span class=\"bi-date-recent\">' + (_i + 1) + '</span>';\n                }\n            }\n            //下个月\n            for (var _i2 = 0; _i2 < 6 - this.lastDay; _i2++) {\n                this.dateLayOut += '<span class=\"bi-date-other bi-next\">' + (_i2 + 1) + '</span>';\n            }\n            this.container.querySelector('.bi-date').innerHTML = this.dateLayOut;\n            this.dateLayOut = '';\n            this.dateToggle();\n            this.selectDate();\n        }\n    }, {\n        key: 'showMonth',\n        value: function showMonth() {\n            var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentYear;\n            var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentMonth;\n\n            if (this.language.toLowerCase() === 'cn') {\n                var cnMonth = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];\n                this.container.querySelector('.bi-header span').innerHTML = y + '\\u5E74' + cnMonth[m - 1] + '\\u6708';\n                var cnWeek = ['日', '一', '二', '三', '四', '五', '六'];\n                Array.from(this.container.querySelectorAll('.bi-week span')).forEach(function (e, i) {\n                    e.innerText = cnWeek[i];\n                });\n            } else {\n                var enMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n                this.container.querySelector('.bi-header span').innerHTML = enMonth[m - 1] + ' ' + y;\n            }\n        }\n    }, {\n        key: 'bindEvent',\n        value: function bindEvent() {\n            var _this = this;\n\n            this.ymToggle();\n            this.container.querySelectorAll('.bi-footer button')[0].addEventListener('click', function () {\n                _this.returnToday();\n            });\n            if (!this.todo) {\n                this.container.querySelectorAll('.bi-footer button')[1].addEventListener('click', function () {\n                    _this.close();\n                });\n            }\n        }\n    }, {\n        key: 'ymToggle',\n        value: function ymToggle() {\n            var _this2 = this;\n\n            var prevYear = this.container.querySelectorAll('.bi-header button')[0];\n            var prevMonth = this.container.querySelectorAll('.bi-header button')[1];\n            var nextMonth = this.container.querySelectorAll('.bi-header button')[2];\n            var nextYear = this.container.querySelectorAll('.bi-header button')[3];\n            var datePrevMonth = Array.from(this.container.querySelectorAll('.bi-last'));\n            prevYear.addEventListener('click', function () {\n                _this2.currentYear--;\n                _this2.createDateLayout(_this2.currentYear, _this2.currentMonth);\n                _this2.showMonth();\n            });\n            prevMonth.addEventListener('click', function () {\n                _this2.currentMonth--;\n                _this2.createDateLayout(_this2.currentYear, _this2.currentMonth);\n                _this2.changeMonth();\n                _this2.showMonth();\n            });\n            nextYear.addEventListener('click', function () {\n                _this2.currentYear++;\n                _this2.createDateLayout(_this2.currentYear, _this2.currentMonth);\n                _this2.showMonth();\n            });\n            nextMonth.addEventListener('click', function () {\n                _this2.currentMonth++;\n                _this2.createDateLayout(_this2.currentYear, _this2.currentMonth);\n                _this2.changeMonth();\n                _this2.showMonth();\n            });\n        }\n    }, {\n        key: 'dateToggle',\n        value: function dateToggle() {\n            var datePrevMonth = Array.from(this.container.querySelectorAll('.bi-last'));\n            var dateNextMonth = Array.from(this.container.querySelectorAll('.bi-next'));\n            var prevMonth = this.container.querySelectorAll('.bi-header button')[1];\n            var nextMonth = this.container.querySelectorAll('.bi-header button')[2];\n            datePrevMonth.forEach(function (e) {\n                e.addEventListener('click', function () {\n                    prevMonth.click();\n                });\n            });\n            dateNextMonth.forEach(function (e) {\n                e.addEventListener('click', function () {\n                    nextMonth.click();\n                });\n            });\n        }\n    }, {\n        key: 'changeMonth',\n        value: function changeMonth() {\n            if (this.currentMonth > 12) {\n                this.currentMonth = 1;\n                this.currentYear++;\n            } else if (this.currentMonth < 1) {\n                this.currentMonth = 12;\n                this.currentYear--;\n            }\n        }\n    }, {\n        key: 'returnToday',\n        value: function returnToday() {\n            this.currentYear = new Date().getFullYear();\n            this.currentMonth = new Date().getMonth() + 1;\n            this.showMonth();\n            this.createDateLayout();\n        }\n    }, {\n        key: 'selectDate',\n        value: function selectDate() {\n            var _this3 = this;\n\n            var recent = Array.from(this.container.querySelectorAll('.bi-date-recent'));\n            var active = void 0;\n            recent.forEach(function (e) {\n                if (e.classList.contains('bi-date-today')) {\n                    active = e;\n                    e.addEventListener('click', function () {});\n                } else {\n                    e.addEventListener('click', function () {\n                        e.classList.add('bi-date-today');\n                        if (active) {\n                            active.classList.remove('bi-date-today');\n                        }\n                        _this3.selectDate();\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'onDateSelected',\n        value: function onDateSelected() {\n            var _this4 = this;\n\n            return new Promise(function (reslove, reject) {\n                var recent = Array.from(_this4.container.querySelectorAll('.bi-date-recent'));\n                var dateSelected = '';\n                recent.forEach(function (e) {\n                    if (e.classList.contains('bi-date-today')) {\n                        dateSelected = e.innerText;\n                    }\n                });\n                var y = _this4.currentYear;\n                var m = _this4.currentMonth;\n                var d = dateSelected;\n                var obj = {\n                    year: '' + y,\n                    month: '' + m,\n                    date: '' + d\n                };\n                reslove(obj);\n            });\n        }\n    }, {\n        key: 'show',\n        value: function show() {\n            this.container.querySelector('.bi-calendar').style.display = 'flex';\n        }\n    }, {\n        key: 'close',\n        value: function close() {\n            this.container.querySelector('.bi-calendar').style.display = 'none';\n        }\n    }, {\n        key: 'changeStyle',\n        value: function changeStyle() {\n            if (this.width) {\n                this.container.querySelector('.bi-calendar').style.width = this.width;\n            }\n            if (this.height) {\n                this.container.querySelector('.bi-calendar').style.height = this.height;\n            }\n            if (this.background) {\n                this.container.querySelector('.bi-calendar').style.background = this.background;\n            }\n            if (this.color) {\n                this.container.querySelector('.bi-calendar').style.color = this.color;\n            }\n        }\n    }, {\n        key: 'todof',\n        value: function todof() {\n            var _this5 = this;\n\n            this.container.querySelectorAll('.bi-footer button')[1].addEventListener('click', function () {\n                _this5.onDateSelected().then(function (res) {\n                    var obj = {\n                        year: res.year,\n                        month: res.month,\n                        date: res.date,\n                        hour: null,\n                        minute: null,\n                        todo: null,\n                        done: false\n                        //todoLayout\n                    };_this5.container.querySelector('.bi-date').innerHTML = _this5.todoLayOut;\n                    _this5.container.querySelector('.bi-header span').innerHTML = '<input type=\"number\" class=\"bi-hour\" placeholder=\"...\" max=\"23\" min=\"0\">h <input type=\"number\" class=\"bi-min\" placeholder=\"...\">m';\n                    //显示localStorage\n                    if (localStorage.getItem('bi-' + _this5.el + '-' + obj.year + obj.month + obj.date)) {\n                        var returnObj = JSON.parse(localStorage.getItem('bi-' + _this5.el + '-' + obj.year + obj.month + obj.date));\n                        _this5.container.querySelectorAll('.bi-header input')[0].value = returnObj.hour;\n                        _this5.container.querySelectorAll('.bi-header input')[1].value = returnObj.minute;\n                        _this5.container.querySelector('.bi-todo textarea').value = returnObj.todo;\n                    }\n                    //判断时间格式\n                    var num = /^[0-9]*$/;\n                    _this5.container.querySelectorAll('.bi-header input')[0].addEventListener('blur', function () {\n                        if (_this5.container.querySelectorAll('.bi-header input')[0].value > 23) {\n                            _this5.container.querySelectorAll('.bi-header input')[0].value = 23;\n                        }\n                        if (!num.test(_this5.container.querySelectorAll('.bi-header input')[0].value)) {\n                            _this5.container.querySelectorAll('.bi-header input')[0].value = 0;\n                        }\n                    });\n                    _this5.container.querySelectorAll('.bi-header input')[1].addEventListener('blur', function () {\n                        if (_this5.container.querySelectorAll('.bi-header input')[1].value > 59) {\n                            _this5.container.querySelectorAll('.bi-header input')[1].value = 59;\n                        }\n                        if (!num.test(_this5.container.querySelectorAll('.bi-header input')[1].value)) {\n                            _this5.container.querySelectorAll('.bi-header input')[1].value = 0;\n                        }\n                    });\n                    //储存localStorage\n                    _this5.container.querySelector('.bi-todo textarea').addEventListener('blur', function () {\n                        obj.todo = _this5.container.querySelector('.bi-todo textarea').value;\n                        localStorage.setItem('bi-' + _this5.el + '-' + obj.year + obj.month + obj.date, JSON.stringify(obj));\n                    });\n                    _this5.container.querySelector('.bi-todo svg').addEventListener('click', function () {\n                        if (!_this5.container.querySelector('.bi-hour').value || !_this5.container.querySelector('.bi-min').value) {\n                            if (_this5.language.toLowerCase() === 'cn') {\n                                alert('时间不能为空!');\n                            } else {\n                                alert('The time input cannot be empty!');\n                                console.log(_this5.language.toLowerCase());\n                            }\n                        } else {\n                            obj.hour = _this5.container.querySelector('.bi-hour').value;\n                            obj.minute = _this5.container.querySelector('.bi-min').value;\n                            obj.todo = _this5.container.querySelector('.bi-todo textarea').value;\n                            localStorage.setItem('bi-' + _this5.el + '-' + obj.year + obj.month + obj.date, JSON.stringify(obj));\n                            alarmClock();\n                            if (_this5.language.toLowerCase() === 'cn') {\n                                alert('闹钟已经设置完毕!');\n                            } else {\n                                alert('The alarm has been set!');\n                            }\n                        }\n                    });\n                });\n            });\n            //执行闹钟\n            var alarmClock = function alarmClock() {\n                if (localStorage.getItem('bi-' + _this5.el + '-' + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate())) {\n                    var todayObj = JSON.parse(localStorage.getItem('bi-' + _this5.el + '-' + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate()));\n                    console.log(todayObj);\n                    var clockTime = todayObj.hour * 3600 + todayObj.minute * 60;\n                    var nowTime = new Date().getHours() * 3600 + new Date().getMinutes() * 60;\n                    if (!todayObj.done) {\n                        setTimeout(function () {\n                            alert('Alarm clock(' + todayObj.hour + ':' + todayObj.minute + '): \\n' + todayObj.todo + '\\n');\n                            todayObj.done = true;\n                            localStorage.setItem('bi-' + _this5.el + '-' + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate(), JSON.stringify(todayObj));\n                        }, (clockTime - nowTime) * 1000);\n                    }\n                }\n            };\n            alarmClock();\n        }\n    }]);\n\n    return biCalendar;\n}();\n\nexports.biCalendar = biCalendar;\n\n//# sourceURL=webpack:///./src/bicalendar.js?")},"./src/bicalendar.less":
/*!*****************************!*\
  !*** ./src/bicalendar.less ***!
  \*****************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/bicalendar.less?")},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(/*! ./bicalendar.less */ \"./src/bicalendar.less\");\n\nvar _bicalendar = __webpack_require__(/*! ./bicalendar.js */ \"./src/bicalendar.js\");\n\nif (true) {\n    module.hot.accept();\n}\n\nvar mycalendar1 = new _bicalendar.biCalendar({\n    el: '#mycalendar1',\n    language: 'en',\n    width: '100%',\n    height: '120vw',\n    background: 'rgb(196, 255, 212)'\n});\nmycalendar1.show();\n\nvar mycalendar2 = new _bicalendar.biCalendar({\n    el: '#mycalendar2',\n    language: 'cn'\n});\n\ndocument.querySelector('input').addEventListener('focus', function () {\n    mycalendar2.show();\n});\n\ndocument.querySelector('#t-submit').addEventListener('click', function () {\n    mycalendar2.onDateSelected().then(function (res) {\n        document.querySelector('#t-input').value = res.year + '\\u5E74' + res.month + '\\u6708' + res.date + '\\u65E5';\n    });\n    mycalendar2.close();\n});\n\nvar mycalendar3 = new _bicalendar.biCalendar({\n    el: '#mycalendar3',\n    width: '400px',\n    height: '500px',\n    background: 'rgba(255, 255, 255, .5)'\n}).show();\n\nvar mycalendar4 = new _bicalendar.biCalendar({\n    el: '#mycalendar4',\n    width: '230px',\n    height: '260px',\n    language: 'en',\n    todo: false,\n    color: '#fff',\n    background: '#000'\n}).show();\n\n//# sourceURL=webpack:///./src/index.js?")}});