const express = require('express')
const app = express()
const { getUsers } = require('./controller')
getUsers(1)