import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  // shadow: true,
})
export class PageProfile {
  @Prop() name: string

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/tab/notice"></ion-back-button>
            </ion-buttons>
            <ion-title>Profile: {this.name}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding">
          <ion-card>
            <ion-card-header>
              <h1>
                {this.normalize(this.name)}
              </h1>
            </ion-card-header>
            <ion-card-content>
              <p>
                This name is passed in through a route param!
              </p>
              <tft-attribute id="st" label="ST" value={13}></tft-attribute>
              <tft-attribute id="dx" label="DX" value={10}></tft-attribute>
              <tft-attribute id="iq" label="IQ" value={8}></tft-attribute>
              <tft-attribute id="ma" label="MA" value={10}></tft-attribute>
              <tft-hits hitPoints={12}></tft-hits>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </Fragment>
    );
  }

}
