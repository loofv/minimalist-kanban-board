import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.css']
})
export class BoardColumnComponent implements OnInit {

  title = "fake title"

  constructor() { }

  ngOnInit(): void {
  }

}
