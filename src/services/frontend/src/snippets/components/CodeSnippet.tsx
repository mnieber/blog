import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { L } from '/src/frames/layout';
import { cn } from '/src/utils/classnames';

// Import styles
import './CodeSnippet.scss';

export type PropsT = {
  code: string;
  addMb?: boolean;
  title?: string;
  lang?: string;
};

export const CodeSnippet = (props: PropsT) => {
  return (
    <div
      className={cn('CodeSnippet', L.col.banner(), props.addMb ? 'mb-4' : '')}
    >
      {props.title && (
        <div className="CodeSnippet__Title self-start z-10">{props.title}</div>
      )}
      <SyntaxHighlighter
        language={props.lang ?? 'tsx'}
        style={oneLight}
        customStyle={{ fontSize: '18px' }}
      >
        {props.code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};
