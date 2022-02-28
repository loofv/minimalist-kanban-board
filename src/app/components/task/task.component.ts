import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() content: string = 'This is a very long sentence, to see what happens if its long';

  constructor() { }

  ngOnInit(): void {
  }

}
