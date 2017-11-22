import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	issues: any[] = [
    {
      'date': '12.01.2015',
      'text': [
        {
          'name': 'Lorem ipsum dolor sit amet',
          'status': 'open'
        },
        {
          'name': 'Maecenas pellentesque',
          'status': 'closed'
        },
      ]
    },
    {
      'date': '12.03.2015',
      'text': [
        {
          'name': 'Etiam nunc fringilla aliquet',
          'status': 'open'
        }
      ]
    },
    {
      'date': '12.05.2015',
      'text': [
        {
          'name': 'Fusce iaculis, purus fringilla',
          'status': 'open'
        }
      ]
    },
    {
      'date': '12.06.2015',
      'text': [
        {
          'name': 'Morbi eleifend. Sed eget',
          'status': 'open'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
