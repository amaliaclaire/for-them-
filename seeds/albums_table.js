exports.seed = (knex) => {
  return knex('albums').del()
  .then(() => {
    return knex('albums').insert([
      {
        id: 1,
        title: 'Daddy',
        image: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22405999_10159678718185268_6736268410046675645_n.jpg?oh=7044b5c3b5d07d37fd791d813c50b809&oe=5B084DCF',
        dedicated_to: 'Greg Fergin',
        user_id: 1
      }
    ])
  })
}
