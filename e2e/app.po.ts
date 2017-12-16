import { browser } from 'protractor';

export class Page {
  public b;

  constructor(){
    this.b = browser;
  }

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }
  
}
