import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isSideNavActive:BehaviorSubject<boolean> = new BehaviorSubject(true)
  constructor() { }
}
