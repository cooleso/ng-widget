import { Component, OnInit } from '@angular/core';
import { FixturesService, IFixture } from '../fixtures.service';

const fillArray = (n, generator) => Array.apply(null, Array(3)).map(() => generator());

@Component({
  providers: [FixturesService],
  selector: 'app-wgt-container',
  templateUrl: './wgt-container.component.html',
  styleUrls: ['./wgt-container.component.scss']
})
export class WgtContainerComponent implements OnInit {
  private fixtures: IFixture[];

  constructor(private fixturesService: FixturesService) { }

  ngOnInit() {
    this.fixtures = fillArray(3, () => this.fixturesService.generateFixture());
    console.warn('fixtures', this.fixtures);
  }

  onAddWidgetClick() {
    this.fixtures.push(this.fixturesService.generateFixture());
  }

}
