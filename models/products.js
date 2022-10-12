require('dotenv').config();
const dataQueries = require('../queries/dataQueries')
const pool = require('../utils/mySql')


const getAllProducts = async () => {
    let client, result;
    try {
        client = await pool.connect()
        const data = await client.query(dataQueries.getAllProducts)
        result = data.rows
        console.log(data);

    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

module.exports = {
    getAllProducts
}
