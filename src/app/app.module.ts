import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgxPanZoomModule} from "ngx-panzoom";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DragDropModule,
		NgxPanZoomModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
