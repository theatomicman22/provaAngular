import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [

  {path:"login", component: LoginComponent},
  {path:"pokemon-list", component : PokemonListComponent, canActivate:[AuthGuardService] },
  {path:"sign-up", component: SignUpComponent},
  {path: "**", redirectTo:"pokemon-list"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
