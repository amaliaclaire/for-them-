axios.get('http://localhost:3000/contents')
.then(contents => {
  let contentsData = contents.data

  contentsData.forEach(content => {
    let contentElement = document.createElement('div')
    contentElement.textContent = `Type: ${content.title} ${content.content_type} ${content.image} ${content.category}`
    document.querySelector('#listOfContents').appendChild(contentElement)
  })
}).catch(err => console.log(err))
