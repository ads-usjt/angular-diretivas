import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lembretes: Array<string> = [];
  lembrete: string;
  defaultSombra = '10px 10px';

  salvar(){
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = '';
  }
}