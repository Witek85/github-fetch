import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() childIssues: string;
  @Input() childIssuesOpen: string;
  @Input() childIssuesClosed: string;
	@Output() chosen = new EventEmitter<string>();
  chosenSidebar = 'all';

  constructor() { }

  ngOnInit() {
  	this.chosen.emit('all');
  }

  sendChosen(status) {
    this.chosenSidebar = status;
  	this.chosen.emit(status)
  }

}
