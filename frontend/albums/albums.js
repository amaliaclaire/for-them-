axios.get('http://localhost:3000/albums')
.then(albums => {
  let albumsData = albums.data
  // console.log(albumsData);

  albumsData.forEach(album => {
    createAlbum(album)

    // let dataElement = document.createElement('div')
    // dataElement.textContent = `Type: ${album.title} ${album.image} ${album.dedicated_to}`
    // document.querySelector('#listOfAlbums').appendChild(dataElement)
    // console.log(album);
  })
}).catch(err => console.log(err))


function createAlbum (album) {
  let albumDiv = document.createElement('div')
  let albumImage = document.createElement('img')
  let cardBody = document.createElement('div')
  let cardDedicatedTo = document.createElement('div')
  albumDiv.classList.add('card')
  albumImage.classList.add('card-img-top')
  cardBody.classList.add('card-body')
  cardDedicatedTo.classList.add('card-title')

  albumImage.src=`${album.image}`
  cardDedicatedTo.textContent = album.title

  albumDiv.appendChild(albumImage)
  albumDiv.appendChild(cardDedicatedTo)
  document.querySelector('#listOfAlbums').appendChild(albumDiv)
}
