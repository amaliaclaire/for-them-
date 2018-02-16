function updateAlbum (event) {
  console.log(event)
  event.preventDefault()
  let title = document.querySelector('#title').value
  let image = document.querySelector('#image').value
  let dedicated_to = document.querySelector('#dedicated-to').value
  let user_id = document.querySelector('#user_id').value


  let object = {
    title,
    image,
    dedicated_to,
    user_id
  }
  axios.put('http://localhost:3000/albums', object)
  .then(res => {
    console.log(res);
  }).catch(err => console.log(err))
}

let form = document.querySelector('#updateAlbum-form')
if (form) {
  form.addEventListener('submit', updateAlbum)
}
