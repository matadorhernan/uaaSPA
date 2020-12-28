import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand/brand.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { QuickNavbarComponent } from './navbar/navbar/quick-navbar/quick-navbar.component';
import { SideNavComponent } from './navbar/side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { NavFooterComponent } from './footer/nav-footer/nav-footer.component';
import { ContactFooterComponent } from './footer/contact-footer/contact-footer.component';
import { SealsFooterComponent } from './footer/seals-footer/seals-footer.component';
import { NavFooterItemComponent } from './footer/nav-footer/nav-footer-item/nav-footer-item.component';
import { CuadrosoftFooterComponent } from './footer/cuadrosoft-footer/cuadrosoft-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BrandComponent,
    BreadcrumbComponent,
    NavbarComponent,
    QuickNavbarComponent,
    SideNavComponent,
    FooterComponent,
    NavFooterComponent,
    ContactFooterComponent,
    SealsFooterComponent,
    NavFooterItemComponent,
    CuadrosoftFooterComponent,
  ],
  exports: [
    BrandComponent,
    BreadcrumbComponent,
    NavbarComponent,
    QuickNavbarComponent,
    SideNavComponent,
    FooterComponent,
    NavFooterComponent,
    ContactFooterComponent,
    SealsFooterComponent,
  ],
  imports: [CommonModule, ComponentsModule, NgbModule, RouterModule],
})
export class SharedModule {}
