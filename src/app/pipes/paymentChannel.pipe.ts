import { PipeTransform, Pipe } from "@angular/core";
@Pipe({name:"channel"})
export class PaymentChannelPipe implements PipeTransform{
    channelList: string[] = ['支付宝', '微信', '银行卡', '现金'];
    transform(value: number): string {
        if(value<this.channelList.length&&value>=0){
            return this.channelList[value];
        }
        return "未知渠道";
    }

}