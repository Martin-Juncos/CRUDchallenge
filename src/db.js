const { Sequelize} = require('sequelize');

const UserModel = require('./models/User')
const PostModel = require('./models/Post')

const DB_USER = 'postgres';
const DB_PASS = 'postgres';
const DB_HOST = 'localhost:5432'

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/democlase`, {logging: false})

UserModel(database)
PostModel(database)

module.exports = {database, ...database.models}