import { cleanUpCtr } from 'react-default-props-context';
import * as Skandha from 'skandha';
import { mapDataToProps } from 'skandha';
import { Display, Highlight, Store } from 'skandha-facets';
import { registerCtr } from 'skandha-mobx';
import { initPosts } from './posts';
import { ChapterT } from '/src/api/types/ChapterT';
import { PostT } from '/src/api/types/PostT';
import { initChapters } from '/src/posts/PostsState/chapters';

export type PropsT = {};

export class PostsState {
  postsCtr = {
    display: new Display<PostT>(),
    highlight: new Highlight<PostT>(),
    store: new Store<PostT>(),
  };

  chaptersCtr = {
    display: new Display<ChapterT>(),
    highlight: new Highlight<ChapterT>(),
    store: new Store<ChapterT>(),
  };

  _postsMapData(props: PropsT) {
    const ctr = this.postsCtr;

    const getPostById = (x: string | undefined) =>
      x ? ctr.display.itemById[x] : undefined;

    mapDataToProps(ctr, {
      highlight: {
        highlightableIds: () => ctr.display.items.map((x: PostT) => x.id),
        item: () => getPostById(ctr.highlight.id),
      },
      display: {
        items: () => ctr.store.items ?? [],
      },
    });
  }

  _chaptersMapData(props: PropsT) {
    const ctr = this.chaptersCtr;

    const getChapterById = (x: string | undefined) =>
      x ? ctr.display.itemById[x] : undefined;

    mapDataToProps(ctr, {
      store: {
        items: () => this.postsCtr.highlight.item?.chapters ?? [],
      },
      highlight: {
        highlightableIds: () => ctr.display.items.map((x: ChapterT) => x.id),
        item: () => getChapterById(ctr.highlight.id),
      },
      display: {
        items: () => ctr.store.items ?? [],
      },
    });
  }

  getSummary() {
    return {
      postsCtr: Skandha.getCtrState(this.postsCtr),
      chaptersCtr: Skandha.getCtrState(this.chaptersCtr),
    };
  }

  destroy() {
    cleanUpCtr(this);
  }

  constructor(props: PropsT) {
    registerCtr({
      ctr: this.postsCtr,
      options: { name: 'PostsState.Posts' },
      initCtr: () => {
        initPosts(this, props);
        this._postsMapData(props);
      },
    });

    registerCtr({
      ctr: this.chaptersCtr,
      options: { name: 'PostsState.Chapters' },
      initCtr: () => {
        initChapters(this, props);
        this._chaptersMapData(props);
      },
    });
  }
}
