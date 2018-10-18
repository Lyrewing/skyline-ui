import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../../model/Book';
import { books } from '../../mock/mock';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { VoteService } from '../../services/vote.service';
import { Router } from '@angular/router';
import { AddBookDialog } from '../../modals/add-modal.component';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
  providers: [VoteService]
})
export class VotesComponent implements OnInit {

  bookitems: Book[]
  constructor(public dialog: MatDialog, public voteService: VoteService, public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.voteService.getBooks().subscribe(response => {
      console.log(response)
      this.bookitems = response
      console.log(this.bookitems)
    })
  }

  vote(bookNo: string) {
    console.log(bookNo)
    //将数据库的值加一，如果此人已经头票则不进行显示已投
    this.voteService.vote(bookNo).subscribe(response => {
      console.log(response)
      this.showMessage("成功!", "投票")
    })
  }

  openDialog() {
    this.dialog.open(AddBookDialog, {
      width: '500px',
      height: '200px'
    })
  }
  add(Id: number) {
    console.log(Id)
  }

  showMessage(message: string, action: string) {
    let bar = this.snackBar.open(message, action, {
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    bar.afterDismissed().subscribe(null, null, () => {
      if (message === '成功!' && action === '登陆') {
        this.router.navigateByUrl('home');
      }
    });
  }


}






