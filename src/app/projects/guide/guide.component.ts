import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddBookDialog } from '../../modals/add-modal.component';
import { MatDialog, PageEvent } from '@angular/material';
import { Periodic } from '../../model/Periodic';
import { FormControl } from '@angular/forms';
import { Payment } from 'src/app/model/Payment';
import { payments } from 'src/app/mock/mock';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    this.pay = new EventEmitter<string>();
  }

  @Output()
  pay: EventEmitter<string>;


  //PaymentForm
  paymentsForm = new FormControl();
  channelList: string[] = ['支付宝', '微信', '银行卡', '现金'];
  statusList: string[] = ["成功", "失败"];

  //Payment Data
  displayedColumns: string[] = ['OrderNO', 'Amount', 'PaymentNO', 'Channel', 'StartTime', 'PaymentAmount', 'Status'];
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
    this.length= this.paymentsSource.length;
    this.pageSource = page(this.paymentsSource,0);
  }

  //分页数据
  pageData(pageEvent: PageEvent) {
    console.log(pageEvent)
    let length = this.paymentsSource.length;
    let pageSize = pageEvent.pageSize;
    let pageIndex = pageEvent.pageIndex;
    this.pageSource = page(this.paymentsSource, pageIndex, pageSize); 


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
export function page(source: any[], index: number=0, size: number = 10): any[] {
  let pagedata: any[]=[]
  for (let i = 0; i < size; i++) {
    if(index*size+i<source.length){
       pagedata.push(source[index*size+i])
    }
  }
  return pagedata;
}