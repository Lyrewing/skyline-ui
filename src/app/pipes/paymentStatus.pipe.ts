import { PipeTransform, Pipe } from "@angular/core";
@Pipe({name:"status"})
export class PaymentStatusPipe implements PipeTransform{
    statusList: string[] = ["成功", "失败"];
    transform(value: number) :string {
        if(value<this.statusList.length&&value>=0){
            return this.statusList[value];
        }
        return "未知";
    }

}