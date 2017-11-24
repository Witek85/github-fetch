import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
	@Input() issue;

	// var conditional = object1.a == 3 ? 'is 3' : 'is not 3';
// Warunek ? wartość-gdy-true : wartość-gdy-false
// ? to "then" a : to "else".

// if (this.issue.status === 'closed') {
// switchActive = true;
// } else {
// 	switchActive = false;
// }

// statusClosed = function() {
// 	return false;
// };

// statusClosed = () => {
// 	if (this.issue.status === 'closed') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }


	

  constructor() { }

  ngOnInit() {
  }

  statusChange() {
		this.issue.status = 'closed';
	}

	toggle = (arg) => {

		if (arg === 'closed') {
			this.issue.status = 'open';
		} else {
			this.issue.status = 'closed';
		}

 //    this.statusClosed = !this.statusClosed;
		}
	


}
