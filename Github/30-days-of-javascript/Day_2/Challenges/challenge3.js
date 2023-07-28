//Challenge level3 
//1-Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth()+1).padStart(2,"0");
const day = String(now.getDate()).padStart(2,"0");
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2,"0");
const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log("Human-readable time format: ", formattedTime);