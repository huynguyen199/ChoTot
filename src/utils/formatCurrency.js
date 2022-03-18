export default (price) => {
  var x = price
  x = x.toLocaleString("en-US", {style: "currency", currency: "VND"})
  return x
}
