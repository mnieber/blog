import { action, makeObservable, observable } from 'mobx';

export type MainMenuItemT = 'posts' | 'aphorisms' | 'about';

export type PropsT = {};

export class DashboardState {
  mainMenuItem: MainMenuItemT = 'posts';

  selectMainMenuItem(menuItem: MainMenuItemT) {
    this.mainMenuItem = menuItem;
  }

  destroy() {}

  constructor(props: PropsT) {
    makeObservable(this, {
      mainMenuItem: observable,
      selectMainMenuItem: action,
    });
  }
}
