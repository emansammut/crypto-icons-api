/* Server Setup */
var express = require('express');
var app = express();
const server = app.listen(process.env.PORT || 5000);

const api = require('./config/api')
let rootApiKey = api.rootApiKey;
let debug = api.debug;
/* End Server Setup */

/* Database */
const db = require('./config/auth');
const { Pool } = require('pg');
const client = new Pool({
    user: db.user,
    host: db.host,
    database: db.database,
    password: db.password,
    port: db.port,
});

const puppeteer = require('puppeteer');

/* Other Dependencies */
var dateTime = require('node-datetime');
const schedule = require('node-schedule');
const path = require('path');
/* End Other Dependencies */

(async () => {
    scraper();
})();

/* Functionality */
async function scraper() {
    
}
/* End Fucntionality */

/* Workers */
schedule.scheduleJob('* * * * *', roomWorker); //every minute
/* End Workers */

/* Helpers */
async function sql(qry, type) {
    try {
        let res = await client.query(qry);
        switch (type) {
            case "i":
                return res.rows;
            case "s":
                return res.rows;
            default:
                break;
        }
    } catch (ex) {
        console.error(ex);
    }
}
/* End Helpers */

/* Misc */
process.on('unhandledRejection', (reason, p) => { 
    console.error(reason, 'Unhandled Rejection at Promise', p);
}).on('uncaughtException', err => { 
    console.error(err, 'Uncaught Exception Thrown');
});
/* End Misc */