let total = ["Hukum","Bhurja","Chidi","Etta","Jhandi","Pan"]
var fund = 100;
var mon,sts;    
var fundTxt = document.getElementById('funds');

funding();
function funding(){
fundTxt.innerHTML = fund;
if(fund <= 0){
    alert("Game Over");
    location.reload();
}
}
function Roll(){
var slted=0;
    var select = document.getElementById('choose');
    var select2 = document.getElementById('money');
    var value = select.options[select.selectedIndex].value;
    var money = select2.options[select2.selectedIndex].value;

    for(var i =1;i<=6;i++){
    var a = Math.floor(Math.random()*total.length);
    document.getElementById("d"+i).src = total[a].toLocaleLowerCase() +".png";
    if(value == total[a]){
        slted = slted + 1;
    }
    }
    console.log(slted)

    if( slted > 1){
     mon = slted*money;
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
