import { Client as RevoltClient, container } from '@kaname-png/revoltx'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import 'dotenv/config'

export class Client extends RevoltClient {
  constructor() {
    super({
      defaultPrefix: '!',
      baseDirectory: join(fileURLToPath(import.meta.url), '..', '..'),
      hmr: {
        enabled: true,
        usePolling: true,
        interval: 2e3
      }
    })
  }
  public async init(token = process.env.TOKEN) {
    const bot = await super.login(token)
    // console.clear()
    container.logger.info(`${bot?.username}`)
  }
}
