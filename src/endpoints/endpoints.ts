const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const API_ENDPOINTS = {
  stages: `${BASE_URL}/stages?acf_format=standard&per_page=100`,
  destinations: `${BASE_URL}/destinations?acf_format=standard&per_page=100`,
  singelDestination: (destinationId: string) => {
    return `${BASE_URL}/destinations/${destinationId}?acf_format=standard&per_page=100`;
  },
  pages: `${BASE_URL}/pages?acf_format=standard&per_page=100`,
  page: (pageId: number) => {
    return `${BASE_URL}/pages/${pageId}?acf_format=standard&per_page=100`;
  },
  crewMembers: `${BASE_URL}/crew_members?acf_format=standard&per_page=100`,
  singleCrew: (crewId: number) => {
    return `${BASE_URL}/crew_members/${crewId}?acf_format=standard&per_page=100`;
  },
  blogPosts: `${BASE_URL}/posts?acf_format=standard&per_page=100`,
  post: (postId: number) => {
    return `${BASE_URL}/posts/${postId}?acf_format=standard&per_page=100`;
  },
  categories: `${BASE_URL}/categories`,
  singleCategory: (categoryId: number) => {
    return `${BASE_URL}/categories/${categoryId}`;
  },
  sponsors: `${BASE_URL}/sponsors?acf_format=standard&per_page=100`,
  pressArchive: `${BASE_URL}/press_archive?acf_format=standard`,
};

export default API_ENDPOINTS;
