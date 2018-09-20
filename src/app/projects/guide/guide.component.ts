import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddBookDialog } from '../../modals/add-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  @Output()
  pay:EventEmitter<string>;
  constructor(public dialog:MatDialog) { 
    this.pay=new EventEmitter<string>();
  }
  ngOnInit() {

  }
  payFunc(){
    console.log(100)
    this.dialog.open(AddBookDialog,{
      width:'500px',
      height:'200px'
    })
    this.pay.emit();
  }

}
