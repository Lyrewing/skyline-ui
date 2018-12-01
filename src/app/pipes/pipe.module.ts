import { NgModule } from "@angular/core";
import { PaymentChannelPipe } from "./paymentChannel.pipe";
import { PaymentStatusPipe } from "./paymentStatus.pipe";

@NgModule({
    declarations:[PaymentChannelPipe,PaymentStatusPipe],
    imports:[],
    exports:[PaymentChannelPipe,PaymentStatusPipe] 
})
export class PipeModule{

}