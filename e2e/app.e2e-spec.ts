import { WebLinkrNgPage } from './app.po';

describe('web-linkr-ng App', function() {
  let page: WebLinkrNgPage;

  beforeEach(() => {
    page = new WebLinkrNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
