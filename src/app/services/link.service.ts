import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Link} from "../models/link";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class LinkService {

  constructor(private http:Http) {

  }

  public get():Observable<Link[]> {
    return this.http.get("https://weblinkr-server.herokuapp.com/links").map((response:Response) => response.json());
  }

  public add(link:Link):Observable<Response> {
    return this.http.post("https://weblinkr-server.herokuapp.com/links", link);
  }

}
