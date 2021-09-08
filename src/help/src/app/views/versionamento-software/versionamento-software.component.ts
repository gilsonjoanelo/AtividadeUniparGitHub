import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versionamento-software',
  templateUrl: './versionamento-software.component.html',
  styleUrls: ['./versionamento-software.component.css']
})
export class VersionamentoSoftwareComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'O que é versionamento de software?',
      icon: 'published_with_changes',
      routeUrl: '/versionamento-software'
    };
  }

  ngOnInit(): void {
  }

}
