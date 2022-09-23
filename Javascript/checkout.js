// JQUERY

const form = $('#checkout').on('submit', function(e) {
    e.preventDefault();
    alert('Thank you. The form information has been received');
    const submitResponse = {
        name: this.querySelector('input[name="name"]').value,
        email: this.querySelector('input[name="name"]').value,
        street: this.querySelector('input[name="street"]').value,
        city: this.querySelector('input[name="city"]').value,
        state: this.querySelector('select[name="state"]').value,
        zip: this.querySelector('input[name="zip"]').value,
        firstTimeAdobpter: this.querySelector('input[name="adopter"]').value,
        pickupLocation: this.querySelector('select[name="location"]').value
    }
    console.log(submitResponse);
});

// Vanilla JS

// const form = document.getElementById('checkout');

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert('Thank you. The form information has been received');
//     const submitResponse = {
//         name: form.querySelector('input[name="name"]').value,
//         email: form.querySelector('input[name="name"]').value,
//         street: form.querySelector('input[name="street"]').value,
//         city: form.querySelector('input[name="city"]').value,
//         state: form.querySelector('select[name="state"]').value,
//         zip: form.querySelector('input[name="zip"]').value,
//         firstTimeAdobpter: form.querySelector('input[name="adopter"]').value,
//         pickupLocation:form.querySelector('select[name="location"]').value
//     }
//     console.log(submitResponse);
// });







