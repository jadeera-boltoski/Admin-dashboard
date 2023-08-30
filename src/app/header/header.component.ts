import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()onMenuBtnClick=new EventEmitter

  menubuttonClicked(){
      // when click that menu button there do some event that is this to do hide or show that side bar
    // angular nte core nte ullil ulla eventemitter nnu paranja class use cheyyumboyahu namukk event process cheyyan kayiyunnathu

    // ivda ntha sambavam?.....


    // to occur an userdefind event
    // emit is a method inside that class to do/process event
    this.onMenuBtnClick.emit()
    // emit method use cheythittaanu toggle cheyyunne

    // parent child data communication--------child nnu parent lekk data share -----------@output output decreator

      
  }

}
