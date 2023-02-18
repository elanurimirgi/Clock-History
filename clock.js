let fullname = prompt("adınızı giriniz: ");
let myname = document.querySelector("#myName");
myname.innerHTML = `${fullname[0].toUpperCase()}${fullname.slice(1)}`


let clock = document.querySelector("#myClock");
let gün = ["PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ", "PAZAR"];
function whatTime(){
let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();
let day = time.getDay()-1;

clock.innerHTML = `${hour}:${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}, ${gün[day]}`
}
setInterval(whatTime, 100);
