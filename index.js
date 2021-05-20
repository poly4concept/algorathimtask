//Task1 convertFahrToCelsius
const convertFahrToCelsius = (val) => {
    var celsius = parseFloat(val);
    var farh = (celsius - 32) * 5 / 9;
    var result = farh.toFixed(4);

    if (Array.isArray(val)) {
        message = `${JSON.stringify(val)} is not a valid number but a/an array.`
    } else if( typeof val === 'object' && val !== null ){
        message = `${JSON.stringify(val)} is not a valid number but a/an object.`
    } else if( typeof val === 'boolean' ) {
        message = `${val} is not a valid number but a boolean.`
    } else {
        var message = result;
    }

    console.log(message);
    return message;
}

convertFahrToCelsius("0");
convertFahrToCelsius(0);
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});
convertFahrToCelsius(true);



//Task2 checkYuGiOh

const stringify = (factor)=>{
    if(factor===2){
        return 'yu';
    }
    else if(factor===3){
        return 'gi';
    }
    else{
        return 'oh';
    }
}

const factored = (number)=>{
    const factors = [2,3,5];
    let factorOf2or3or5 = false;
    let convertedString = "";
    factors.forEach((factor)=>{
         if(number%factor === 0 && convertedString ===""){
            factorOf2or3or5 = true;
            convertedString = convertedString.concat(stringify(factor));
         }
         else if(number%factor === 0){
            factorOf2or3or5 = true;
            convertedString = convertedString.concat('-',stringify(factor));
         }
    })
    return factorOf2or3or5 ? convertedString:number;
}

const checkYuGiOh = (n)=>{
    let yuGiOh = [];
    const count = Number(n); 

    if(!isNaN(count) && typeof n !=="boolean"){
        for(let i=1;i<=count;i++){
            yuGiOh.push(factored(i));
        }
    }
    else{
        yuGiOh = `invalid parameter: ${JSON.stringify(n)}`;
    }
    console.log(yuGiOh);
    return yuGiOh;
}
checkYuGiOh(10);
checkYuGiOh(5);
checkYuGiOh("fizzbuzz is meh");