import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-versionamento',
  templateUrl: './controle-versionamento.component.html',
  styleUrls: ['./controle-versionamento.component.css']
})
export class ControleVersionamentoComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Por que utilizar o Git para controle de versionamento?',
      icon: 'published_with_changes',
      routeUrl: '/controle-versionamento'
    };
  }

  ngOnInit(): void {
  }

}
