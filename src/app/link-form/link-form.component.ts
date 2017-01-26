import {Component, OnInit} from '@angular/core';
import {Link} from "../models/link";
import {LinkService} from "../services/link.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-link-form',
    templateUrl: './link-form.component.html',
    styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent implements OnInit {

    public link: Link = new Link();

    constructor(private router:Router, private linkService: LinkService) {

    }

    ngOnInit() {
    }

    addLink(link: Link, allTags: string) {
        link.tags = allTags.split(',').map((tag) => tag.trim());
        this.linkService.add(link).subscribe(() => {
            this.router.navigate(['']);
        });
    }

}
