import { newSpecPage } from '@stencil/core/testing';
import { TftHits } from '../tft-hits';

describe('tft-hits', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TftHits],
      html: `<tft-hits></tft-hits>`,
    });
    expect(page.root).toEqualHtml(`
      <tft-hits>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tft-hits>
    `);
  });
});
