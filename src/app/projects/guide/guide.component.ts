import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddBookDialog } from '../../modals/add-modal.component';
import { MatDialog, PageEvent } from '@angular/material';
import { Periodic } from '../../model/Periodic';
import { FormControl } from '@angular/forms';
import { Payment } from 'src/app/model/Payment';
import { payments } from 'src/app/mock/mock';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
  providers: [PaymentService]
})
export class GuideComponent implements OnInit {

  constructor(public dialog: MatDialog, private paymentService: PaymentService) {
    this.pay = new EventEmitter<string>();
  }

  @Output()
  pay: EventEmitter<string>;


  //PaymentForm
  paymentsForm = new FormControl();



  //Payment Data
  displayedColumns: string[] = ['orderNO', 'amount', 'paymentNO', 'channel', 'payTime', 'paymentAmount', 'status'];
  paymentsSource: Payment[] = payments;
  pageSource: Payment[] = [];
  //Payment Page
  length = 19;
  pageSize = 10;
  pageSizeOptions = [5, 10, 20, 50]
  pageEvent: PageEvent


  //路由守卫
  isReadAll: boolean = false;
  haveRead() {
    this.isReadAll = true;
    console.log(this.isReadAll)
  }

  ngOnInit() {
    this.getPageData(1,10);
  }

  //分页数据
  pageData(pageEvent: PageEvent) {
    console.log(pageEvent)
    this.getPageData(pageEvent.pageIndex+1,pageEvent.pageSize);
  }


  getPageData(index:number,size:number){
    this.paymentService.getAllPaymentPage(index, size).subscribe(response => {
      this.length=response.data.total;
      this.pageSource=response.data.payments;
    });
  }


  payFunc() {
    console.log(100)
    this.dialog.open(AddBookDialog, {
      width: '500px',
      height: '200px'
    })
    this.pay.emit();
  }

}
export function page(source: any[], index: number = 0, size: number = 10): any[] {
  let pagedata: any[] = []
  for (let i = 0; i < size; i++) {
    if (index * size + i < source.length) {
      pagedata.push(source[index * size + i])
    }
  }
  return pagedata;
}