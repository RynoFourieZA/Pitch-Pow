let now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

let dateArray = [year, month, day];
let dateString = dateArray.join();
const date = dateString.replace(",", "-")
.replace(",", "-");

module.exports = date;
