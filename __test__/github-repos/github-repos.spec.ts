import request from 'supertest'

import { appServer, routePrefix } from '../../bin/www'
import { RepositoryController } from '../../api/github-repos/controller'

jest.setTimeout(20000)

beforeAll(async () => {
  const repositoryController = RepositoryController.instance
  void await repositoryController.saveRepositories()
})

describe('FETCH REPOSITORIES FROM GITHUB (SUCCESS)', () => {
  test('should return 200 and all repositories', async () => {
    const objectExpected = {
      github_id: 484267957
    }
    const response = await request(appServer)
      .get(`${routePrefix}/github/repos`)
    expect(response.statusCode).toBe(200)
    expect(response.body.data[0]).toMatchObject(objectExpected)
  })
})
