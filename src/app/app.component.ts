import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPropertEventBindingApp';
  gameCounter = [];

  onGameStarted(gameCount: {count: number}) {
    console.log(gameCount.count);
    this.gameCounter.push({count: gameCount.count});
    // if (gameCount.count % 2 === 0) {
    // }
  }

  onGameStopped(gameCount: {count: number}) {
    this.gameCounter.length = gameCount.count;
  }
}
