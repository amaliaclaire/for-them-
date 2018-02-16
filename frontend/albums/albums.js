console.log('hi')
axios.get('http://localhost:3000/albums')
.then(albums => {
  let albumsData = albums.data

  for (let i = 0; i < albumsData.length; i+=2) {
    renderAlbumRow(albumsData[i], albumsData[i+1])
  }
}).catch(err => {

 console.log(err)
})

function renderAlbumRow(album1, album2) {
  if (album2) {
  let albumCols = [renderAlbum(album1), renderAlbum(album2)]
  let albumRow = document.createElement('div')
  albumRow.classList.add('row')
  albumRow.appendChild(albumCols[0])
  albumRow.appendChild(albumCols[1])
  document.querySelector('#listOfAlbums').appendChild(albumRow)
  }
  else {
    let albumCol = renderAlbum(album1)
    let albumRow = document.createElement('div')
    albumRow.classList.add('row')
    albumRow.appendChild(albumCol)
    document.querySelector('#listOfAlbums').appendChild(albumRow)
  }
}

function renderAlbum(album) {
  let albumDiv = document.createElement('div')
  let albumImage = document.createElement('img')
  let cardBody = document.createElement('div')
  let cardDedicatedTo = document.createElement('div')

  // delete button
  let deleteButton = document.createElement('button') // new
  deleteButton.onclick = function (e) {
    deleteAlbum(album)
  }

  // update button
  let updateButton = document.createElement('button') //new
  updateButton.onclick = function (e){
    //console.log('here')
    //updateAlbum(album)
    window.location.replace('/albums/updateAlbums.html')
  }
  deleteButton.innerHTML = 'Delete' //new
  updateButton.innerHTML = 'Update' //new
  console.log('button', deleteButton);
  // let renderAlbumButton = document.createElement("BUTTON")

  albumDiv.classList.add('card')
  albumImage.classList.add('card-img-top')
  cardBody.classList.add('card-body')
  cardDedicatedTo.classList.add('card-title')
  deleteButton.classList.add('delete-button') // new
  updateButton.classList.add('update-button') // new
  albumImage.src=`${album.image}`
  cardDedicatedTo.textContent = album.title

  // document.body.appendChild(renderAlbumButton)
  albumDiv.appendChild(cardDedicatedTo)
  albumDiv.appendChild(albumImage)
  albumDiv.appendChild(deleteButton) // new
  albumDiv.appendChild(updateButton)
  // make a bootstrap cols
  albumDiv.classList.add('cols-md-6')
  return albumDiv
}

// delete axios

function deleteAlbum (album) {
  let id = album.id
  console.log('album has been deleted', album);
  axios.delete(`http://localhost:3000/albums/${id}`)
  .then(album => {
  }).catch(err => console.log(err));
}
