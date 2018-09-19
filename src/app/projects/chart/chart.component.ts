import { Component, OnInit } from '@angular/core';
import G2 from '@antv/g2/build/g2';
import { VoteService } from '../../services/vote.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers:[VoteService]
})
export class ChartComponent implements OnInit {

  constructor(public voteService: VoteService) {

  }

  ngOnInit() {
    if (typeof G2 !== 'undefined') {
      G2.track(false);
    }
    this.voteService.getBooks().subscribe(response => {
      console.log(response)
      this.drawBarChart(response);
    })
  }


  drawBarChart(data:any ) {

    var chart = new G2.Chart({
      container: 'mountNode',
      forceFit: true,
      height: 600,
    });
    chart.source(data);
    chart.axis('name', {
      label: {
        offset: 5
      }
    });
    chart.coord().transpose();
    chart.interval().position('name*votes');
    chart.render();
  }

}
