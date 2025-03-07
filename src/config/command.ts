import { Context } from "koishi";

export function commandRegister(ctx: Context) {

    let totalCommand:string = 'bilipush';

    // 总指令
    ctx.command(`${totalCommand}`)
        .action(() => {

        });

    // 添加UP主订阅
    ctx.command(`${totalCommand}.follow <uid>`)
        .action((_, uid) =>{

        });

    // 删除UP主订阅
    ctx.command(`${totalCommand}.unfollow <uid>`)
        .action((_, uid) => {

        });

    // 检查频道中的所有UP主订阅信息
    ctx.command(`${totalCommand}.check`)
        .action(() => {

        });

    // 重置设置（作用域待定）
    ctx.command(`${totalCommand}.reset`)
        .action(() => {

        });

    // 切换UP主订阅的全体成员
    ctx.command(`${totalCommand}.atall <uid>`)
        .action((_, uid) => {

        });

    // 切换UP主动态推送
    ctx.command(`${totalCommand}.dynamic <uid>`)
        .action((_, uid) => {

        });

    // 切换UP主直播推送
    ctx.command(`${totalCommand}.live <uid>`)
        .action((_, uid) => {

        });
    
    // 检查账号登录情况
    ctx.command(`${totalCommand}.checklogin`)
        .action(() => {

        });

    // 扫码登录
    ctx.command(`${totalCommand}.qrlogin`)
        .action(() => {

        });
    
    // 账号登出
    ctx.command(`${totalCommand}.logout`)
        .action(() => {

        });
}