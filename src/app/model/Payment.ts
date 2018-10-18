export interface Payment{
    OrderNO:string
    Amount:number
    PaymentNO: string
    Channel:PayChannel
    StartTime:string
    PaymentAmount:number
    Status:PayStatus
}

export enum PayStatus {
    Success,
    Failed

}
export enum PayChannel{
    AliPay,
    WeChat
}

