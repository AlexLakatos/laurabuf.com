import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DatePipe],
  template: `
    <main>
      <h1>Blog Archive</h1>

      <section>
        @for (post of posts; track post.attributes.slug) {
        <div class="post">
          <time class="post__date" [attr.dateTime]="post.attributes.date">{{
            post.attributes.date | date : 'short'
          }}</time>
          <h2 class="post__title">
            <a [routerLink]="['/blog/', post.attributes.slug]">{{ post.attributes.title }}</a>
          </h2>
          <p class="post__desc">{{ post.attributes.description }}</p>
        </div>
        }
      </section>
    </main>
  `,
  styles: `
    h1 {
      margin-block-end: 0.5em;
    }

    h2 {
      margin-block: 0.5em;
    }

    .post {
      margin-block-end: 2em;
    }
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
