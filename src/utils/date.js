function formatDate(date) {
  const fullDate = new Date(date)
  const yyyy = fullDate.getFullYear()
  let mm = fullDate.getMonth() + 1 // Months start at 0!
  let dd = fullDate.getDate()

  if (dd < 10) dd = "0" + dd
  if (mm < 10) mm = "0" + mm

  const today = dd + "/" + mm + "/" + yyyy
  return today
}

function convertToDate(dateString) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  let d = dateString.split("/")
  let date = new Date(d[2] + "/" + d[1] + "/" + d[0])
  return date
}

export {formatDate, convertToDate}
