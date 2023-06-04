import React from 'react';
import Seo from '/src/components/Seo';
import { AphorismsView } from '/src/dashboard/components/AphorismsView';

const AphorismsPage = () => {
  return <AphorismsView />;
};

export const Head = () => <Seo />;

export default AphorismsPage;
