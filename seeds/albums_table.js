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
      },
      {
        id: 2,
        title: 'Mummy',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Judith_Fergin_ambassador.jpg/220px-Judith_Fergin_ambassador.jpg',
        dedicated_to: 'Judith Fergin',
        user_id: 1
      },
      {
        id: 3,
        title: 'Will',
        image: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/164030_10150360860535187_7279967_n.jpg?oh=aeb89e627ecf1d98a286f5dbd5cb7377&oe=5B25D4FA',
        dedicated_to: 'Will Fergin',
        user_id: 1
      }
    ])
  }).then(() => {
    return knex.raw(
      "SELECT setval('albums_id_seq', (SELECT MAX(id) FROM albums));"
    )
  })
}
