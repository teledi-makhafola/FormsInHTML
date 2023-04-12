function getValues(){
let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;
let email = document.getElementById('email').value;
let address = document.getElementById('address').value;

console.log(`
first name: ${fname}\n
last name: ${lname}\n
email: ${email}\n
address: ${address}
`);
}
