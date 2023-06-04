import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Botão', url: '/botao', icon: 'radio-button-on' },
    { title: 'Lista', url: '/lista', icon: 'list' },
    { title: 'Alertas', url: '/alertas', icon: 'alert' },
    { title: 'Infinite', url: '/infinite', icon: 'list' },
    { title: 'Refresher', url: '/refresher', icon: 'refresh' },
    { title: 'Contato', url: '/contato', icon: 'call' },
    { title: 'Sliding', url: '/sliding', icon: 'image' },
    { title: 'Segment', url: '/segment', icon: 'refresh' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
