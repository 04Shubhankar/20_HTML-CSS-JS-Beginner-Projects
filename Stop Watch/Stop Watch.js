window.onload = function(){
  let sec = 0;
  let mili = 0;

  let interval;
  const addsec = document.querySelector(".sec");
  const addmili = document.querySelector(".mili");

  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");

  start.onclick = function(){
    clearInterval(interval);
    interval=setInterval(starttimer,1);



  }

  stop.onclick = function(){
    clearInterval(interval);
  }

  reset.onclick = function(){
    clearInterval(interval);
    sec = 0;
    mili = 0;
    addsec.innerHTML="00";
    addmili.innerHTML = "00";
  }

  function starttimer(){
    mili++;

    if(mili<10){
      addmili.innerHTML="0"+mili

    }

    else{
      addmili.innerHTML=mili
    }

    if(mili>999){
      sec++;
      addsec.innerHTML = sec<10 ? "0"+sec : sec;
      mili = 0;
      addmili.innerHTML = "00";

    }
  }
  





}