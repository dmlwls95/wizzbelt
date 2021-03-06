import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings'
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AdminPage } from '../admin/admin';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the MyinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myinfo',
  templateUrl: 'myinfo.html',
})
export class MyinfoPage {
  item1 = [
    '주문목록 배송조회',
    '취소 및 반품 내역'
  ];
  item2 = [
    '배송지 변경',
    '회원 정보 변경'
  ];
  item3 = [
    '공지사항',
    '기타'    
  ];
  item4 = [
    '로그아웃'
  ]
  constructor(private toast: ToastController,public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyinfoPage');

    this.afAuth.auth.onAuthStateChanged(auth =>{
      if(!auth){
        console.log('loggedout');
        this.navCtrl.setRoot(LoginPage);
        this.toast.create({
          message: '로그인해주세요',
          duration: 2000,
          position: 'top'
        }).present();
      }
    })
  }
  menu(){
    this.navCtrl.push(SettingsPage)
  }
  openLogin(){
    this.navCtrl.push(LoginPage)
  }
  openSignup(){
    this.navCtrl.push(SignupPage)
  }
  admin(){
    this.navCtrl.push(AdminPage)
  }
  itemSelected(item: string){
    console.log("Selected Item", item);
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
}
