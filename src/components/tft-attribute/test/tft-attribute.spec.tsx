import { newSpecPage } from '@stencil/core/testing';
import { TftAttribute } from '../tft-attribute';

describe('tft-attribute', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TftAttribute],
      html: `<tft-attribute></tft-attribute>`,
    });
    expect(page.root).toEqualHtml(`
      <tft-attribute>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tft-attribute>
    `);
  });
});
