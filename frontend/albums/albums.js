console.log('hi')
axios.get('http://localhost:3000/albums')
.then(albums => {
  debugger
  let albumsData = albums.data
  // console.log(albumsData);
  /*
  albumsData.forEach(album => {
    createAlbum(album)
  })*/
  for (let i = 0; i < albumsData.length; i+=2) {
    createAlbumRow(albumsData[i], albumsData[i+1])
  }
}).catch(err => {
  debugger
 console.log(err)
})

/*
function createAlbumRow(album1, album2) {
  let albumRow = document.createElement('div')

  let albumDiv1 = document.createElement('div')
  let albumDiv2 = document.createElement('div')

  let albumImage1 = document.createElement('img')
  let albumImage2 = document.createElement('img')

  let cardBody1 = document.createElement('div')
  let cardDedicatedTo1 = document.createElement('div')
  let cardBody2 = document.createElement('div')
  let cardDedicatedTo2 = document.createElement('div')


  // let createAlbumButton = document.createElement("BUTTON")
  // setup rows/cols
  albumRow.classList.add('row')
  albumDiv1.classList.add('cols-md-6')
  albumDiv2.classList.add('cols-md-6')




  // append cols to row
  albumRow.appendChild(albumDiv1)
  albumRow.appendChild(albumDiv2)
  // append row to dom
  document.querySelector('#listOfAlbums').appendChild(albumRow)

}
*/

function createAlbumRow(album1, album2) {
  let albumCols = [createAlbum(album1), createAlbum(album2)]
  let albumRow = document.createElement('div')
  albumRow.classList.add('row')
  albumRow.appendChild(albumCols[0])
  albumRow.appendChild(albumCols[1])
  debugger
  document.querySelector('#listOfAlbums').appendChild(albumRow)
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

/*
function createAlbum (album) {
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
  document.querySelector('#listOfAlbums').appendChild(albumDiv)
}*/
