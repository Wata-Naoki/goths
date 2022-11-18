/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetArticles($limit: Int) {\n    Article(order_by: { createdAt: desc }, limit: $limit) {\n      id\n      title\n      text\n      status\n      createdAt\n      updatedAt\n      Blog {\n        title\n      }\n    }\n  }\n": types.GetArticlesDocument,
    "\n  query GetBlogArticles($limit: Int, $id: uuid!) {\n    Blog(where: { id: { _eq: $id } }, limit: $limit) {\n      id\n      title\n      Articles {\n        id\n        text\n        title\n        createdAt\n        all_text\n        status\n        User {\n          name\n          id\n          email\n        }\n        Blog {\n          title\n        }\n      }\n    }\n  }\n": types.GetBlogArticlesDocument,
    "\n  query GetArticle($id: uuid!) {\n    Article(where: { id: { _eq: $id } }, order_by: { createdAt: desc }) {\n      id\n      title\n      text\n      createdAt\n      updatedAt\n      all_text\n      status\n      like\n      User {\n        name\n        id\n        email\n      }\n      Blog {\n        title\n      }\n    }\n  }\n": types.GetArticleDocument,
    "\n  query GetBlogs($limit: Int) {\n    Blog(order_by: { createdAt: desc }, limit: $limit) {\n      id\n      title\n      blog_users {\n        User {\n          name\n          id\n        }\n      }\n    }\n  }\n": types.GetBlogsDocument,
    "\n  query GetUserBlogs($email: String, $limit: Int) {\n    Blog(\n      where: { blog_users: { User: { email: { _eq: $email } } } }\n      order_by: { createdAt: desc }\n      limit: $limit\n    ) {\n      id\n      title\n      blog_users {\n        User {\n          name\n        }\n      }\n    }\n  }\n": types.GetUserBlogsDocument,
    "\n  query GetBlog($id: uuid!, $limit: Int) {\n    Blog(where: { id: { _eq: $id } }) {\n      id\n      title\n      updatedAt\n      blog_users {\n        User {\n          name\n          id\n        }\n      }\n      Articles(\n        order_by: { createdAt: desc }\n        limit: $limit\n        where: { status: { _eq: true } }\n      ) {\n        id\n        createdAt\n        title\n        text\n        all_text\n        status\n      }\n    }\n  }\n": types.GetBlogDocument,
    "\n  query GetUser($email: String!) {\n    User(where: { email: { _eq: $email } }) {\n      id\n      name\n      email\n      createdAt\n    }\n  }\n": types.GetUserDocument,
    "\n  mutation UpdateUser($id: uuid!, $email: String!, $name: String!) {\n    update_User_by_pk(\n      pk_columns: { id: $id }\n      _set: { id: $id, email: $email, name: $name }\n    ) {\n      id\n      name\n      email\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation UpdateDeleteArticle($id: uuid!, $status: Boolean!) {\n    update_Article_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n      title\n      createdAt\n      status\n    }\n  }\n": types.UpdateDeleteArticleDocument,
    "\n  mutation UpdateArticle(\n    $id: uuid!\n    $title: String!\n    $text: String\n    $all_text: String\n  ) {\n    update_Article_by_pk(\n      pk_columns: { id: $id }\n      _set: { title: $title, text: $text, all_text: $all_text }\n    ) {\n      id\n      title\n      text\n      all_text\n    }\n  }\n": types.UpdateArticleDocument,
    "\n  mutation CreateArticleOne(\n    $all_text: String!\n    $blog_id: uuid!\n    $text: String!\n    $title: String!\n    $user_id: uuid!\n  ) {\n    insert_Article_one(\n      object: {\n        title: $title\n        text: $text\n        all_text: $all_text\n        blog_id: $blog_id\n        user_id: $user_id\n      }\n    ) {\n      id\n      title\n      text\n      all_text\n      user_id\n      blog_id\n    }\n  }\n": types.CreateArticleOneDocument,
    "\n  query BlogUser($id: uuid) {\n    blog_user(where: { blog_id: { _eq: $id } }) {\n      user_id\n    }\n  }\n": types.BlogUserDocument,
    "\n  query GetBlogOne($id: uuid!) {\n    Blog(where: { id: { _eq: $id } }) {\n      id\n      title\n      updatedAt\n    }\n  }\n": types.GetBlogOneDocument,
    "\n  mutation UpdateBlogOne($id: uuid!, $title: String!) {\n    update_Blog_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {\n      title\n    }\n  }\n": types.UpdateBlogOneDocument,
    "\n  mutation DeleteBlogOne($id: uuid!) {\n    delete_Blog_by_pk(id: $id) {\n      id\n      title\n    }\n  }\n": types.DeleteBlogOneDocument,
    "\n  mutation CreateUserOne($email: String!, $name: String!, $blog_id: uuid!) {\n    insert_User_one(\n      object: {\n        blog_users: { data: { blog_id: $blog_id } }\n        name: $name\n        email: $email\n      }\n    ) {\n      id\n      name\n      email\n    }\n  }\n": types.CreateUserOneDocument,
    "\n  query GetBlogEditors($blog_id: uuid!) {\n    User(where: { blog_users: { blog_id: { _eq: $blog_id } } }) {\n      id\n      name\n      email\n    }\n  }\n": types.GetBlogEditorsDocument,
    "\n  mutation DeleteUserOne($id: uuid!) {\n    delete_User_by_pk(id: $id) {\n      id\n    }\n  }\n": types.DeleteUserOneDocument,
    "\n  query GetBlogsModal($email: String) {\n    Blog(where: { blog_users: { User: { email: { _eq: $email } } } }) {\n      id\n      title\n    }\n  }\n": types.GetBlogsModalDocument,
    "\n  mutation UpdateArticleLike($id: uuid!, $like: Int!) {\n    update_Article_by_pk(pk_columns: { id: $id }, _set: { like: $like }) {\n      like\n      title\n      status\n    }\n  }\n": types.UpdateArticleLikeDocument,
    "\n  query GetSearchArticles($_iregex: String!, $limit: Int) {\n    Article(\n      where: { title: { _iregex: $_iregex } }\n      order_by: { createdAt: desc }\n      limit: $limit\n    ) {\n      id\n      title\n      text\n      createdAt\n    }\n  }\n": types.GetSearchArticlesDocument,
};

