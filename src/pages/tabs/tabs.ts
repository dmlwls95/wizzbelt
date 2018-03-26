import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { MyinfoPage } from '../myinfo/myinfo';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = SearchPage;
  tab4Root = MyinfoPage;

  authcom: boolean = false;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged(function(user){
      if(user){
        this.authcom = true;
      }else{
        this.authcom = false;
      }
    })
  }
}
