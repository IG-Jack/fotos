import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imagenParaMostrar: string = "";
  imagenTomada: any;

  constructor(private navCtrl: NavController) {}
  ngOnInit(): void {
    Camera.requestPermissions();
  } 

  clearPhoto() {
    this.imagenTomada = null;
    this.imagenParaMostrar = "";
  }

  async getPhoto() {
   this.imagenTomada = await Camera.getPhoto({
     quality: 90,
     resultType: CameraResultType.Uri,
     source:CameraSource.Camera
   });
   if(this.imagenTomada){
     this.imagenParaMostrar = this.imagenTomada
   };

   
 }  }
