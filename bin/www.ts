#!/usr/bin/env node
import { Application } from 'express'
import { Logger } from 'log4js'

import { Server } from '../server'

let appServer: Application
let routePrefix: string
let logger: Logger
void Server.instance.then((server) => {
  appServer = server.app
  routePrefix = server.routePrefix
  logger = server.logger
  server.start()
})
export { appServer, routePrefix, logger }
