// Live Destination Search
document.addEventListener("DOMContentLoaded", function(){
let input = document.getElementById("searchInput");
if(input){
input.addEventListener("keyup", function(){
let filter = input.value.toLowerCase();
let items = document.getElementsByClassName("destination-item");

for(let i=0; i<items.length; i++){
let text = items[i].innerText.toLowerCase();
items[i].style.display = text.includes(filter) ? "" : "none";
}
});
}
});

// Booking Alert
let bookingForm = document.getElementById("bookingForm");
if(bookingForm){
bookingForm.addEventListener("submit", function(e){
e.preventDefault();
alert("🎉 Booking Confirmed! Check payment page 💳");
});
}

// Payment Demo
let PaymentForm = document.getElementById("paymentForm");
if(paymentForm){
paymentForm.addEventListener("submit", function(e){
e.preventDefault();
alert("✅ Payment Successful! Happy Journey 🌸✈️");
});
}
// Payment Success Modal
let paymentForm = document.getElementById("paymentForm");

if(paymentForm){
    paymentForm.addEventListener("submit", function(e){
        e.preventDefault();
        let modal = new bootstrap.Modal(document.getElementById("successModal"));
        modal.show();
    });
}