import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../../services/modal.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.media.scss", "./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public dropDownOffset = "300px";
  public isDropDownActive: boolean = false;

  public isSideNavActive: boolean = false;
  constructor(private modalService: ModalService) {
    modalService.isSideNavActive.subscribe(status => {
      this.isSideNavActive = status;
    });
  }

  ngOnInit() {}

  public showDropdown(event, show) {
    this.isDropDownActive = show;
    if(show){
      this.dropDownOffset = `${event.toElement.offsetLeft}px`;
    }
  }

  public activateSideNav() {
    this.modalService.isSideNavActive.next(!this.isSideNavActive);
  }

  
}
