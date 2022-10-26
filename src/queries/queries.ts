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

export const UPDATE_ARTICLE = gql`
  mutation UpdateArticle(
    $id: uuid!
    $title: String!
    $text: String
    $all_text: String
  ) {
    update_Article_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, text: $text, all_text: $all_text }
    ) {
      id
      title
      text
      all_text
    }
  }
`;

export const CREATE_ARTICLE = gql`
  mutation CreateArticleOne(
    $all_text: String!
    $blog_id: uuid!
    $text: String!
    $title: String!
    $user_id: uuid!
  ) {
    insert_Article_one(
      object: {
        title: $title
        text: $text
        all_text: $all_text
        blog_id: $blog_id
        user_id: $user_id
      }
    ) {
      id
      title
      text
      all_text
      user_id
      blog_id
    }
  }
`;

export const GET_BLOG_USER = gql`
  query BlogUser($id: uuid) {
    blog_user(where: { blog_id: { _eq: $id } }) {
      user_id
    }
  }
`;

export const GET_BLOG_ONE = gql`
  query GetBlogOne($id: uuid!) {
    Blog(where: { id: { _eq: $id } }) {
      id
      title
      updatedAt
    }
  }
`;

export const UPDATE_BLOG_ONE = gql`
  mutation UpdateBlogOne($id: uuid!, $title: String!) {
    update_Blog_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      title
    }
  }
`;

export const DELETE_BLOG_ONE = gql`
  mutation DeleteBlogOne($id: uuid!) {
    delete_Blog_by_pk(id: $id) {
      id
      title
    }
  }
`;

export const CREATE_USER_ONE = gql`
  mutation CreateUserOne($email: String!, $name: String!, $blog_id: uuid!) {
    insert_User_one(
      object: {
        blog_users: { data: { blog_id: $blog_id } }
        name: $name
        email: $email
      }
    ) {
      id
      name
      email
    }
  }
`;

export const GET_BLOG_EDITORS = gql`
  query GetBlogEditors($blog_id: uuid!) {
    User(where: { blog_users: { blog_id: { _eq: $blog_id } } }) {
      id
      name
      email
    }
  }
`;

export const DELETE_USER_ONE = gql`
  mutation DeleteUserOne($id: uuid!) {
    delete_User_by_pk(id: $id) {
      id
    }
  }
`;

export const GET_BLOGS_MODAL = gql`
  query GetBlogsModal($id: uuid) {
    Blog(where: { blog_users: { User: { id: { _eq: $id } } } }) {
      id
      title
    }
  }
`;