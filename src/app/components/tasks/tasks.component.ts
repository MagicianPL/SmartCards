import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service';
import tasksConstant from 'src/app/constants/tasks';
import { ActivatedRoute } from '@angular/router';

function findTaskByName(name: string) {
  for (const category in tasksConstant) {
      // @ts-ignore
    const categoryTasks = tasksConstant[category];
    for (const task in categoryTasks) {
      const taskData = categoryTasks[task];
      if (taskData.name === name) {
        return taskData;
      }
    }
  }
  return null; // Task not found
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  title: string = "";
  tasks: string[] = [];

  constructor(private flashcardsService: FlashcardsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');
    const taskName = this.route.snapshot.paramMap.get('taskName')?.replace('%20', ' ');
    let tasksObject = this.flashcardsService.flashcardTasksObject;
    this.title = tasksObject?.name;
    this.tasks = tasksObject?.tasks;

    // For example after hard page refresh
    if (!tasksObject && category) {
      // @ts-ignore
      const categoryTaskObjects = tasksConstant[category];
      if (categoryTaskObjects && taskName) {
        tasksObject = findTaskByName(taskName);
        this.tasks = tasksObject?.tasks;
        this.title = tasksObject?.name;
      }
    }
  }
}
