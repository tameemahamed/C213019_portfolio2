
function temparatureConverter(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32)  / 1.8;
  var message =  fToCel.toFixed(2);
    console.log(message);
} 
temparatureConverter(50);
temparatureConverter(103);

function countZeros(binString){
    var cntZero=0;
    for(let i=0;i<binString.length;i++){
        if(binString[i]=='0') cntZero++;
        else if(binString[i]!='1') {
            cntZero=-1;
            break;
        } 
    }
    if(cntZero>=0){
        var message=cntZero;
        console.log(message);
    }
    else{
        var message="invalid";
        console.log(message);
    }
}
countZeros("10101");
countZeros("101012");