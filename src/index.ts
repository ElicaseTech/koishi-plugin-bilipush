import { Context, Schema } from 'koishi'
import { cookieCloud } from './config/global'
import { commandRegister } from './config/command';

export const name = 'bilipush'

interface Config {
  cookieCloud: cookieCloud,
}

export const Config: Schema<Config> = Schema.object({
  cookieCloud: Schema.object({
      server: Schema.string().description('cookieCloud服务器地址'),
      key: Schema.string().description('cookieCloud服务器key'),
      password: Schema.string().description('cookieCloud服务器密码'),
  }).description("CookieCloud服务器配置"),
});
export function apply(ctx: Context) {
  commandRegister(ctx);
}
