import { newE2EPage } from '@stencil/core/testing';

describe('tft-hits', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tft-hits></tft-hits>');

    const element = await page.find('tft-hits');
    expect(element).toHaveClass('hydrated');
  });
});
