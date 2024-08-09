
const mongoose = require ('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'MONGODB://loclahost/27017/CBOOT';

mongoose.connect(MONGODB_URI)
    .then(() => console.info(`Sucessfully connect to the database ${MONGODB_URI}`))
    .catch((error) => console.error(`An error ocurred trying to connect to the data base: ${MONGODB_URI} `, error))