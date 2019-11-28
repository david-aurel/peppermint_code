//Copy the following object into your code:

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

// Then create a new empty object b and use a for..in loop to iterate over all of a's properties. Give b properties whose names are the values from a and whose values are the property names from a. The result should be an object that looks like this:
//
// {
//    Germany: 'Berlin',
//    France: 'Paris',
//    USA: 'New York'
// }

var b = {};

for (var i in a) {
    //accessing the value of a through a[i] and assigning it to the key of b
    //accessing the key of a through i and assigning it to the value of b
    //I have no idea why i gives me the keys but for some reason it does?!
    b[a[i]] = i;
}

// logging the result for testing
console.log(b);
