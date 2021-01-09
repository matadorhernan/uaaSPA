import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoading: boolean;
  public isSideNav: boolean = false;
  private isSideNavEvent: Subscription;

  constructor(
    private readonly navService: NavService,
    private readonly router: Router
  ) {
    this.isSideNavEvent = this.navService.$isSideNav.subscribe((status) => {
      this.isSideNav = status;
    });

    this.loadingHandler();
  }

  private loadingHandler(): void {
    let fastLoading: boolean;
    let fastLoadingTimer: ReturnType<typeof setTimeout>;
    let loadingTimer: ReturnType<typeof setTimeout>;
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          clearTimeout(fastLoadingTimer);
          clearTimeout(loadingTimer);
          this.isLoading = true;
          fastLoading = true;
          fastLoadingTimer = setTimeout(() => {
            fastLoading = false;
          }, 1000);
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          if (!fastLoading) {
            this.isLoading = false;
          } else {
            loadingTimer = setTimeout(() => {
              this.isLoading = false;
            }, 1000);
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.isSideNavEvent.unsubscribe();
  }
}
