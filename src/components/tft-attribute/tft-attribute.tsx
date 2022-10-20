import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'tft-attribute',
  styleUrl: 'tft-attribute.scss',
  shadow: true,
})
export class TftAttribute {
  @Prop() value: number;
  @Prop() label: string;
  @Prop() id: string;

  render() {
    return (
      <Host>
        <label htmlfor={this.id}>{this.label}</label>
        <input type="text" inputMode="number" id={this.id} value={this.value} />
      </Host>
    );
  }
}
