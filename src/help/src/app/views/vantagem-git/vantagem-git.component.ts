import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vantagem-git',
  templateUrl: './vantagem-git.component.html',
  styleUrls: ['./vantagem-git.component.css']
})
export class VantagemGitComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Quais as vantagens do Git?',
      icon: 'published_with_changes',
      routeUrl: '/vantagens-git'
    };
  }

  ngOnInit(): void {
  }

}
