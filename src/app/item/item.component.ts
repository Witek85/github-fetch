import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

	@Input() issue;
  gitService: GithubService;

  constructor(gitService: GithubService) {
    this.gitService = gitService;
  }

	ngOnInit() {}

	toggle = (name, status) => {
		if (status === 'closed') {
			this.gitService.onModifyStatus({'date': this.issue.date, 'name': name, 'status': 'open' })
		} else {
			this.gitService.onModifyStatus({'date': this.issue.date, 'name': name, 'status': 'closed' })
		}
	}
}
