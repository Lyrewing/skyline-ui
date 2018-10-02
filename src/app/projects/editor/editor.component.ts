import { Component, OnInit } from '@angular/core';
import { EditorConfig } from './model/EditorConfig';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    
  }
 

  title = 'app';

  conf = new EditorConfig();
  markdown = '测试语句';

  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }
}
