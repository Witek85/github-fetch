import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  chosen = 'all';
	issues = [
    {'date': '12.01.2015', 'name': 'Lorem ipsum dolor sit amet', 'status': 'open' },
    {'date': '12.01.2015', 'name': 'Maecenas pellentesque', 'status': 'closed' },
    {'date': '12.03.2015', 'name': 'Etiam nunc fringilla aliquet', 'status': 'closed' },
    {'date': '12.01.2015', 'name': 'Fusce iaculis, purus fringilla', 'status': 'open' },
    {'date': '12.01.2015', 'name': 'Morbi eleifend. Sed eget', 'status': 'open' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onChoose(status) {
    this.chosen = status;
  }

  getIssues() {
    if (this.chosen === 'all') {
      console.log(this.issues);
      return this.issues.slice();
    }

    return this.issues.filter((issue) => {
      return issue.status === this.chosen;
    });

  }

}
