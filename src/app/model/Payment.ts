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
    Success=0,
    Failed=1

}
export enum PayChannel{
    AliPay=0,
    WeChat=0
}

