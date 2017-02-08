import {Component, OnInit} from '@angular/core';
import {LinkService} from "../services/link.service";
import {Link} from "../models/link";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private links: Link[] = [];
  private searchText: string = '';

  constructor(private linkService: LinkService) {
    this.linkService.get().subscribe((linkArray: Link[]) => this.links = linkArray);
  }

  ngOnInit() {
  }


}
