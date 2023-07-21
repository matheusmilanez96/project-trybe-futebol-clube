// tests/integration/Book.test.ts

import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { teams } from './mocks/Team.mocks';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { avaiMatches, awayLb, homeLb } from './mocks/Leaderboard.mocks';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Leaderboard Test', function() {
  it('should return home table', async function() {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);
    sinon.stub(SequelizeMatch, 'findAll').resolves(avaiMatches as any);


    const { status, body } = await chai.request(app).get('/leaderboard/home');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(homeLb);
  });

  it('should return away table', async function() {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);
    sinon.stub(SequelizeMatch, 'findAll').resolves(avaiMatches as any);


    const { status, body } = await chai.request(app).get('/leaderboard/away');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(awayLb);
  });

  afterEach(sinon.restore);
});