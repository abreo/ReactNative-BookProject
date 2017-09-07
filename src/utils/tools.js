// 时间戳转化

const processTimestamp = function (value, rule = 0) {
  // @rule
  // 1 —— 2017- 01 - 03
  // 0 —— 2017- 01 - 03 10:13:48

  let _Date = +value
  if (String(value).length === 10) _Date = value * 1000

  let date = new Date(_Date)
  let Y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let H = date.getHours()
  let i = date.getMinutes()
  let s = date.getSeconds()
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  if (H < 10) {
    H = '0' + H
  }
  if (i < 10) {
    i = '0' + i
  }
  if (s < 10) {
    s = '0' + s
  }
  let t = Y + '-' + m + '-' + d + ' ' + H + ':' + i
  if (rule) t = Y + '-' + m + '-' + d
  return t
}



export {
  processTimestamp
}