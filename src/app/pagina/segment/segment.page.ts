import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
escolha = 'celular'
  constructor() { }

  ngOnInit() {
  }
  alterar(event: any){
      //console.log("Alterou")
      this.escolha = event.detail.value;
  }


}
