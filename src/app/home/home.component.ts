import {Component, OnInit} from '@angular/core';
import {LinkService} from "../services/link.service";
import {Link} from "../models/link";
import {AuthService} from "../services/auth.service";
import {MdDialog} from "@angular/material";
import {LinkFormComponent} from "../link-form/link-form.component";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    private links: Link[] = [];
    private searchText: string = '';

    constructor(private linkService: LinkService,
                private authService: AuthService,
                private mdDialog: MdDialog) {
        this.linkService.get().subscribe((linkArray: Link[]) => this.links = linkArray);
    }

    ngOnInit() {
    }

    openAddLinkDialog() {
        if (this.authService.authenticated()) {
            this.mdDialog.open(LinkFormComponent).afterClosed().subscribe( linkAdded => {
                this.links.unshift(linkAdded);
            });
        } else {
            this.authService.login();
        }
    }

}
