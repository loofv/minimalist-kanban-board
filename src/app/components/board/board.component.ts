import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  inputTask: string = "";
  todo: string[] = [
    'asdasd'
  ];
  inProgress: string[] = [];
  done: string[] = []

  constructor() { }

  ngOnInit(): void {

  }

  addTask() {
    this.todo.push(this.inputTask)
    this.inputTask = "";
  }

  deleteTask(list: string[], index: number) {
    list.splice(index, 1)
  }

  moveTask(currentList: string[], nextList: string[], index: number) {
    nextList.push(currentList[index])
    currentList.splice(index, 1)
  }

}
