function daysremain(age){
    //90 yr days weeks month
    var days = (90*365)-(age*365);
    var weeks =(90*52)-(age*52);
    var months=(90*12)-(age*12);
    alert("You have remaining "+days+" days "+weeks+" weeks "+months+" Months")
}

daysremain(prompt("What is your current age?"));