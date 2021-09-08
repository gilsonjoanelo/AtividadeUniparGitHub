import { ImportanciaVersionamentoComponent } from './views/importancia-versionamento/importancia-versionamento.component';
import { VantagemGitComponent } from './views/vantagem-git/vantagem-git.component';
import { ControleVersionamentoComponent } from './views/controle-versionamento/controle-versionamento.component';
import { VersionamentoSoftwareComponent } from './views/versionamento-software/versionamento-software.component';
import { OqueegitComponent } from './views/oqueegit/oqueegit.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'o-que-e-git', component: OqueegitComponent },
   { path: 'versionamento-software', component: VersionamentoSoftwareComponent },
   { path: 'controle-versionamento', component: ControleVersionamentoComponent },
   { path: 'vantagens-git', component: VantagemGitComponent },
   { path: 'importancia-versionamento', component: ImportanciaVersionamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
