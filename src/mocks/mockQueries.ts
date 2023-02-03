import { gql } from "@apollo/client";

export const BLOGS_QUERY = gql`
  query blogs {
    blogs {
      articles {
        title
        users
        createAt
        text
      }
    }
  }
`;

export const ARTICLES_QUERY = gql`
  query posts($first: Int!, $page: int!) {
    posts(first: $first, page: $page) {
      articles {
        title
        users
        createAt
        text
      }
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation DeleteBlog($blog: ID!) {
    DeleteBlog(blog: $blog) {
      mockAdminBlogsArticles {
        blog
      }
    }
  }
`;

export const FAVORITES_QUERY = gql`
  query favoriteArticles {
    favoriteArticles {
      mockFavoriteArticles {
        title
        users
        createAt
        text
      }
    }
  }
`;
export const ARTICLESBYMYBLOG_QUERY = gql`
  query myBlogsByUser {
    myBlogsByUser {
      mockMyBlogs {
        id
        title
        user
      }
    }
  }
`;

export const ARTICLESBYBLOG_QUERY = gql`
  query blogsByUser {
    blogsByUser {
      mockAdminBlogs {
        id
        title
        user
      }
    }
  }
`;

export const BLOG_CHOICE_QUERY = gql`
  query blogChoice {
    blogChoice {
      mockBlogChoice {
        mockMyBlogs {
          id
        }
        blogName
      }
    }
  }
`;

export const SEARCHE_QUERY = gql`
  query search {
    search {
      mockSearch {
        title
        users
        createAt
        text
      }
    }
  }
`;
export const ADMINARTICLESBYBLOG_QUERY = gql`
  query adminArticlesByBlog {
    adminArticlesByBlog {
      mockAdminBlogsArticles {
        mockMyBlogs {
          id
        }
        blog
        id
        title
        user
        createAt
        text3
      }
    }
  }
`;
export const BLOGIDARTICLES_QUERY = gql`
  query articlesByBlog($blogId: String!) {
    articlesByBlog {
      mockBlogsIdArticles(blogId: $blogId) {
        id
        articleId
        blog
        title
        users
        createAt
        text
      }
    }
  }
`;
export const ADMIN_TABLE_USERS_QUERY = gql`
  query adminTableUsers {
    adminTableUsers {
      mockTableUsers {
        mockMyBlogs {
          id
        }
        id
        name
        email
        delete
      }
    }
  }
`;

export const DELETE_EDITOR = gql`
  mutation DeleteEditor($id: ID!) {
    DeleteEditor(id: $id) {
      mockTableUsers {
        id
      }
    }
  }
`;
