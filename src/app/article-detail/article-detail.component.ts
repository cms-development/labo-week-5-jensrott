import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/Article';

import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input()
  article: Article;
  constructor(
    private articlesService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getArticle();
    console.log(this.article);
  }

  getArticle(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.articlesService.getArticle(id).subscribe(
      article => {
        this.article = article;
        console.log(article);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }
}
