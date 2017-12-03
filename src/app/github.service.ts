import { Injectable } from '@angular/core';

@Injectable()
export class GithubService {

	issues = [
	{'date': '12.01.2015', 
	'text': [
		{'name': 'Lorem ipsum dolor sit amet', 'status': 'open' },
		{'name': 'Maecenas pellentesque', 'status': 'closed' }
	]},
	{'date': '12.04.2015', 
	'text': [
		{'name': 'Lorem ipsum dolor sit amet', 'status': 'open' },
		{'name': 'Maecenas pellentesque', 'status': 'closed' },
		{'name': 'Fusce iaculis, purus fringilla', 'status': 'closed' }
	]}
	];
	chosen = 'all';

	constructor() { }

	getIssues(chosen) {
		if (chosen === 'all') {
			return this.issues.slice();
		}

		console.log(123);
		console.log(this.issues);
		console.log(this.issues.filter((issue) => {
			// return this.issues.slice();
			return issue.date === '12.01.2015';
		}));

		return this.issues.filter((issue) => {
			// return this.issues.slice();
			// return issue.text.status === chosen;
		});
	}

	onModifyStatus(event) {
		// const pos = this.issues.findIndex((iss) => {
		// 	return iss.name === event.name;
		// });

		// this.issues[pos].status = event.status; 
	}

	getChosen() {
		return this.chosen;
	}
	
	onSidebarClick(event) {
		this.chosen = event;
	}
}