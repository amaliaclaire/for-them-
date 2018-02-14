axios.get('http://localhost:3000/forThem')

.then(users => {
  let usersData = users.data

  usersData.forEach(user => {
    let userElement = document.createElement('div')
    userElement.textContent = `Type: ${user.name} ${user.avatar}`
    document.querySelector('#listOfUsers').appendChild(userElement)
    console.log(user);
  })
}).catch(err => console.log(err))
