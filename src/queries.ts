import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticles($limit: Int, $offset: Int) {
    Article(order_by: { createdAt: desc }, limit: $limit, offset: $offset) {
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
    Article_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const GET_BLOG_ARTICLES = gql`
  query GetBlogArticles($limit: Int, $id: uuid!) {
    Blog(
      where: { id: { _eq: $id } }
      limit: $limit
      order_by: { createdAt: desc }
    ) {
      id
      title
      Articles(limit: $limit, order_by: { createdAt: desc }) {
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
      Articles_aggregate {
        aggregate {
          count
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
      like
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
  query GetBlogs($limit: Int, $offset: Int) {
    Blog(
      order_by: { createdAt: desc }
      limit: $limit
      offset: $offset
      where: { Articles_aggregate: { count: { predicate: { _gte: 1 } } } }
    ) {
      id
      title
      blog_users {
        User {
          name
          id
        }
      }
    }
    Blog_aggregate(
      where: { Articles_aggregate: { count: { predicate: { _gte: 1 } } } }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_USER_BLOGS = gql`
  query GetUserBlogs($email: String, $limit: Int, $offset: Int) {
    Blog(
      where: { blog_users: { User: { email: { _eq: $email } } } }
      order_by: { createdAt: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      title
      blog_users {
        User {
          name
        }
      }
    }
    Blog_aggregate(
      where: { blog_users: { User: { email: { _eq: $email } } } }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($id: uuid!, $limit: Int, $offset: Int) {
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
        offset: $offset
        where: { status: { _eq: true } }
      ) {
        id
        createdAt
        title
        text
        all_text
        status
      }
      Articles_aggregate(where: { status: { _eq: true } }) {
        aggregate {
          count
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
    User(
      where: { blog_users: { blog_id: { _eq: $blog_id } } }
      order_by: { name: asc }
    ) {
      id
      name
      email
      blog_users(where: { Blog: { id: { _eq: $blog_id } } }) {
        id
      }
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
  query GetBlogsModal($email: String, $id: uuid!) {
    Blog(
      where: { blog_users: { User: { email: { _eq: $email } } } }
      order_by: { updatedAt: desc }
    ) {
      id
      title
    }
    Blog_by_pk(id: $id) {
      id
      title
    }
  }
`;

// export const UPDATE_ARTICLE_LIKE = gql`
//   mutation UpdateArticleLike(
//     $id: uuid!
//     $like: Int!
//     $user_favorite_articles_id: uuid
//     $status: Boolean
//   ) {
//     update_Article_by_pk(
//       pk_columns: { id: $id }
//       _set: {
//         like: $like
//         user_favorite_articles_id: $user_favorite_articles_id
//         status: $status
//       }
//     ) {
//       like
//       title
//       status
//     }
//   }
// `;

export const GET_SEARCH_ARTICLES = gql`
  query GetSearchArticles($_iregex: String!, $limit: Int) {
    Article(
      where: { title: { _iregex: $_iregex } }
      order_by: { createdAt: desc }
      limit: $limit
    ) {
      id
      title
      text
      createdAt
    }
    Article_aggregate(where: { title: { _iregex: $_iregex } }) {
      aggregate {
        count
      }
    }
  }
`;

export const CREATE_BLOG = gql`
  mutation CreateBlog($user_id: uuid!, $title: String!) {
    insert_Blog_one(
      object: { blog_users: { data: { user_id: $user_id } }, title: $title }
    ) {
      id
      title
    }
  }
`;

//ex) uuid = "84eebb47-a9c1-488c-90bb-2143b4890ec6"
export const DELETE_FAVORITE_ARTICLE = gql`
  mutation deleteFavoriteArticles($id: uuid!) {
    delete_Article_by_pk(id: $id) {
      id
      title
    }
  }
`;

export const CREATE_ADMIN_USER_ONE = gql`
  mutation CreateAdminUserOne($name: String!, $email: String!) {
    insert_User_one(object: { name: $name, email: $email }) {
      id
      name
      email
      createdAt
    }
  }
`;

// gql`
//   fragment GetUserFavoritesArticles on Article {
//     id
//     text
//     title
//     status
//     like
//     createdAt
//     updatedAt
//     all_text
//     Blog {
//       title
//     }
//   }
// `;

//お気に入り記事の取得
export const GET_USER_FAVORITES_ARTICLES = gql`
  query GetUserFavoritesArticles($id: uuid!, $limit: Int, $offset: Int) {
    Article(
      where: { user_favorite_article_ids: { user_id: { _eq: $id } } }
      order_by: { createdAt: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      text
      title
      status
      like
      createdAt
      updatedAt
      all_text
      Blog {
        title
      }
    }
    Article_aggregate(
      where: { user_favorite_article_ids: { user_id: { _eq: $id } } }
    ) {
      aggregate {
        count
      }
    }
  }
`;

// お気に入り記事の追加
export const CREATE_USER_FAVORITES_ARTICLES = gql`
  mutation CreateUserFavoriteArticles($article_id: uuid!, $user_id: uuid!) {
    insert_user_favorite_article_id_one(
      object: { article_id: $article_id, user_id: $user_id }
    ) {
      id
    }
  }
`;
export const DELETE_USER_FAVORITES_ARTICLES = gql`
  mutation DeleteUserFavoriteArticles($id: uuid!) {
    delete_user_favorite_article_id_by_pk(id: $id) {
      id
    }
  }
`;

export const GET_USER_FAVORITES_ARTICLE_TABLE = gql`
  query UserFavoriteArticleId($id: uuid!) {
    user_favorite_article_id(where: { user_id: { _eq: $id } }) {
      id
      user_id
      article_id
    }
  }
`;

export const DELETE_BLOG_USER = gql`
  mutation DeleteBlogUser($id: uuid!) {
    delete_blog_user_by_pk(id: $id) {
      id
    }
  }
`;
