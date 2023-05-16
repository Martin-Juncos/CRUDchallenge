const { Sequelize} = require('sequelize');

const UserModel = require('./models/User')
const PostModel = require('./models/Post')
const PaginaModel = require('./models/Pagina')

const DB_USER = 'postgres';
const DB_PASS = 'postgres';
const DB_HOST = 'localhost:5432'

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/democlase`, {logging: false})

UserModel(database)
PostModel(database)
PaginaModel(database)

const {User, Post, Page} = database.models

User.hasMany(Post);
Post.belongsTo(User);

User.belongsToMany(Page, { through: 'UserPage' });
Page.belongsToMany(User, { through: 'UserPage' });

module.exports = {database, ...database.models}