import request from 'supertest'

import { appServer, routePrefix } from '../../bin/www'

describe('FETCH REPOSITORIES FROM GITHUB (SUCCESS)', () => {
  test('should return 200 and all repositories', async () => {
    const objectExpected = {
      github_id: 470353144,
      url: 'https://github.com/Jean-Dv/Jean-Dv',
      name: 'Jean-Dv',
      description: null,
      stars: 1,
      forks: 1
    }
    const response = await request(appServer)
      .get(`${routePrefix}/github/repos`)
    expect(response.statusCode).toBe(200)
    expect(response.body.data).toMatchObject(objectExpected)
  })
})
