import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	@Input() issues;
  @Output() modifiedIssueMain = new EventEmitter<{'date': string, 'name': string, 'status': string }>();

  constructor() { }

  ngOnInit() {
  }

	statusChange() {
		console.log(this);
	}

  onmodifiedIssue(event) {
    this.modifiedIssueMain.emit(event)
  }

}