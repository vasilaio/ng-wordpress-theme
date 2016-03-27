import { Component, Input } from 'angular2/core';

@Component({
  selector: 'loader',
  template: `
    <md-progress-linear [hidden]="!active" mode="indeterminate"></md-progress-linear>
  `
})

export class LoaderCmp {
  @Input() active;
  constructor() {
  }
}
