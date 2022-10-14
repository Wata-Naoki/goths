import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticles($limit: Int) {
    Article(order_by: { createdAt: desc }, limit: $limit) {
      id
      title
      text
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
      ,_set: {id: $id, email: $email, name: $name }
    ) {
      id
      name
      email
    }
  }
`;
