axios.get('http://localhost:3000/albums')
.then(albums => {
  let albumsData = albums.data
  // console.log(albumsData);

  albumsData.forEach(album => {
    let dataElement = document.createElement('div')
    dataElement.textContent = `Type: ${album.title} ${album.image} ${album.dedicated_to}`
    document.querySelector('#listOfAlbums').appendChild(dataElement)
    console.log(album);
  })
}).catch(err => console.log(err))
