// the switch statement is a alternative option to writing a complicated 'if else' statement, when all we want to do is compare one value to multiple different options.

// in this example, we have a weekday variable, and different activities that we do on each week day.
// -------------------------


const day = 'tuesday'; // here, we are hard coding the value of this variable. But in an actual program, this value(data) would be taken from user input.

/*
switch (day) {
    case 'monday': // day === 'monday'...strict comparison
        console.log('Plan course structure');
        console.log('Go to the coding meetup');
        break;
    case 'tuesday': 
        console.log('Prepare theory videos');
        break;
    case 'wednesday': 
    case 'thursday':
        console.log('write code examples');
        break;
    
    case 'friday': // day === 'monday'
        console.log('Record videos');
        break;
    case 'saturday': 
    case 'sunday': 
        console.log('Enjoy the weekend!');
        break;
    
    default:
        console.log('Not a valid day!');
}

*/

// write the above Switch Statement as an 'if else' statement.

if (day === 'monday') {

} else if (day === 'tuesday') {

} else if ( day === 'wednesday' || day === 'thursday') {

} else if (day === 'friday') {

} else if (day === 'saturday' || day === 'sunday')  {

} else {
    console.log('Not a valid day!');
}