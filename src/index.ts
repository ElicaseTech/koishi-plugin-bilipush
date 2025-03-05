import { Context, Schema } from 'koishi'

export const name = 'bilipush'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('echo <message>')
  .action((_, message) => message)
}
