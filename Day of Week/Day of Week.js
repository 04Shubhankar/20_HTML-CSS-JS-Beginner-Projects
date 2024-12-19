let date = new Date();
let daynum = date.getDay();
let dayis;
let quote;


switch(daynum){
    case 0:
        dayis = "Sunday";
        quote= "Relax";
        break;
    
    case 1:
        dayis = "Monday";
        quote= "Monday is The day to start ";
        break;
    
        
    case 2:
        dayis = "Tuesday";
        quote= "Continue work of Monday";
        break;
    
    
    case 3:
        dayis = "Wednesday";
        quote= "Mondays work is incomplete";
        break;

    
    case 4:
        dayis = "Thursday";
        quote= "Work is almost Done";
        break;


    case 5:
        dayis = "Friday";
        quote= "1 days to sunday";
        break;

    
    case 6:
        dayis = "Saturday";
        quote= "Systmm";
        break;
}   

let spanofweekday = document.getElementById("weekday");
spanofweekday.innerHTML=`${dayis}`;

let quoteofday = document.getElementById("quote");
quoteofday.innerHTML=`${quote}`;