const API_URLS = {
  node_api: import.meta.env.VITE_NODE_BASE_URL,
  django_api: import.meta.env.VITE_JANGO_BASE_URL,
  csharp_api: import.meta.env.VITE_CSHARP_BASE_URL,
};

export default API_URLS;