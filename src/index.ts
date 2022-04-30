import { container } from '@kaname-png/revoltx'
import { Client } from './lib/client'

void (async () => {
  const client = new Client()
  await client.init()
  container.logger.info(container.stores.get('commands').size)
})()
