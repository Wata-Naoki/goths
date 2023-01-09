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
