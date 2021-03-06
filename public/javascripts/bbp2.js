function ModularExponential(Base,Exponent,Modulus){
    
    var result=1;
    while(Exponent>0){
        if((Exponent & 1) == 1) //if even
            result = (result*Base) % Modulus;
        Exponent >>= 1;
        Base = (Base * Base) % Modulus;
    }
	
    return result % Modulus;
}


function Summation(j,digit){
    
    var sumleft = 0;
    //first summation
    for(var i = 0 ;i <= digit; i++){
        var r = 8 * i + j;
        sumleft += ModularExponential(16,digit-i,r)/r;
        sumleft = sumleft % 1.0;
    }
    //second summation 
    //producing the trailing digits ,the more iterations performed better precision
    var sumright=0;
	var i = digit+1;
    while(true){ //till infinity
        
        var sumconverge = sumright + Math.pow(16,digit-i)/(8*i+j);
        //iterate untill sumright doesnot change
        if(sumright==sumconverge)
            break;
        else
            sumright=sumconverge;
        i++;
    }

	    return sumright+sumleft;
}

function GenerateDigit(digit){
    //document.body.innerHTML="Generation begins...";
    var sx = 4*Summation(1,digit);
    sx -= 2*Summation(4,digit);
    
    sx -= Summation(5,digit);
    sx -= Summation(6,digit);
    
    if(sx>0)
        sx -= parseInt(sx);
    if(sx<0)
        sx += (1+parseInt(-sx));
    
    sx *= Math.pow(16,14);
    var hex = sx.toString(16);

    while(hex.length < 14)
        hex = "0" + hex;
    
    return hex;
}
//document.body.innerHTML=GenerateDigit(9);
