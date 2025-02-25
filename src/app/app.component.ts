import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

import { map, filter, reduce, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-5';
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    // Map to get double of emitted values
    this.dataService
      .getData()
      .pipe(
        map((value) => {
          return value * 2;
        })
      )
      .subscribe((result) => {
        console.log(`Mapped Values (Doubled) :`, result);
      });

    // Filter to get even value
    this.dataService
      .getData()
      .pipe(filter((value) => value % 2 === 0))
      .subscribe((result) => {
        console.log(`Even Value :`, result);
      });

    // Reduce to get sum of all value
    this.dataService
      .getData()
      .pipe(
        reduce((acc, value) => {
          return acc + value;
        })
      )
      .subscribe((result) => console.log(`Sum : `, result));
  }
}
