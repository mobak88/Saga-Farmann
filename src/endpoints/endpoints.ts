const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const API_ENDPOINTS = {
  stages: `${BASE_URL}/stages?per_page=100`,
  destinations: `${BASE_URL}/destinations/?per_page=100`,
  singelDestination: (destinationId: number) => {
    return `${BASE_URL}/destinations/${destinationId}`;
  },
  pages: `${BASE_URL}/pages`,
  page: (pageId: number) => {
    return `${BASE_URL}/pages/${pageId}?acf_format=standard`;
  },
  crewMembers: `${BASE_URL}/crew_members`,
  singleCrew: (crewId: number) => {
    return `${BASE_URL}/crew_members/${crewId}?acf_format=standard`;
  },
  blogPosts: `${BASE_URL}/posts?acf_format=standard`,
  post: (postId: number) => {
    return `${BASE_URL}/posts/${postId}?acf_format=standard`;
  },
  categories: `${BASE_URL}/categories`,
  singleCategory: (categoryId: number) => {
    return `${BASE_URL}/categories/${categoryId}`;
  },
  sponsors: `${BASE_URL}/sponsors`,
};

export default API_ENDPOINTS;
