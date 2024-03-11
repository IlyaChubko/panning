import {Component, OnInit} from '@angular/core';
import {ItemPosition} from "../model/model";
import {PanZoomConfig} from "ngx-panzoom";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.scss',
		'../styles.scss',
		'../../node_modules/primeng/resources/themes/lara-light-blue/theme.css',
		'../../node_modules/primeng/resources/primeng.min.css',
		'../../node_modules/primeflex/primeflex.scss'
	]
})


export class AppComponent implements OnInit {
	title = 'panning';
	position: ItemPosition = {x: 200, y: 200};
	panZoomConfig: PanZoomConfig = new PanZoomConfig();

	ngOnInit(): void {
		this.initPanZoomConfig();
	}

	initPanZoomConfig() {
		let panZoomConfigOptions = {
			zoomOnDoubleClick: false,
			zoomOnMouseWheel: false,
			noDragFromElementClass: "nodeDrag",
		}
		this.panZoomConfig = new PanZoomConfig(panZoomConfigOptions);
	}

	onNodeItemDragMoved($event: any) {
		let position = $event.source.getFreeDragPosition();
		position.x = position.x;
		position.y = position.y;
	}
}
