import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.page.html',
  styleUrls: ['./botao.page.scss'],
})
export class BotaoPage implements OnInit {

  constructor(public nav: NavController, public toastController: ToastController) { }

  abrirPagina(x: string) {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
  }

  async metodoToast() {
    const toast = await this.toastController.create({
      message: 'Atenção!',
      duration: 2000
    });
    toast.present();
  }

}
