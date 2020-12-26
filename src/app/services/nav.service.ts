import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public $isSideNav: BehaviorSubject<boolean>;
  constructor() {
    this.$isSideNav = new BehaviorSubject(false);
  }
}
