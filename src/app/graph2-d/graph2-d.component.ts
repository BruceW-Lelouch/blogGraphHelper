import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph2-d',
  templateUrl: './graph2-d.component.html',
  styleUrls: ['./graph2-d.component.scss']
})
export class Graph2DComponent implements OnInit {

	cols: number = 8;
	// rows: number = 8;
	r = new Array(this.cols);
	c = new Array(this.cols);
	row = [{name: 'name'}, {name: 'name'}, {name: 'name'}, {name: 'name'}, {name: 'name'},]
  rows = [this.row, this.row, this.row, this.row, this.row, this.row, ];
  constructor() { }

  ngOnInit() {
  	console.log(this.cols);
  	console.log(this.r);
  }

  changeColor(r, c) {
  	console.log([r,  c]);
  }

}
