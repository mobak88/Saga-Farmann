const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const API_ENDPOINTS = {
  stages: `${BASE_URL}/stages`,
  destinations: `${BASE_URL}/destinations/?per_page=100`,
  singelDestination: (destinationId: number) => {
    return `${BASE_URL}/destinations/${destinationId}`;
  },
  pages: `${BASE_URL}/pages`,
  page: (pageId: number) => {
    return `${BASE_URL}/pages/${pageId}`;
  },
  crewMembers: `${BASE_URL}/crew_members`,
  singleCrew: (crewId: number) => {
    return `${BASE_URL}/crew_members/${crewId}`;
  },
  blogPosts: `${BASE_URL}/posts`,
  post: (postId: number) => {
    return `${BASE_URL}/posts/${postId}`;
  },
  categories: `${BASE_URL}/categories`,
  singleCategory: (categoryId: number) => {
    return `${BASE_URL}/categories/${categoryId}`;
  },
};

export default API_ENDPOINTS;
