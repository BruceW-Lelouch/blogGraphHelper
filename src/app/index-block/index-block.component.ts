import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-index-block',
  templateUrl: './index-block.component.html',
  styleUrls: ['./index-block.component.scss']
})
export class IndexBlockComponent implements OnInit {
	@Input() r;
	@Input() c;
	color = 'white';

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
  	this.color = 'red';
  }

}


