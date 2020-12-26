import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isSideNav: boolean = false;
  private isSideNavEvent: Subscription;

  constructor(private readonly navService: NavService) {
    this.isSideNavEvent = navService.$isSideNav.subscribe((status) => {
      this.isSideNav = status;
    });
  }
  ngOnDestroy(): void {
    this.isSideNavEvent.unsubscribe();
  }
}
