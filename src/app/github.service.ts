import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GithubService {

	issues = [
		{'date': '12.01.2015', 'name': 'Lorem ipsum dolor sit amet', 'status': 'open' },
		{'date': '12.01.2015', 'name': 'Maecenas pellentesque', 'status': 'closed' },
		{'date': '12.03.2015', 'name': 'Etiam nunc fringilla aliquet', 'status': 'closed' },
		{'date': '12.04.2015', 'name': 'Fusce iaculis, purus fringilla', 'status': 'open' },
		{'date': '12.05.2015', 'name': 'Morbi eleifend. Sed eget', 'status': 'open' },
		{'date': '12.06.2015', 'name': 'Suspendisse a nibh', 'status': 'open' },
		{'date': '12.08.2015', 'name': 'Duis pretium erat volutpat', 'status': 'closed' },
		{'date': '12.09.2015', 'name': 'Maecenas scelerisque', 'status': 'closed' },
		{'date': '12.10.2015', 'name': 'Etiam blandit suscipit, velit ac', 'status': 'open' },
		{'date': '12.12.2015', 'name': 'In tempus facilisis', 'status': 'open' }
	];
	chosen = 'all';
	statusChange = new Subject<void>();

	constructor() { }

	getIssues(chosen) {
		if (chosen === 'all') {
			return this.issues.slice();
		}

		return this.issues.filter((issue) => {
			return issue.status === chosen;
		});
	}

	onModifyStatus(event) {
		const pos = this.issues.findIndex((iss) => {
			return iss.name === event.name;
		});

		this.issues[pos].status = event.status; 
		this.statusChange.next();
	}

	getChosen() {
		return this.chosen;
	}
	
	onSidebarClick(event) {
		this.chosen = event;
	}
}