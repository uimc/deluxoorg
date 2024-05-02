const scriptURL = 'https://script.google.com/macros/s/AKfycbzKFoAIUWIOGJPl9CuUD3Ac_gQUnjzHywF-ugpbb1WjZLWLbgYFEz0q3xydy795tREiNg/exec'

const form = document.forms['addForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})