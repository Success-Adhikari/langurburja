let total = ["Hukum","Bhurja","Chidi","Etta","Jhandi","Pan"]

function reset(){
    for(var i =0;i<6;i++){
        document.getElementById(total[i]).innerText = "";
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
    var mon = abcd.innerText.length*money;
    if (value == "Select Where to Try Luck"){
        
        alert("First Choose Card and Money");
    }
    document.getElementById('gain').innerText = mon - money;
    document.getElementById('loss').innerText = money - mon;


}