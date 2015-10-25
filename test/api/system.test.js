import chai from 'chai';
import request from 'supertest';
import app from '../../src/app';
import systemFixtures from '../fixtures/systems.json';
import { loadFixtures } from '../helpers';

chai.should();

describe('System API', () => {
    const fixtures = [
        'systems.json'
    ];

    describe('List systems', () => {
        beforeEach(() => loadFixtures(fixtures));

        it('should list systems', done => {
            request(app)
            .get('/api/systems')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                const systems = res.body;
                systems.length.should.equal(systemFixtures.length);
                systems[0].id.should.equal(1);
                done();
            });
        });
    });

    describe('Retrieve a system', () => {
        beforeEach(() => loadFixtures(fixtures));

        it('should retrieve a system', done => {
            request(app)
            .get('/api/systems/1')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                const system = res.body;
                system.id.should.equal(1);
                done();
            });
        });
    });

    describe('Create a system', () => {
        beforeEach(() => loadFixtures(fixtures));

        it('should create a system', done => {
            const payload = {
                displayName: 'testuser123',
                name: 'test user 123',
                info: 'info',
                status: false,
                email: 'hei@hei.com'
            };

            request(app)
            .post('/api/systems')
            .send(payload)
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                const system = res.body;
                system.id.should.equal(3);
                done();
            });
        });
    });
});