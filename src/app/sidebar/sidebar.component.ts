import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	@Output() chosen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  	this.chosen.emit('all')
  }

  sendChosen(status) {
  	this.chosen.emit(status)
  }

}
