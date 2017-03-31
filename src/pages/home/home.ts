import { Component } from '@angular/core';
import {FileChooser} from '@ionic-native/file-chooser';
import {MediaPlugin,MediaObject} from '@ionic-native/media';
import {FilePath} from '@ionic-native/file-path';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nativePath:string
  file:MediaObject
  status:boolean=false
  constructor(public navCtrl: NavController,private fileChooser:FileChooser,private media: MediaPlugin,private nativeAudio: NativeAudio)
   {}
  fieChooser()
  {
      this.status=true;
      this.fileChooser.open()
      .then(uri =>{(<any>window).FilePath.resolveNativePath(uri,(result)=>{this.nativePath=result;this.status=true;
      },(err)=>{
      alert(err);
       })}).catch(e => console.log(e));
  }
  playAudio()
  {
      this.nativeAudio.preloadComplex('uniqueId2',this.nativePath,1,1,0).then(onSuccess=>{
       this.nativeAudio.play('uniqueId2',()=> console.log('uniqueId2 is done playing'));
       },onError=>{
      console.log('err')
    });
 }

}
