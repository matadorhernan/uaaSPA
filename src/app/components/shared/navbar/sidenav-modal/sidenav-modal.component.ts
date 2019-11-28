import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../../../services/modal.service";

@Component({
  selector: "app-sidenav-modal",
  templateUrl: "./sidenav-modal.component.html",
  styleUrls: ["./sidenav-modal.component.scss"]
})
export class SidenavModalComponent implements OnInit {
  public isQuickActive: boolean = false;
  public isUniversityActive: boolean = false;
  public isSideNavActive: boolean = false;

  constructor(private modalService: ModalService) {
    modalService.isSideNavActive.subscribe(status => {
      this.isSideNavActive = status;
    });
  }

  ngOnInit() {
    setTimeout(() => {
      let nav = document.getElementById("side-nav-modal");
      nav.classList.add("activated");
    }, 5);
  }

  public deactivateSideNav(): void {
    let nav = document.getElementById("side-nav-modal");
    nav.classList.remove("activated");
    setTimeout(() => {
      this.modalService.isSideNavActive.next(!this.isSideNavActive);
    }, 300);
  }

  public openSubMenu(instruction: string): void {
    switch (instruction) {
      case "quick":
        this.isQuickActive = !this.isQuickActive;
        break;
      case "university":
        this.isUniversityActive = !this.isUniversityActive;
        break;
    }
  }
}