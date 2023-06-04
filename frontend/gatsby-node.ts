import path from 'path';
import { GatsbyChapterT, getChapterLink } from '/src/api/types/ChapterT';
import { GatsbyPostT } from '/src/api/types/PostT';

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query {
      allMdx {
        nodes {
          id
          body
          frontmatter {
            title
            slug
            type
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const GatsbyChapter = path.resolve(`src/posts/components/GatsbyChapter.tsx`);

  // Get map from directory name to post
  const postByDirName: { [dirName: string]: GatsbyPostT } = {};
  for (const node of queryResults.data.allMdx.nodes) {
    if (node.frontmatter.type === 'post') {
      const post = nodeToPost(node);
      const postPath = path.dirname(post.contentFilePath);
      if (!postByDirName[postPath]) {
        postByDirName[postPath] = post;
      }
    }
  }

  // Create chapters
  const chapters = [];
  const chaptersByDirName: { [dirName: string]: GatsbyChapterT[] } = {};
  for (const node of queryResults.data.allMdx.nodes) {
    if (node.frontmatter.type === 'chapter') {
      const chapter = nodeToChapter(node);
      const chapterPath = path.dirname(chapter.contentFilePath);
      if (!chaptersByDirName[chapterPath]) {
        chaptersByDirName[chapterPath] = [];
      }

      const post = postByDirName[chapterPath];
      chapter.post = post;
      chaptersByDirName[chapterPath].push(chapter);
      chapters.push(chapter);
    }
  }

  // Create a page for each chapter
  const prefix = '/app/src';
  for (const chapter of chapters) {
    const mdxFn = chapter.contentFilePath.slice(prefix.length);
    const chapterPath = path.dirname(chapter.contentFilePath);

    createPage({
      path: getChapterLink(chapter),
      component: GatsbyChapter,
      context: {
        chapter: chapter,
        chapters: chaptersByDirName[chapterPath],
        mdxFn: mdxFn,
      },
    });
  }
};

function nodeToPost(curr: any) {
  return {
    id: curr.id,
    chapters: [],
    ...curr.frontmatter,
    ...curr.internal,
  };
}

function nodeToChapter(curr: any) {
  return {
    id: curr.id,
    mdxBody: curr.body ?? '# Hello',
    ...curr.frontmatter,
    ...curr.internal,
  };
}
