const month = document.getElementById("month-name");
const dayname = document.getElementById("day-name");
const dayNum = document.getElementById("day");
const year = document.getElementById("year");

const date = new Date();
const month_ = date.getMonth();

month.innerText = date.toLocaleString("en",{
    month : "long",
});

dayname.innerText = date.toLocaleString("en",{
    weekday: "long",
});

dayNum.innerText = date.getDate();

year.innerText = date.getFullYear();