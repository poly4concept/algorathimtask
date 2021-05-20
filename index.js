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

