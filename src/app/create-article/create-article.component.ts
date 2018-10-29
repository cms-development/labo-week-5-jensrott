import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/Article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article: Article = { id: '', title: '', text: '' };
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {}

  createArticle(title, text): void {
    this.articleService.createArticle(title, text).subscribe(
      article => {
        this.article = article;
        this.router.navigate(['/articles']);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }
}
