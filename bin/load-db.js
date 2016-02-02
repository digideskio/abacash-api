#!/usr/bin/env babel-node

import db from '../src/models';
import sequelizeFixtures from 'sequelize-fixtures';
import { syncDB } from '../src/model-helpers';

// verify that we are not in production
if (process.env.NODE_ENV === 'production') {
    console.log('Unable to load database in production (NODE_ENV==\'production\')');
    process.exit(1);
}

const fixtureDir = 'fixtures/';
const fixtures = [
    'systems',
    'api-tokens',
    'customer-roles',
    'customers',
    'products',
    'transactions',
    'users'
]
    .map(file => `./${fixtureDir}${file}.json`);

syncDB({ force: true })
    .then(() => sequelizeFixtures.loadFiles(fixtures, db))
    .then(() => {
        console.log('Loaded fixtures!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });