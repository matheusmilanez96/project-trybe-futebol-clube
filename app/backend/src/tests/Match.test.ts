// tests/integration/Book.test.ts

import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { matches, inProgressMatches, finishedMatches } from './mocks/Match.mocks';
import Validations from '../middlewares/Validations';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Matches Test', function() {
  it('should return all matches', async function() {
    sinon.stub(SequelizeMatch, 'findAll').resolves(matches as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(matches);
  });

  it('should return all in progress matches', async function() {
    sinon.stub(SequelizeMatch, 'findAll').resolves(inProgressMatches as any);

    const { status, body } = await chai.request(app).get('/matches?inProgress=true');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(inProgressMatches);
  });

  it('should return all finished matches', async function() {
    sinon.stub(SequelizeMatch, 'findAll').resolves(finishedMatches as any);

    const { status, body } = await chai.request(app).get('/matches?inProgress=false');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(finishedMatches);
  });

  afterEach(sinon.restore);
});