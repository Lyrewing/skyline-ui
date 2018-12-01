import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Payment, PayChannel, PayStatus } from "../model/Payment";
import { tap } from "rxjs/operators";

const HOST = environment.HOST;
@Injectable()
export class PaymentService {
    private headerOptions: any
    constructor(private http: HttpClient) {
        this.headerOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-btcapi-usid': '344cdfaa-f6d1-46b2-85b9-018fb7b05990','Access-Control-Allow-Origin':'*' }),
        };
    }

    getAllPaymentPage(pageIndex = 1, pageSize = 10): Observable<any> {
        const url = HOST + `api/payment?pageIndex=${pageIndex}&pageSize=${pageSize}`;
        return this.http.get(url, this.headerOptions);
    }
    queryPaymentPage(orderNo: string,paytime:string, paychanel: PayChannel[], paystatus: PayStatus[], pageIndex = 1, pageSize = 10): Observable<any> {
        const url = HOST + `api/payment`;
        return this.http.post(url,{orderNo:orderNo,payTime:paytime,pageIndex:pageIndex,pageSize:pageSize,payChannels:paychanel,payStatuses:paystatus},this.headerOptions);
    }


}