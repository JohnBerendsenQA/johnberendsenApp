import {
  TabRouter,
} from 'react-navigation';
import RecentSearchesTab from './RecentSearchesTab';
import RecentStoriesTab from './RecentStoriesTab';

const HistoryTabRouter = TabRouter(
  {
    RecentStories: {
      screen: RecentStoriesTab,
      path: 'RecentStories',
    },
    RecentSearches: {
      screen: RecentSearchesTab,
      path: 'RecentSearches',
    }
  },
  {
    initialRouteName: 'RecentStories',
  }
);

export default HistoryTabRouter;
