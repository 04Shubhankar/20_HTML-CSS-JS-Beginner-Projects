function randnumgen(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

document.getElementById("genratorbtn").addEventListener('click',function(){
    var min = 1;
    var max = 100;
    var randnum = randnumgen(min , max);
    document.getElementById("result").textContent = randnum;



})
