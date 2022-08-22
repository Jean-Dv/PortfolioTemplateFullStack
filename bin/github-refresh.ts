#!/usr/bin/env node
import { Logger } from 'log4js'

import { Server } from '../server'
import { RepositoryController } from '../api/github-repos/controller'

async function saveDatabaseRepositories (logger: Logger): Promise<void> {
  try {
    const repositoryController = RepositoryController.instance
    await repositoryController.saveRepositories()
    logger.info('UPDATE ALL REPOSITORIES')
  } catch (error: any) {
    logger.error(error)
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
void Server.instance.then((server) => {
  const logger = server.logger
  void saveDatabaseRepositories(logger)
})
