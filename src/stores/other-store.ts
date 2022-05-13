import { makeAutoObservable } from 'mobx';



export default class OtherStore {
  rootStore;
  navCurrentId = 0;
  sidebarVisible = true;

  constructor(rootStore: any) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setNavCurrentId(id: number) {
    this.navCurrentId = id;
  }

  setSidebarVisible(state: boolean) {
    this.sidebarVisible = state;
  }

}
