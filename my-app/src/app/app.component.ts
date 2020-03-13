 import { Component, ViewChild } from '@angular/core';
 import { from, Observable, BehaviorSubject } from 'rxjs';
 import { InfoListAboutVideo } from './responce-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public listOfCards: InfoListAboutVideo[] = [];
  public status: string = "Начните поиск";
  
  constructor () {
  }

  public responceStatus (ev) : void {
    this.status = ev;
  }

  public appInputSearch (event) : void {
    //console.log("Событие", event);
    this.listOfCards = event;
  }

}
