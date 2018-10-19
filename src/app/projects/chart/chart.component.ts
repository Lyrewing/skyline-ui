import { Component, OnInit } from '@angular/core';
import G2 from '@antv/g2/build/g2';
import { VoteService } from '../../services/vote.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [VoteService]
})
export class ChartComponent implements OnInit {

  constructor(public voteService: VoteService) {

  }

  ngOnInit() {
    if (typeof G2 !== 'undefined') {
      G2.track(false);
    }
    this.drawLineChart();

    /*
    this.voteService.getBooks().subscribe(response => {
      console.log(response)
      this.drawBarChart(response);
    })
    */


  }


  //画官方的实例折现图
  drawLineChart() {

    //创建数据
    var data = [{
      year: '1991',
      value: 3
    }, {
      year: '1992',
      value: 4
    }, {
      year: '1993',
      value: 3.5
    }, {
      year: '1994',
      value: 5
    }, {
      year: '1995',
      value: 4.9
    }, {
      year: '1996',
      value: 6
    }, {
      year: '1997',
      value: 7
    }, {
      year: '1998',
      value: 9
    }, {
      year: '1999',
      value: 13
    }];

    //创建画布
    var chart = new G2.Chart({
      container: 'mountNode',
      forceFit: false,
      
    });
    chart.source(data);
    chart.scale('value', {
      min: 0
    })
    chart.scale('year', {
      range: [0, 1]
    });
    chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    });
    chart.line().position('year*value');
    chart.point().position('year*value').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    });
    chart.render();












  }



  //画小说的统计图
  drawBarChart(data: any) {
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
