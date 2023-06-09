import classnames from 'classnames';

export const cn = (label: string, ...args: any[]) => {
  return process.env.NODE_ENV === 'production' && label.endsWith('__')
    ? classnames(...args)
    : classnames(label, ...args);
};
