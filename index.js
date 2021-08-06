// 匹配整数或者浮点数(浮点数限制为2)
const reg = /\d+(\.{1}\d{1,2}){0,1}/ // 能够匹配的数据  22.22   22  213421.23
const number = 'asdasd..das2232.22sdadas.dsa231.21'
console.log((number.match(reg))[0]) // 取出的匹配的值2232.22