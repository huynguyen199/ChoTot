export default (price) => {
  var x = price
  if (x) {
    return (x = x.toLocaleString("en-US", {style: "currency", currency: "VND"}))
  } else {
    return ""
  }
}
