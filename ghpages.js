const ncp = require('ncp')
const public_folder = "./build"
const docs_folder = "./docs"

ncp(public_folder, docs_folder, function (err) {
    if (err) return console.error(err)
    console.log('public folder copied to docs folder successfully.')
})
