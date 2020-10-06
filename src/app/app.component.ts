import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-diretivas';
  lembretes: Array<string> = [];
  lembrete: string;

  salvar(){
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = '';
  }
}