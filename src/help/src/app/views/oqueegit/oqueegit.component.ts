import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oqueegit',
  templateUrl: './oqueegit.component.html',
  styleUrls: ['./oqueegit.component.css']
})
export class OqueegitComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'O que é Git?',
      icon: 'published_with_changes',
      routeUrl: '/o-que-e-git'
    };
  }

  ngOnInit(): void {
  }

}
