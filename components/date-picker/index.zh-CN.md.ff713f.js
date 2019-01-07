(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1431:function(t,e){t.exports={content:["section",["p","输入或选择日期的控件。"],["h2","何时使用"],["p","当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。"]],meta:{category:"Components",type:"数据录入",title:"DatePicker",subtitle:"日期选择框",filename:"components/date-picker/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","日期类组件包括以下四种形式。"],["ul",["li",["p","DatePicker"]],["li",["p","MonthPicker"]],["li",["p","RangePicker"]],["li",["p","WeekPicker"]]],["h3","国际化配置"],["p","默认配置为 en-US，如果你需要设置其他语言，推荐在入口处使用我们提供的国际化组件,详见：",["a",{title:null,href:"http://ant.design/components/locale-provider-cn/"},"LocaleProvider国际化"],"。"],["p","如有特殊需求（仅修改单一组件的语言），请使用 locale 参数，参考：",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"默认配置"],"。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">\'antd/lib/date-picker/locale/zh_CN\'</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","import locale from 'antd/lib/date-picker/locale/zh_CN';\n\n<DatePicker locale={locale} />"]],["p",["strong","注意："],"DatePicker、MonthPicker、RangePicker、WeekPicker 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2015-01-01\'</span><span class="token punctuation">,</span> <span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale\nimport moment from 'moment';\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />"]],["h3","共同的 API"],["p","以下 API 为 DatePicker、MonthPicker、RangePicker, WeekPicker 共享的 API。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","allowClear"],["td","是否显示清除按钮"],["td","boolean"],["td","true"]],["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"]],["tr",["td","className"],["td","选择器 className"],["td","string"],["td","''"]],["tr",["td","dateRender"],["td","自定义日期单元格的内容"],["td","function(currentDate: moment, today: moment) => React.ReactNode"],["td","-"]],["tr",["td","disabled"],["td","禁用"],["td","boolean"],["td","false"]],["tr",["td","disabledDate"],["td","不可选择的日期"],["td","(currentDate: moment) => boolean"],["td","无"]],["tr",["td","dropdownClassName"],["td","额外的弹出日历 className"],["td","string"],["td","-"]],["tr",["td","getCalendarContainer"],["td","定义浮层的容器，默认为 body 上新建 div"],["td","function(trigger)"],["td","无"]],["tr",["td","locale"],["td","国际化配置"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"默认配置"]]],["tr",["td","open"],["td","控制弹层是否展开"],["td","boolean"],["td","-"]],["tr",["td","placeholder"],["td","输入框提示文字"],["td","string","|","RangePicker","[","]"],["td","-"]],["tr",["td","popupStyle"],["td","额外的弹出日历样式"],["td","object"],["td","{}"]],["tr",["td","size"],["td","输入框大小，",["code","large"]," 高度为 40px，",["code","small"]," 为 24px，默认是 32px"],["td","string"],["td","无"]],["tr",["td","suffixIcon"],["td","自定义的选择框后缀图标"],["td","ReactNode"],["td","-"]],["tr",["td","style"],["td","自定义输入框样式"],["td","object"],["td","{}"]],["tr",["td","onOpenChange"],["td","弹出日历和关闭日历的回调"],["td","function(status)"],["td","无"]],["tr",["td","onPanelChange"],["td","日历面板切换的回调"],["td","function(value, mode)"],["td","-"]]]],["h3","共同的方法"],["table",["thead",["tr",["th","名称"],["th","描述"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"]],["tr",["td","focus()"],["td","获取焦点"]]]],["h3","DatePicker"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","defaultValue"],["td","默认日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","defaultPickerValue"],["td","默认面板日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","disabledTime"],["td","不可选择的时间"],["td","function(date)"],["td","无"]],["tr",["td","format"],["td","设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string ","|"," string[]"],["td",'"YYYY-MM-DD"']],["tr",["td","mode"],["td","日期面板的状态"],["td",["code","time|date|month|year"]],["td","'date'"]],["tr",["td","renderExtraFooter"],["td","在面板中添加额外的页脚"],["td","(mode) => React.ReactNode"],["td","-"]],["tr",["td","showTime"],["td","增加时间选择功能"],["td","Object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]]],["tr",["td","showTime.defaultValue"],["td","设置用户选择日期时默认的时分秒，",["a",{title:null,href:"#components-date-picker-demo-disabled-date"},"例子"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","moment()"]],["tr",["td","showToday"],["td","是否展示“今天”按钮"],["td","boolean"],["td","true"]],["tr",["td","value"],["td","日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","onChange"],["td","时间发生变化的回调"],["td","function(date: moment, dateString: string)"],["td","无"]],["tr",["td","onOk"],["td","点击确定按钮的回调"],["td","function()"],["td","-"]],["tr",["td","onPanelChange"],["td","日期面板变化时的回调"],["td","function(value, mode)"],["td","-"]]]],["h3","MonthPicker"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","defaultValue"],["td","默认日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","defaultPickerValue"],["td","默认面板日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","format"],["td","展示的日期格式，配置参考 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-MM"']],["tr",["td","monthCellContentRender"],["td","自定义的月份内容渲染方法"],["td","function(date, locale): ReactNode"],["td","-"]],["tr",["td","renderExtraFooter"],["td","在面板中添加额外的页脚"],["td","() => React.ReactNode"],["td","-"]],["tr",["td","value"],["td","日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","onChange"],["td","时间发生变化的回调，发生在用户选择时间时"],["td","function(date: moment, dateString: string)"],["td","-"]]]],["h3","WeekPicker"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","defaultValue"],["td","默认日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","defaultPickerValue"],["td","默认面板日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","format"],["td","展示的日期格式，配置参考 ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","string"],["td",'"YYYY-wo"']],["tr",["td","value"],["td","日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","onChange"],["td","时间发生变化的回调，发生在用户选择时间时"],["td","function(date: moment, dateString: string)"],["td","-"]],["tr",["td","renderExtraFooter"],["td","在面板中添加额外的页脚"],["td","(mode) => React.ReactNode"],["td","-"]]]],["h3","RangePicker"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","defaultValue"],["td","默认日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","无"]],["tr",["td","defaultPickerValue"],["td","默认面板日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","无"]],["tr",["td","disabledTime"],["td","不可选择的时间"],["td","function(dates: ","[","moment, moment","]",", partial: ",["code","'start'|'end'"],")"],["td","无"]],["tr",["td","format"],["td","展示的日期格式"],["td","string"],["td",'"YYYY-MM-DD HH:mm:ss"']],["tr",["td","ranges      "],["td","预设时间范围快捷选择"],["td","{ ","[","range: string]: ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","] } ","|"," { ","[","range: string]: () => ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","] }"],["td","无"]],["tr",["td","renderExtraFooter"],["td","在面板中添加额外的页脚"],["td","() => React.ReactNode"],["td","-"]],["tr",["td","showTime"],["td","增加时间选择功能"],["td","Object","|","boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]]],["tr",["td","showTime.defaultValue"],["td","设置用户选择日期时默认的时分秒，",["a",{title:null,href:"#components-date-picker-demo-disabled-date"},"例子"]],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","[","moment(), moment()]"]],["tr",["td","value"],["td","日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","]"],["td","无"]],["tr",["td","onCalendarChange"],["td","待选日期发生变化的回调"],["td","function(dates: ","[","moment, moment","]",", dateStrings: ","[","string, string","]",")"],["td","无"]],["tr",["td","onChange"],["td","日期范围发生变化的回调"],["td","function(dates: ","[","moment, moment","]",", dateStrings: ","[","string, string","]",")"],["td","无"]],["tr",["td","onOk"],["td","点击确定按钮的回调"],["td","function(dates: ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"[","])"],["td","-"]]]],["style","\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"]]}}}]);