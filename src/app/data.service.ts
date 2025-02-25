import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataArray = [1, 2, 3, 4, 5];
  // private dataArray: number[] = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15,
  // ];

  constructor() {}

  getData(): Observable<number> {
    return of(...this.dataArray);
  }
}
