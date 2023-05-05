const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const second = 1000,minute = 60*second,hour = 60*minute,day = 24*hour;
const dayEle = document.getElementById("time1");
const hourEle = document.getElementById("time2");
const minuteEle = document.getElementById("time3");
const secondEle = document.getElementById("time4");
const con = document.querySelector(".con");
const setTime = ()=>{
    setInterval(()=>{
  const dateString = inp.value;
  const timer = new Date(dateString).getTime();
  const today = new Date().getTime();
  const difference = timer - today;
 if(difference>=0){
    const box = document.querySelector(".box");
    box.style.display="flex";
    const boxer = document.getElementById("box");
    boxer.style.display="none";
    const newday = Math.floor(difference/day);
    const newhour = Math.floor((difference%day)/hour);
    const newminute = Math.floor((difference%hour)/minute);
    const newsecond = Math.floor((difference%minute)/second);
    dayEle.innerHTML=newday>9?newday:("0"+newday);
    hourEle.innerHTML=newhour>9?newhour:("0"+newhour);
    minuteEle.innerHTML=newminute>9?newminute:("0"+newminute);
    secondEle.innerHTML=newsecond>9?newsecond:("0"+newsecond);
 }
 else{
    const box = document.querySelector(".box");
    box.style.display="none";
    const boxer = document.getElementById("box");
    boxer.style.display="flex";
    setTime();
 }
    },100)}