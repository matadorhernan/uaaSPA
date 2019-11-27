import { Component, OnInit } from "@angular/core";
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.media.scss", "./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  
  public isSideNavActive:boolean = false;
  constructor(private modalService:ModalService) {
    modalService.isSideNavActive.subscribe(status=>{
      this.isSideNavActive = status;
    })
  }

  ngOnInit() {
  }

  public activateSideNav(){
    this.modalService.isSideNavActive.next(!this.isSideNavActive);
  }
}
