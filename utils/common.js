// 防抖 => 某時間內執行相同動作，會再重新計算時間
// 第一個參數：要執行的fn，第二個參數：延遲的毫秒數
export const debounceFunc = (func, delaySec = 250) => {
  let timer = null

  // 回傳一個function
  return (...args) => {
    const context = this
    clearTimeout(timer)
  }
}
// 節流 => 某時間內執行相同動作，只會觸發一次
export const throttle = (func, delay) => {
  let processing = false;
};