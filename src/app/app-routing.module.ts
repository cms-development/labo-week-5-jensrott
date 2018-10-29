import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDetailComponent } from '../app/article-detail/article-detail.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard] },
  {
    path: 'article/detail/:id',
    component: ArticleDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'article/edit/:id',
    component: EditArticleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-articles',
    component: CreateArticleComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
