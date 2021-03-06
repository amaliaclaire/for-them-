exports.seed = (knex) => {
  return knex('contents').del()
  .then(() => {
    return knex('contents').insert([
      {
        id: 1,
        title: 'dragon boating',
        content_type: 'image',
        image: 'http://img.timeoutshanghai.com/201606/20160607021747864.jpg',
        category: 'fun'
      },
      {
        id: 2,
        title: 'Kayaking',
        content_type: 'image',
        image: 'https://www.pandotrip.com/wp-content/uploads/2015/07/Top-10-Kayaking-Norway2-980x653.jpg',
        category: 'exercise'
      }
    ]).then(() => {
      return knex.raw(
        "SELECT setval('contents_id_seq', (SELECT MAX(id) FROM contents));"
      )
    })
  })
}
