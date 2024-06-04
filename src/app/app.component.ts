import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { HomeComponent } from './components/home/home.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { SubmitArticleComponent } from './components/submit-article/submit-article.component';
import { ReviewArticleComponent } from './components/review-article/review-article.component';
import { BrowseArticlesComponent } from './components/browse-articles/browse-articles.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, FooterComponent,
    CreateCategoryComponent, HomeComponent, EditCategoryComponent, SubmitArticleComponent,
    ReviewArticleComponent, BrowseArticlesComponent, RegisterComponent, LoginComponent, NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'knowledge-hub-portal-web-client';
}
