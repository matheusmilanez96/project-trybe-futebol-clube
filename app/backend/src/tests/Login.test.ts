import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';
import { ILogin } from '../Interfaces/users/IUser';
import { Token } from '../types/Token';
chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Login Test', function() {
  const prefix = '/login';
  const prefix2 = '/login/data';

  describe('Successful request', function() {
    it('deve fazer login quando credenciais forem válidas', async function() {
      const loginData: ILogin = {
        email: 'admin@admin.com',
        password: 'secret_admin',
      }
      const response = await chai.request(app)
        .post(prefix)
        .send(loginData);
      expect(response.status).to.equal(200);
      expect(response.body).to.haveOwnProperty('token');
    })
  })

  describe('failure', function() {
    it('não deve conseguir logar quando email não existir', async function() {
      const loginData: ILogin = {
        email: 'invalid-email@mail.com',
        password: 'valid-password',
      }
      const response = await chai.request(app)
        .post(prefix)
        .send(loginData);
      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({
        message: "Invalid email or password"
      });
    })
    it('não deve conseguir logar quando senha não existir', async function() {
      const loginData: ILogin = {
        email: 'admin@admin.com',
        password: '1234567',
      }
      const response = await chai.request(app)
        .post(prefix)
        .send(loginData);
      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({
        message: "Invalid email or password"
      });
    })
    it('não deve conseguir logar quando email for inválido', async function() {
      const loginData: ILogin = {
        email: 'invalid-email',
        password: 'valid-password',
      }
      const response = await chai.request(app)
        .post(prefix)
        .send(loginData);
      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({
        message: "Invalid email or password"
      });
    })
    it('não deve conseguir logar quando password for inválido', async function() {
      const loginData: ILogin = {
        email: 'valid@mail.com',
        password: '123',
      }
      const response = await chai.request(app)
        .post(prefix)
        .send(loginData);
      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({
        message: "Invalid email or password"
      });
    })

    it('não deve conseguir logar quando email estiver em branco', async function() {
      const loginData: ILogin = {
        email: '',
        password: 'valid-password',
      }
      const response = await chai.request(app)
        .post(prefix)
        .send(loginData);
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "All fields must be filled"
      });
    })

    it('não deve conseguir logar quando password estiver em branco', async function() {
      const loginData: ILogin = {
        email: 'valid@mail.com',
        password: '',
      }
      const response = await chai.request(app)
        .post(prefix)
        .send(loginData);
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "All fields must be filled"
      });
    })
  })
})