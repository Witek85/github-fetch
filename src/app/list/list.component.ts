import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	issues = [];
	chosen = 'all';
	activatedRoute: ActivatedRoute;
	gitService: GithubService;
	subscription;

	constructor(activatedRoute: ActivatedRoute, gitService: GithubService) {
		this.gitService = gitService;
		this.activatedRoute = activatedRoute;
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe(
			(params) => {
				this.issues = this.gitService.getIssues(params.status);
				this.chosen = params.status;
			}
			);
		this.subscription = this.gitService.statusChange.subscribe(
			() => {
				this.issues = this.gitService.getIssues(this.chosen);
			});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}


  // characters = [];
  // activatedRoute: ActivatedRoute;
  // swService: StarWarsService;

  // constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
  //   this.activatedRoute = activatedRoute;
  //   this.swService = swService;
  // }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(
  //     (params) => {
  //       this.characters = this.swService.getCharacters(params.side)
  //     }
  //   );
  // }