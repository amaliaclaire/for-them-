
exports.seed = (knex) => {
  return knex('users').del()
  .then(() => {
    return knex('users').insert([
      {
        id: 1,
        name: 'Amalia',
        avatar: 'https://uploads.teamtreehouse.com/production/profile-photos/6999252/thumb_12301652_10156317796870268_5315791257563876185_n.jpg',
        album_id: 1,
      }
    ])
  }).then(() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
    )
  })
}
