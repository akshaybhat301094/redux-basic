import store from './store';
import { bugAdded, markResolved } from './action';

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch(bugAdded('Bug 1'));
store.dispatch(markResolved(1));

// console.log(store.getState());
