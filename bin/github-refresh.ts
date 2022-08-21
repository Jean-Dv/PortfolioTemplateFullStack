#!/usr/bin/env node
import { Server } from '../server'
import { RepositoryController } from '../api/github-repos/controller'

async function saveDatabaseRepositories (): Promise<void> {
  try {
    const repositoryController = RepositoryController.instance
    await repositoryController.saveRepositories()
    console.log('UPDATE ALL REPOSITORIES')
  } catch (error: any) {
    console.log(error)
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
Server.instance
void saveDatabaseRepositories()
