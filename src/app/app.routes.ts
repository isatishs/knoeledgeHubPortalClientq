import { Routes } from '@angular/router';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { BrowseArticlesComponent } from './components/browse-articles/browse-articles.component';
import { SubmitArticleComponent } from './components/submit-article/submit-article.component';
import { ReviewArticleComponent } from './components/review-article/review-article.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    }, {
        path: 'category/create',
        component: CreateCategoryComponent
    },
    {
        path: 'category/list', component: ListCategoryComponent
    },
    {
        path: 'category/edit/:[id]', component: EditCategoryComponent
    },
    {
        path: 'article/browse', component: BrowseArticlesComponent
    },
    {
        path: 'article/submit', component: SubmitArticleComponent
    },
    {
        path: 'article/review', component: ReviewArticleComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'user/list', component: ListUserComponent
    },
    {
        path: '**', component: NotfoundComponent
    }


];
