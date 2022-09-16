
const form = document.getElementById('checkout');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert('Thank you. The form information has been received');
    let submitResponse = {
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="name"]').value,
        street: form.querySelector('input[name="street"]').value,
        city: form.querySelector('input[name="city"]').value,
        state: form.querySelector('select[name="state"]').value,
        zip: form.querySelector('input[name="zip"]').value,
        firstTimeAdobpter: form.querySelector('input[name="adopter"]').value,
        pickupLocation:form.querySelector('select[name="location"]').value
    }
    console.log(submitResponse);
});







