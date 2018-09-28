import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddBookDialog } from '../../modals/add-modal.component';
import { MatDialog } from '@angular/material';
import { Periodic } from '../../model/Periodic';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  @Output()
  pay:EventEmitter<string>;
  dataSource : Periodic[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns : string[] = ['position', 'name', 'weight', 'symbol'];


  isReadAll:boolean=false;
  constructor(public dialog:MatDialog) { 
    this.pay=new EventEmitter<string>();
  }
  ngOnInit() {


  }

  haveRead(){
    this.isReadAll=true;
    console.log(this.isReadAll)
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
