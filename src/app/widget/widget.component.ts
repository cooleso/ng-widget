import { Component, OnInit, Input } from '@angular/core';
import { IFixture } from '../fixtures.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() data: IFixture;

  ngOnInit() {
  }

}
