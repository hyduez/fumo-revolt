import { Command } from '@kaname-png/revoltx'
import type { PieceContext } from '@sapphire/pieces'
import type { Message } from 'revolt.js'

export class PingCommand extends Command {
  constructor(context: PieceContext) {
    super(context, {
      description: 'A command'
    })
  }

  public async run(message: Message) {
    return message.reply({
      content: 'Hola'
    })
  }
}
