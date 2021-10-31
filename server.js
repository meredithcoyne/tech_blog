const express = require('express');
const app = express();
const sequelize = require('./config/connection');

// creates session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();