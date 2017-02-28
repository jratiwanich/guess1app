import { Injectable } from '@angular/core';

@Injectable()
export class TimeStructure {

  constructor(
    public hour: number,
    public minute: number,
    public second: number,
  ) {  }

}


export class TimeEntry {

  constructor(
    public id: number,
    public inTime: TimeStructure,
    public outTime: TimeStructure,

  ) {  }

}
