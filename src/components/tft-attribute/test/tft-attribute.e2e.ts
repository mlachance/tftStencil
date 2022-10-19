import { newE2EPage } from '@stencil/core/testing';

describe('tft-attribute', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tft-attribute></tft-attribute>');

    const element = await page.find('tft-attribute');
    expect(element).toHaveClass('hydrated');
  });
});
