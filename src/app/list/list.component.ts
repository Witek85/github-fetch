import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() issues;

  constructor() { }

  ngOnInit() {
  }

	statusChange() {
		console.log(this);
	}

}



