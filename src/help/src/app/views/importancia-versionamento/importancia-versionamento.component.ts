import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importancia-versionamento',
  templateUrl: './importancia-versionamento.component.html',
  styleUrls: ['./importancia-versionamento.component.css']
})
export class ImportanciaVersionamentoComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Qual a importância da utilização do controle de versionamento no desenvolvimento de um software?',
      icon: 'published_with_changes',
      routeUrl: '/importancia-versionamento'
    };
  }

  ngOnInit(): void {
  }

}
