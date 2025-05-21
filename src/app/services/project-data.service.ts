import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private data: any;

  setData(value: any) {
    this.data = value;
  }

  getData() {
    return this.data;
  }
}
