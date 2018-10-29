import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles: Article;

  constructor(
    private articlesService: ArticleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService.getArticles().subscribe(
      data => {
        this.articles = data.data;
        console.log(this.articles);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }

  deleteArticle(id): void {
    this.articlesService.deleteArticle(id).subscribe(
      data => {
        console.log(`deleted: ${data}`);
        window.location.reload(); // Refresh the page
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }
}
