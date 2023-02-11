//declared fahrenheit to the third value in our node.js environment.i.e. node index.js process.argv[2](this is the third value.)
const fahrenheit = process.argv[2];
//our celsius is dependent on our fahrenheit value. 
const celsius = 5/9 * (fahrenheit - 32);
//kelvin is the sum of celsius + 273;
const  kelvin = celsius + 273;

console.log(`The temperature today is ${fahrenheit} degree fahrenheit, ${celsius} degree celsius and ${kelvin} in kelvin.`)

// we can also take another approach using helper functions

/*let fahrenheit2;

function celsius2(fahrenheit2) { 
   return 5/9 * (fahrenheit2 - 32);
};

function kelvin2(number) { 
    return number + 273;
};

fahrenheit2 = process.argv[2];
let celsius3 = celsius2(fahrenheit2);
let kelvin3 = kelvin2(celsius2);

console.log("Today's temperature is " + fahrenheit2 +" degrees fahrenheit, "+ celsius3 + "degrees celsius and " + kelvin3 + "k in kelvin.");