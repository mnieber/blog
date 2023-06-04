import { observable } from 'mobx';

export const flags = observable({
  logSkandha: false,
  logStateProviders: false,
  logQueries: false,
});
