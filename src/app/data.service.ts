import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataArray: number[] = [1, 2, 3, 4, 5];
  // private dataArray: number[] = [2, 3, 11, 12, 13, 14, 15];
  constructor() {}

  // Return Observable of an array of numbers
  getData(): Observable<number[]> {
    return of(this.dataArray);
  }
}
