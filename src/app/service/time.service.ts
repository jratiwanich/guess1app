import { Injectable } from '@angular/core';

@Injectable()
export class TimeStructure {

  constructor(
    public hour: number,
    public minute: number,
    public second: number,
  ) {  }

}

@Injectable()
export class TimeEntry {

  constructor(
    public inTime: TimeStructure,
    public outTime: TimeStructure,

  ) {  }

}
