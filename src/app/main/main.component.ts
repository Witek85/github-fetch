import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	issues = [
		{date: '12.01.2015', text: 'Lorem ipsum dolor sit amet', status: 'open'},
		{date: '12.01.2015', text: 'Maecenas pellentesque', status: 'open'},
		{date: '12.03.2015', text: 'Etiam nunc fringilla aliquet. Quisque', status: 'open'},
		{date: '12.05.2015', text: 'Fusce iaculis, purus fringilla', status: 'open'},
		{date: '12.06.2015', text: 'Morbi eleifend. Sed eget', status: 'open'}
	];

  constructor() { }

  ngOnInit() {
  }

}
