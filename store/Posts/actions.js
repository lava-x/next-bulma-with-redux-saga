// ========================= ACTIONS
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// ========================= DISPATCHERS
export const dispatchRequestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit,
});

export const dispatchReceivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: !!json ? json.data.children.map((child) => child.data) : [],
  receivedAt: Date.now(),
});
