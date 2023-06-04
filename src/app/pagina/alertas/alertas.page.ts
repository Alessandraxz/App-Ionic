import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {
nome = 'Alessandra'
  constructor(public alertas: AlertController,
    public as: ActionSheetController ) { }

  async abrirAlertas() {
    console.log('Botão de alerta clicado');
    const alert = await this.alertas.create({
      cssClass: 'my-custom-class',
      header: 'Qual seu nome?',
      inputs: [
        {
          name: 'nome1',
          type: 'text',
          placeholder: 'Digite seu nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('dados');
          }
        },
        {
          text: 'OK',
          handler: (dados) => {
            //console.log(dados);
            this.nome = dados.nome1;
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
  async apresentarActionSheet() {
    const actionSheet = await this.as.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('trash clicked');
          },
          data: {  
          action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
          data: {
          action: 'share',
                    },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          },
          data: {
          action: 'cancel',

          },
        },
      ],
    });

    await actionSheet.present();
  }
}

