import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	@Input() issue;
	@Output() modifiedIssue = new EventEmitter<{'date': string, 'name': string, 'status': string }>();

	constructor() { }

	ngOnInit() {
	}

	statusChange() {
		this.issue.status = 'closed';
	}

	toggle = (arg) => {

		if (arg === 'closed') {
			this.modifiedIssue.emit({'date': this.issue.date, 'name': this.issue.name, 'status': 'open' },)
		} else {
			this.modifiedIssue.emit({'date': this.issue.date, 'name': this.issue.name, 'status': 'closed' },)
		}
	}
}
