export default (num) => {
  if (num) {
    return "đ" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  } else {
    return
  }
}
