let total = ["Hukum","Bhurja","Chidi","Etta","Jhandi","Pan"]
var fund = 100;
var mon,sts;    
var fundTxt = document.getElementById('funds');
function reset(){
    for(var i =0;i<6;i++){
        document.getElementById(total[i]).innerText = "";
        }  
}
funding();
function funding(){
fundTxt.innerHTML = fund;
if(fund <= 0){
    alert("Game Over");
    location.reload();
}
}
function Roll(){
    reset();
    for(var i =0;i<6;i++){
    var a = total[Math.floor(Math.random()*total.length)]
    document.getElementById(a).innerText += "*";
    }
    var select = document.getElementById('choose');
    var select2 = document.getElementById('money');
    var value = select.options[select.selectedIndex].value;
    var money = select2.options[select2.selectedIndex].value;
    var abcd = document.getElementById(value);

    if(abcd.innerText.length > 1){
     mon = abcd.innerText.length*money;
    }else{
        mon = 0
    }
    if(mon>money){
        sts = "+$"+(mon-money);
    }else{
    sts = "-$"+(money-mon);
    }
    fund = fund + (mon-money);
funding();
    document.getElementById('gain').innerHTML = sts;
}
