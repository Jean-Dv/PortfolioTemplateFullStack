#!/usr/bin/env node
import { Server } from '../server'

const server = Server.instance
const appServer = server.app
const routePrefix = server.routePrefix
const logger = server.logger
server.start()

export { server, appServer, routePrefix, logger }
