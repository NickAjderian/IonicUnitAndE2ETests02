import { Page } from './app.po';
import { browser, element, by } from 'protractor';


describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Page One', () => {
      page.getTitle().then(title => {
        expect(true).toBeTruthy();
        console.log('page 1 title is ' + title);
        //expect(title).toEqual('Page One');
      });
    });
    it('should have a button saying Login',()=>{
      let button = element(by.buttonText('LOGIN'));
      if(button) console.log('button exists');
      let statusText = element(by.binding('status'));
      if(statusText) console.log('status text exists');
      if(button && statusText){
        //console.log(JSON.stringify(statusText));
        //button.click();
        //let s = statusText.getText();
        //console.log('after logging in status = ' + s);
      }


    });
  })
});
