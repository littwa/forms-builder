import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'anypipe' })
export class AnyPippe implements PipeTransform {
  transform(
    posts: { title: string; text: string }[],
    filt: string,
    field: string = 'title'
  ): { title: string; text: string }[] {
    if (!filt.trim()) {
      return posts;
    }

    return posts.filter((el) =>
      el[field].toLowerCase().includes(filt.toLowerCase())
    );
  }
}
