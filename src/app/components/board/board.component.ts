import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  inputTask: string = "";
  todo: string[] = ['todo task'];
  inProgress: string[] = ['in progress  task'];
  done: string[] = [ 'done task']

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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
