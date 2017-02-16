import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LinkService} from "./services/link.service";
import {FilterByPipe} from './pipes/filter-by.pipe';
import {LinkFormComponent} from './link-form/link-form.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from "./services/auth.service";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add', component: LinkFormComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FilterByPipe,
        LinkFormComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [
        LinkService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
