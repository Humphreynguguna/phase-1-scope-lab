var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName(){
    if (customerName){
        customerName = customerName.toUpperCase();
    }
}
function setBestCustomer() {
    window.bestCustomer = 'not bob';
}


function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavouriteCustomer = 'Humphrey';

function changeLeastFavoriteCustomer () {
    leastFavouriteCustomer = 'Mercy';
}

console.log(customerName)