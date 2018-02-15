function createAlbum (event) {
  event.preventDefault()
  let title = document.querySelector('#title').value
  let image = document.querySelector('#image').value
  let dedicated_to = document.querySelector('#dedicated-to').value
  let user_id = document.querySelector('#user_id').value

  debugger
  let object = {
    title,
    image,
    dedicated_to,
    user_id
  }
  axios.post('http://localhost:3000/albums', object)
  .then(res => {
    debugger
    console.log(res);
  }).catch(err => console.log(err))
}

let form = document.querySelector('#createAlbum-form')
form.addEventListener('submit', createAlbum)
