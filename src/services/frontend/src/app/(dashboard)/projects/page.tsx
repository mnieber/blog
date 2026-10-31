'use client';

import Foerderfinder from './foerderfinder.mdx';
import Vidlito from './vidlito.mdx';
import { ProjectsView } from '/src/projects/components/ProjectsView';

export default function Page() {
  return (
    <ProjectsView>
      <Vidlito />
      <Foerderfinder />
    </ProjectsView>
  );
}
