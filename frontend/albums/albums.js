console.log('hi')
axios.get('http://localhost:3000/albums')
.then(albums => {
  let albumsData = albums.data

  for (let i = 0; i < albumsData.length; i+=2) {
    createAlbumRow(albumsData[i], albumsData[i+1])
  }
}).catch(err => {

 console.log(err)
})

function createAlbumRow(album1, album2) {
  if (album2) {
  let albumCols = [createAlbum(album1), createAlbum(album2)]
  let albumRow = document.createElement('div')
  albumRow.classList.add('row')
  albumRow.appendChild(albumCols[0])
  albumRow.appendChild(albumCols[1])
  document.querySelector('#listOfAlbums').appendChild(albumRow)
  }
  else {
    let albumCol = createAlbum(album1)
    let albumRow = document.createElement('div')
    albumRow.classList.add('row')
    albumRow.appendChild(albumCol)
    document.querySelector('#listOfAlbums').appendChild(albumRow)
  }
}


function createAlbum(album) {
  let albumDiv = document.createElement('div')
  let albumImage = document.createElement('img')
  let cardBody = document.createElement('div')
  let cardDedicatedTo = document.createElement('div')
  // let createAlbumButton = document.createElement("BUTTON")

  albumDiv.classList.add('card')
  albumImage.classList.add('card-img-top')
  cardBody.classList.add('card-body')
  cardDedicatedTo.classList.add('card-title')
  albumImage.src=`${album.image}`
  cardDedicatedTo.textContent = album.title
  // document.body.appendChild(createAlbumButton)
  albumDiv.appendChild(cardDedicatedTo)
  albumDiv.appendChild(albumImage)

  // make a bootstrap cols
  albumDiv.classList.add('cols-md-6')
  return albumDiv
}
