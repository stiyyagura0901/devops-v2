import request from 'supertest';
import app from '../../src/app';

describe('GET /', () => {
  it('should return a message', async () => {
    const response = await request(app)
      .get('/')
      .set('Accept', 'application/json');

    expect(response.body.message).toEqual('Hello from server');
    expect(response.status).toEqual(200);
  });
});

describe('GET /health-check', () => {
  it('should return the health status', async () => {
    const response = await request(app)
      .get('/health-check')
      .set('Accept', 'application/json');

    expect(response.body.status).toEqual('OK');
    expect(response.status).toEqual(200);
  });
});

describe('GET /message', () => {
  it('should return a proper message if the auth code is valid', async () => {
    const response = await request(app)
      .get('/message?auth=1234567890')
      .set('Accept', 'application/json');

    expect(response.body.message).toEqual('Hello World 👋');
    expect(response.status).toEqual(200);
  });

  it('should return an error if the auth code is invalid', async () => {
    const response = await request(app)
      .get('/message?auth=nnnnnnnnnnn')
      .set('Accept', 'application/json');

    expect(response.body).toEqual(
      'You are not authorized to view this message'
    );
    expect(response.status).toEqual(401);
  });
});
