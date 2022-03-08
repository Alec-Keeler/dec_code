const bcrypt = require('bcryptjs');
// hash
// compare

async function generateHash(password) {
    const hash = await bcrypt.hash(password, 10)
    console.log(hash)
}

// generateHash('password1!')

const hash = '$2a$12$3IBiwCZkUf6WM4lxQUllWusDYx8c/Wkj1vLXVFRPRGsv5SJs/bBZW'

// $2a - algorithm
// $17 - cost factor
// $qIsnZcTlHXhVOiz8O/SZa - 22 characters - salt
// urKYwLi72SlOzvv1GzZTaxMjY2hzdvIq - hash

async function compareHash(password, hash) {
    const isPass = await bcrypt.compare(password, hash)

    console.log(isPass)
}

compareHash('password1!', hash)