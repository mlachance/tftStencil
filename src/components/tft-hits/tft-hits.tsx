import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tft-hits',
  styleUrl: 'tft-hits.scss',
  shadow: true,
})
export class TftHits {
  @Prop() hitPoints: number;

  drawCheckboxes() {
    let returnVal = document.createElement('div');
    for (let i = 1; i <= this.hitPoints; i++) {
      let newCounter = `<div class="counter" data-position="${i}"></div>`;
      returnVal.insertAdjacentHTML('beforeend', newCounter)
    }
    return returnVal.innerHTML;
  }

  render() {
    return <div class='hits' innerHTML={this.drawCheckboxes()}></div>;
  }
}
