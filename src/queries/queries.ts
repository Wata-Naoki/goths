import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticles($limit: Int) {
    Article(order_by: { createdAt: desc }, limit: $limit) {
      id
      title
      text
      status
      createdAt
      updatedAt
      Blog {
        title
      }
    }
  }
`;

export const GET_BLOG_ARTICLES = gql`
  query GetBlogArticles($limit: Int, $id: uuid!) {
    Blog(where: { id: { _eq: $id } }, limit: $limit) {
      id
      title
      Articles {
        id
        text
        title
        createdAt
        all_text
        status
        User {
          name
          id
          email
        }
        Blog {
          title
        }
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle($id: uuid!) {
    Article(where: { id: { _eq: $id } }, order_by: { createdAt: desc }) {
      id
      title
      text
      createdAt
      updatedAt
      all_text
      status
      User {
        name
        id
        email
      }
      Blog {
        title
      }
    }
  }
`;

export const GET_BLOGS = gql`
  query GetBlogs($limit: Int) {
    Blog(order_by: { createdAt: desc }, limit: $limit) {
      id
      title
      blog_users {
        User {
          name
          id
        }
      }
    }
  }
`;

export const GET_USER_BLOGS = gql`
  query GetUserBlogs($id: uuid, $limit: Int) {
    Blog(
      where: { blog_users: { User: { id: { _eq: $id } } } }
      order_by: { createdAt: desc }
      limit: $limit
    ) {
      id
      title
      blog_users {
        User {
          name
        }
      }
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($id: uuid!, $limit: Int) {
    Blog(where: { id: { _eq: $id } }) {
      id
      title
      updatedAt
      blog_users {
        User {
          name
          id
        }
      }
      Articles(
        order_by: { createdAt: desc }
        limit: $limit
        where: { status: { _eq: true } }
      ) {
        id
        createdAt
        title
        text
        all_text
        status
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($email: String!) {
    User(where: { email: { _eq: $email } }) {
      id
      name
      email
      createdAt
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: uuid!, $email: String!, $name: String!) {
    update_User_by_pk(
      pk_columns: { id: $id }
      _set: { id: $id, email: $email, name: $name }
    ) {
      id
      name
      email
    }
  }
`;

export const UPDATE_DELETE_ARTICLE = gql`
  mutation UpdateDeleteArticle($id: uuid!, $status: Boolean!) {
    update_Article_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      title
      createdAt
      status
    }
  }
`;

/* 
mutation MyMutation($id: uuid) {
  delete_Article_by_pk(id: $id) {
    id
  }
}

*/
