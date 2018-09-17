import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../../model/Book';
import { books } from '../../mock/books';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  
  bookitems:Book[]
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
    this.bookitems=books

  }

  vote(bookNo:string){
    console.log(bookNo)
    //将数据库的值加一，如果此人已经头票则不进行显示已投
  }

  openDialog(){
    this.dialog.open(AddBookDialog,{
      width:'500px',
      height:'200px'
    })

  }
  add(Id:number){
    console.log(Id)
  }
}


@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './votes.component.add.html',
  styleUrls:['./votes.component.css']
  
})
export class AddBookDialog{
  constructor( public dialogRef: MatDialogRef<AddBookDialog>){

  }
}