export function graphql(source: "\n  query GetArticles($limit: Int) {\n    Article(order_by: { createdAt: desc }, limit: $limit) {\n      id\n      title\n      text\n      status\n      createdAt\n      updatedAt\n      Blog {\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArticles($limit: Int) {\n    Article(order_by: { createdAt: desc }, limit: $limit) {\n      id\n      title\n      text\n      status\n      createdAt\n      updatedAt\n      Blog {\n        title\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetBlogArticles($limit: Int, $id: uuid!) {\n    Blog(where: { id: { _eq: $id } }, limit: $limit) {\n      id\n      title\n      Articles {\n        id\n        text\n        title\n        createdAt\n        all_text\n        status\n        User {\n          name\n          id\n          email\n        }\n        Blog {\n          title\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlogArticles($limit: Int, $id: uuid!) {\n    Blog(where: { id: { _eq: $id } }, limit: $limit) {\n      id\n      title\n      Articles {\n        id\n        text\n        title\n        createdAt\n        all_text\n        status\n        User {\n          name\n          id\n          email\n        }\n        Blog {\n          title\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetArticle($id: uuid!) {\n    Article(where: { id: { _eq: $id } }, order_by: { createdAt: desc }) {\n      id\n      title\n      text\n      createdAt\n      updatedAt\n      all_text\n      status\n      like\n      User {\n        name\n        id\n        email\n      }\n      Blog {\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArticle($id: uuid!) {\n    Article(where: { id: { _eq: $id } }, order_by: { createdAt: desc }) {\n      id\n      title\n      text\n      createdAt\n      updatedAt\n      all_text\n      status\n      like\n      User {\n        name\n        id\n        email\n      }\n      Blog {\n        title\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetBlogs($limit: Int) {\n    Blog(order_by: { createdAt: desc }, limit: $limit) {\n      id\n      title\n      blog_users {\n        User {\n          name\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlogs($limit: Int) {\n    Blog(order_by: { createdAt: desc }, limit: $limit) {\n      id\n      title\n      blog_users {\n        User {\n          name\n          id\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetUserBlogs($email: String, $limit: Int) {\n    Blog(\n      where: { blog_users: { User: { email: { _eq: $email } } } }\n      order_by: { createdAt: desc }\n      limit: $limit\n    ) {\n      id\n      title\n      blog_users {\n        User {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserBlogs($email: String, $limit: Int) {\n    Blog(\n      where: { blog_users: { User: { email: { _eq: $email } } } }\n      order_by: { createdAt: desc }\n      limit: $limit\n    ) {\n      id\n      title\n      blog_users {\n        User {\n          name\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetBlog($id: uuid!, $limit: Int) {\n    Blog(where: { id: { _eq: $id } }) {\n      id\n      title\n      updatedAt\n      blog_users {\n        User {\n          name\n          id\n        }\n      }\n      Articles(\n        order_by: { createdAt: desc }\n        limit: $limit\n        where: { status: { _eq: true } }\n      ) {\n        id\n        createdAt\n        title\n        text\n        all_text\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlog($id: uuid!, $limit: Int) {\n    Blog(where: { id: { _eq: $id } }) {\n      id\n      title\n      updatedAt\n      blog_users {\n        User {\n          name\n          id\n        }\n      }\n      Articles(\n        order_by: { createdAt: desc }\n        limit: $limit\n        where: { status: { _eq: true } }\n      ) {\n        id\n        createdAt\n        title\n        text\n        all_text\n        status\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetUser($email: String!) {\n    User(where: { email: { _eq: $email } }) {\n      id\n      name\n      email\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetUser($email: String!) {\n    User(where: { email: { _eq: $email } }) {\n      id\n      name\n      email\n      createdAt\n    }\n  }\n"];
export function graphql(source: "\n  mutation UpdateUser($id: uuid!, $email: String!, $name: String!) {\n    update_User_by_pk(\n      pk_columns: { id: $id }\n      _set: { id: $id, email: $email, name: $name }\n    ) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($id: uuid!, $email: String!, $name: String!) {\n    update_User_by_pk(\n      pk_columns: { id: $id }\n      _set: { id: $id, email: $email, name: $name }\n    ) {\n      id\n      name\n      email\n    }\n  }\n"];
export function graphql(source: "\n  mutation UpdateDeleteArticle($id: uuid!, $status: Boolean!) {\n    update_Article_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n      title\n      createdAt\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateDeleteArticle($id: uuid!, $status: Boolean!) {\n    update_Article_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n      title\n      createdAt\n      status\n    }\n  }\n"];
export function graphql(source: "\n  mutation UpdateArticle(\n    $id: uuid!\n    $title: String!\n    $text: String\n    $all_text: String\n  ) {\n    update_Article_by_pk(\n      pk_columns: { id: $id }\n      _set: { title: $title, text: $text, all_text: $all_text }\n    ) {\n      id\n      title\n      text\n      all_text\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateArticle(\n    $id: uuid!\n    $title: String!\n    $text: String\n    $all_text: String\n  ) {\n    update_Article_by_pk(\n      pk_columns: { id: $id }\n      _set: { title: $title, text: $text, all_text: $all_text }\n    ) {\n      id\n      title\n      text\n      all_text\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateArticleOne(\n    $all_text: String!\n    $blog_id: uuid!\n    $text: String!\n    $title: String!\n    $user_id: uuid!\n  ) {\n    insert_Article_one(\n      object: {\n        title: $title\n        text: $text\n        all_text: $all_text\n        blog_id: $blog_id\n        user_id: $user_id\n      }\n    ) {\n      id\n      title\n      text\n      all_text\n      user_id\n      blog_id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateArticleOne(\n    $all_text: String!\n    $blog_id: uuid!\n    $text: String!\n    $title: String!\n    $user_id: uuid!\n  ) {\n    insert_Article_one(\n      object: {\n        title: $title\n        text: $text\n        all_text: $all_text\n        blog_id: $blog_id\n        user_id: $user_id\n      }\n    ) {\n      id\n      title\n      text\n      all_text\n      user_id\n      blog_id\n    }\n  }\n"];
export function graphql(source: "\n  query BlogUser($id: uuid) {\n    blog_user(where: { blog_id: { _eq: $id } }) {\n      user_id\n    }\n  }\n"): (typeof documents)["\n  query BlogUser($id: uuid) {\n    blog_user(where: { blog_id: { _eq: $id } }) {\n      user_id\n    }\n  }\n"];
export function graphql(source: "\n  query GetBlogOne($id: uuid!) {\n    Blog(where: { id: { _eq: $id } }) {\n      id\n      title\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetBlogOne($id: uuid!) {\n    Blog(where: { id: { _eq: $id } }) {\n      id\n      title\n      updatedAt\n    }\n  }\n"];
export function graphql(source: "\n  mutation UpdateBlogOne($id: uuid!, $title: String!) {\n    update_Blog_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBlogOne($id: uuid!, $title: String!) {\n    update_Blog_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {\n      title\n    }\n  }\n"];
export function graphql(source: "\n  mutation DeleteBlogOne($id: uuid!) {\n    delete_Blog_by_pk(id: $id) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteBlogOne($id: uuid!) {\n    delete_Blog_by_pk(id: $id) {\n      id\n      title\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateUserOne($email: String!, $name: String!, $blog_id: uuid!) {\n    insert_User_one(\n      object: {\n        blog_users: { data: { blog_id: $blog_id } }\n        name: $name\n        email: $email\n      }\n    ) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserOne($email: String!, $name: String!, $blog_id: uuid!) {\n    insert_User_one(\n      object: {\n        blog_users: { data: { blog_id: $blog_id } }\n        name: $name\n        email: $email\n      }\n    ) {\n      id\n      name\n      email\n    }\n  }\n"];
export function graphql(source: "\n  query GetBlogEditors($blog_id: uuid!) {\n    User(where: { blog_users: { blog_id: { _eq: $blog_id } } }) {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  query GetBlogEditors($blog_id: uuid!) {\n    User(where: { blog_users: { blog_id: { _eq: $blog_id } } }) {\n      id\n      name\n      email\n    }\n  }\n"];
export function graphql(source: "\n  mutation DeleteUserOne($id: uuid!) {\n    delete_User_by_pk(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUserOne($id: uuid!) {\n    delete_User_by_pk(id: $id) {\n      id\n    }\n  }\n"];
export function graphql(source: "\n  query GetBlogsModal($email: String) {\n    Blog(where: { blog_users: { User: { email: { _eq: $email } } } }) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query GetBlogsModal($email: String) {\n    Blog(where: { blog_users: { User: { email: { _eq: $email } } } }) {\n      id\n      title\n    }\n  }\n"];
export function graphql(source: "\n  mutation UpdateArticleLike($id: uuid!, $like: Int!) {\n    update_Article_by_pk(pk_columns: { id: $id }, _set: { like: $like }) {\n      like\n      title\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateArticleLike($id: uuid!, $like: Int!) {\n    update_Article_by_pk(pk_columns: { id: $id }, _set: { like: $like }) {\n      like\n      title\n      status\n    }\n  }\n"];
export function graphql(source: "\n  query GetSearchArticles($_iregex: String!, $limit: Int) {\n    Article(\n      where: { title: { _iregex: $_iregex } }\n      order_by: { createdAt: desc }\n      limit: $limit\n    ) {\n      id\n      title\n      text\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetSearchArticles($_iregex: String!, $limit: Int) {\n    Article(\n      where: { title: { _iregex: $_iregex } }\n      order_by: { createdAt: desc }\n      limit: $limit\n    ) {\n      id\n      title\n      text\n      createdAt\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;