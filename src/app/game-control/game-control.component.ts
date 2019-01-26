import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{ count: number }>();
  @Output() gameStopped = new EventEmitter<{ count: number}>();
  count = 0;
  ref;
  constructor() { }

  onStartGame() {
    this.ref = setInterval(() => {
      this.count++;
      // console.log(this.count);
      this.gameStarted.emit({
        count: this.count
      });
    }, 1000);

  }

  onStopGame() {
    clearInterval(this.ref);
    this.count = 0;
    this.gameStopped.emit({
      count: this.count
    });
  }

  ngOnInit() {
  }

}
