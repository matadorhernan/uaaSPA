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
  public isAdmissionsActive: boolean = false;
  public isAcademicsActive: boolean = false;
  public isResearchActive: boolean = false;
  public isGraduatesActive: boolean = false;
  public isInternationalActive: boolean = false;
  public isMediaActive: boolean = false;

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
    let last = {
      quick: this.isQuickActive,
      university: this.isUniversityActive,
      admissions: this.isAdmissionsActive,
      academics: this.isAcademicsActive,
      research: this.isResearchActive,
      graduates: this.isGraduatesActive,
      international: this.isInternationalActive,
      media: this.isMediaActive
    };

    this.isQuickActive = false;
    this.isUniversityActive = false;
    this.isAdmissionsActive = false;
    this.isAcademicsActive = false;
    this.isResearchActive = false;
    this.isGraduatesActive = false;
    this.isInternationalActive = false;
    this.isMediaActive = false;

    switch (instruction) {
      case "quick":
        this.isQuickActive = !last.quick;
        break;
      case "university":
        this.isUniversityActive = !last.university;
        break;
      case "admissions":
        this.isAdmissionsActive = !last.admissions;
        break;
      case "academics":
        this.isAcademicsActive = !last.academics;
        break;
      case "research":
        this.isResearchActive = !last.research;
        break;
      case "graduates":
        this.isGraduatesActive = !last.graduates;
        break;
      case "international":
        this.isInternationalActive = !last.international;
        break;
      case "media":
        this.isMediaActive = !last.media;
        break;
    }
  }
}
