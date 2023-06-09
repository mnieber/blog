import loadable from '@loadable/component';

export const posts = [
  {
    slug: 'compile-env-based-strategy-for-managing-environment-variables',
    title: 'Using compile-env to manage environment variables',
    shortTitle: 'DRY environment variables',
    date: 'January 2023, by Maarten Nieber',
    chapters: [
      {
        slug: 'chapter-1',
        title: 'Introduction',
        component: loadable(
          () => import('/src/content/posts/dry-environment-vars/chapter-1.mdx')
        ),
      },
      {
        slug: 'chapter-2',
        title: 'The dev, prod and deploy environment',
        component: loadable(
          () => import('/src/content/posts/dry-environment-vars/chapter-2.mdx')
        ),
      },
      {
        slug: 'chapter-3',
        title: 'Using compile-env to manage environment variables',
        component: loadable(
          () => import('/src/content/posts/dry-environment-vars/chapter-3.mdx')
        ),
      },
      {
        slug: 'chapter-4',
        title: 'Conclusion',
        component: loadable(
          () => import('/src/content/posts/dry-environment-vars/chapter-4.mdx')
        ),
      },
    ],
  },
  {
    slug: 'using-technical-product-roadmap-create-team-alignment',
    title: 'Using a Technical Product Roadmap to create team alignment',
    shortTitle: 'Backlogs vs Roadmaps',
    date: 'November 2020, by Maarten Nieber',
    chapters: [
      {
        slug: 'chapter-1',
        title: 'Introduction',
        component: loadable(
          () =>
            import('/src/content/posts/technical-product-roadmap/chapter-1.mdx')
        ),
      },
      {
        slug: 'chapter-2',
        title: 'The problem with product backlogs',
        component: loadable(
          () =>
            import('/src/content/posts/technical-product-roadmap/chapter-2.mdx')
        ),
      },
      {
        slug: 'chapter-3',
        title: 'What is a technical product roadmap?',
        component: loadable(
          () =>
            import('/src/content/posts/technical-product-roadmap/chapter-3.mdx')
        ),
      },
      {
        slug: 'chapter-4',
        title: 'The pros and cons of a technical product roadmap',
        component: loadable(
          () =>
            import('/src/content/posts/technical-product-roadmap/chapter-4.mdx')
        ),
      },
      {
        slug: 'chapter-5',
        title: 'Conclusion',
        component: loadable(
          () =>
            import('/src/content/posts/technical-product-roadmap/chapter-5.mdx')
        ),
      },
    ],
  },
  {
    slug: 'arriving-at-simple-code',
    title: 'Arriving at simple code',
    shortTitle: 'Simple code',
    date: 'August 2021, by Maarten Nieber',
    chapters: [
      {
        slug: 'chapter-1',
        title: 'Introduction',
        component: loadable(
          () =>
            import('/src/content/posts/arriving-at-simple-code/chapter-1.mdx')
        ),
      },
    ],
  },
  {
    slug: 'default-props',
    title: 'Default props: an alternative to prop drilling and contexts',
    shortTitle: 'Default props',
    date: 'May 2020, by Maarten Nieber',
    chapters: [
      {
        slug: 'chapter-1',
        title: 'Introduction',
        component: loadable(
          () => import('/src/content/posts/default-props/chapter-1.mdx')
        ),
      },
      {
        slug: 'chapter-2',
        title: 'DefaultPropsProvider and withDefaultProps',
        component: loadable(
          () => import('/src/content/posts/default-props/chapter-2.mdx')
        ),
      },
      {
        slug: 'chapter-3',
        title: 'Advanced topics',
        component: loadable(
          () => import('/src/content/posts/default-props/chapter-3.mdx')
        ),
      },
      {
        slug: 'chapter-4',
        title: 'Conclusion',
        component: loadable(
          () => import('/src/content/posts/default-props/chapter-4.mdx')
        ),
      },
    ],
  },
  {
    slug: 'reusable-behaviours',
    title: 'Skandha: reusable interacting behaviours',
    shortTitle: 'Reusable behaviours',
    date: 'May 2020, by Maarten Nieber',
    chapters: [
      {
        slug: 'chapter-1',
        title: 'Introduction',
        component: loadable(
          () => import('/src/content/posts/skandha/chapter-1.mdx')
        ),
      },
      {
        slug: 'chapter-2',
        title: 'Containers and facets',
        component: loadable(
          () => import('/src/content/posts/skandha/chapter-2.mdx')
        ),
      },
      {
        slug: 'chapter-3',
        title: 'Installing callback functions',
        component: loadable(
          () => import('/src/content/posts/skandha/chapter-3.mdx')
        ),
      },
      {
        slug: 'chapter-4',
        title: 'Discussion and conclusion',
        component: loadable(
          () => import('/src/content/posts/skandha/chapter-4.mdx')
        ),
      },
    ],
  },
  {
    slug: 'page-events',
    title: 'Decoupled navigation event handling',
    shortTitle: 'Url management in React',
    date: 'May 2023, by Maarten Nieber',
    chapters: [
      {
        slug: 'chapter-1',
        title: 'Introduction',
        component: loadable(
          () => import('/src/content/posts/navigation-events/chapter-1.mdx')
        ),
      },
      {
        slug: 'chapter-2',
        title: 'Routes management',
        component: loadable(
          () => import('/src/content/posts/navigation-events/chapter-2.mdx')
        ),
      },
      {
        slug: 'chapter-3',
        title: 'Processing navigation events',
        component: loadable(
          () => import('/src/content/posts/navigation-events/chapter-3.mdx')
        ),
      },
      {
        slug: 'chapter-4',
        title: 'Conclusion',
        component: loadable(
          () => import('/src/content/posts/navigation-events/chapter-4.mdx')
        ),
      },
    ],
  },
];
