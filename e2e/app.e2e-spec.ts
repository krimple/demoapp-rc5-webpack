import { DemoappRc5WebpackPage } from './app.po';

describe('demoapp-rc5-webpack App', function() {
  let page: DemoappRc5WebpackPage;

  beforeEach(() => {
    page = new DemoappRc5WebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
