/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** columns and relationships of "Article" */
export type Article = {
  __typename?: 'Article';
  /** An object relationship */
  Blog?: Maybe<Blog>;
  /** An object relationship */
  User?: Maybe<User>;
  all_text: Scalars['String'];
  blog_id?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  like?: Maybe<Scalars['Int']>;
  status: Scalars['Boolean'];
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  user_favorite_article_ids: Array<User_Favorite_Article_Id>;
  /** An aggregate relationship */
  user_favorite_article_ids_aggregate: User_Favorite_Article_Id_Aggregate;
  user_favorite_articles_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "Article" */
export type ArticleUser_Favorite_Article_IdsArgs = {
  distinct_on?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Favorite_Article_Id_Order_By>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};


/** columns and relationships of "Article" */
export type ArticleUser_Favorite_Article_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Favorite_Article_Id_Order_By>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};

/** aggregated selection of "Article" */
export type Article_Aggregate = {
  __typename?: 'Article_aggregate';
  aggregate?: Maybe<Article_Aggregate_Fields>;
  nodes: Array<Article>;
};

export type Article_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Article_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Article_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Article_Aggregate_Bool_Exp_Count>;
};

export type Article_Aggregate_Bool_Exp_Bool_And = {
  arguments: Article_Select_Column_Article_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Article_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Article_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Article_Select_Column_Article_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Article_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Article_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Article_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Article_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Article" */
export type Article_Aggregate_Fields = {
  __typename?: 'Article_aggregate_fields';
  avg?: Maybe<Article_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Article_Max_Fields>;
  min?: Maybe<Article_Min_Fields>;
  stddev?: Maybe<Article_Stddev_Fields>;
  stddev_pop?: Maybe<Article_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Article_Stddev_Samp_Fields>;
  sum?: Maybe<Article_Sum_Fields>;
  var_pop?: Maybe<Article_Var_Pop_Fields>;
  var_samp?: Maybe<Article_Var_Samp_Fields>;
  variance?: Maybe<Article_Variance_Fields>;
};


/** aggregate fields of "Article" */
export type Article_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Article_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Article" */
export type Article_Aggregate_Order_By = {
  avg?: InputMaybe<Article_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Article_Max_Order_By>;
  min?: InputMaybe<Article_Min_Order_By>;
  stddev?: InputMaybe<Article_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Article_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Article_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Article_Sum_Order_By>;
  var_pop?: InputMaybe<Article_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Article_Var_Samp_Order_By>;
  variance?: InputMaybe<Article_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Article" */
export type Article_Arr_Rel_Insert_Input = {
  data: Array<Article_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Article_On_Conflict>;
};

/** aggregate avg on columns */
export type Article_Avg_Fields = {
  __typename?: 'Article_avg_fields';
  like?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Article" */
export type Article_Avg_Order_By = {
  like?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Article". All fields are combined with a logical 'AND'. */
export type Article_Bool_Exp = {
  Blog?: InputMaybe<Blog_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Article_Bool_Exp>>;
  _not?: InputMaybe<Article_Bool_Exp>;
  _or?: InputMaybe<Array<Article_Bool_Exp>>;
  all_text?: InputMaybe<String_Comparison_Exp>;
  blog_id?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  like?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Boolean_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_favorite_article_ids?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
  user_favorite_article_ids_aggregate?: InputMaybe<User_Favorite_Article_Id_Aggregate_Bool_Exp>;
  user_favorite_articles_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Article" */
export enum Article_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArticlePkey = 'Article_pkey'
}

/** input type for incrementing numeric columns in table "Article" */
export type Article_Inc_Input = {
  like?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Article" */
export type Article_Insert_Input = {
  Blog?: InputMaybe<Blog_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  all_text?: InputMaybe<Scalars['String']>;
  blog_id?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  like?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_favorite_article_ids?: InputMaybe<User_Favorite_Article_Id_Arr_Rel_Insert_Input>;
  user_favorite_articles_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Article_Max_Fields = {
  __typename?: 'Article_max_fields';
  all_text?: Maybe<Scalars['String']>;
  blog_id?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  like?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user_favorite_articles_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "Article" */
export type Article_Max_Order_By = {
  all_text?: InputMaybe<Order_By>;
  blog_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_favorite_articles_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Article_Min_Fields = {
  __typename?: 'Article_min_fields';
  all_text?: Maybe<Scalars['String']>;
  blog_id?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  like?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user_favorite_articles_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "Article" */
export type Article_Min_Order_By = {
  all_text?: InputMaybe<Order_By>;
  blog_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_favorite_articles_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Article" */
export type Article_Mutation_Response = {
  __typename?: 'Article_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Article>;
};

/** input type for inserting object relation for remote table "Article" */
export type Article_Obj_Rel_Insert_Input = {
  data: Article_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Article_On_Conflict>;
};

/** on_conflict condition type for table "Article" */
export type Article_On_Conflict = {
  constraint: Article_Constraint;
  update_columns?: Array<Article_Update_Column>;
  where?: InputMaybe<Article_Bool_Exp>;
};

/** Ordering options when selecting data from "Article". */
export type Article_Order_By = {
  Blog?: InputMaybe<Blog_Order_By>;
  User?: InputMaybe<User_Order_By>;
  all_text?: InputMaybe<Order_By>;
  blog_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_favorite_article_ids_aggregate?: InputMaybe<User_Favorite_Article_Id_Aggregate_Order_By>;
  user_favorite_articles_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Article */
export type Article_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Article" */
export enum Article_Select_Column {
  /** column name */
  AllText = 'all_text',
  /** column name */
  BlogId = 'blog_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Like = 'like',
  /** column name */
  Status = 'status',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserFavoriteArticlesId = 'user_favorite_articles_id',
  /** column name */
  UserId = 'user_id'
}

/** select "Article_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Article" */
export enum Article_Select_Column_Article_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Status = 'status'
}

/** select "Article_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Article" */
export enum Article_Select_Column_Article_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "Article" */
export type Article_Set_Input = {
  all_text?: InputMaybe<Scalars['String']>;
  blog_id?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  like?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_favorite_articles_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Article_Stddev_Fields = {
  __typename?: 'Article_stddev_fields';
  like?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Article" */
export type Article_Stddev_Order_By = {
  like?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Article_Stddev_Pop_Fields = {
  __typename?: 'Article_stddev_pop_fields';
  like?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Article" */
export type Article_Stddev_Pop_Order_By = {
  like?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Article_Stddev_Samp_Fields = {
  __typename?: 'Article_stddev_samp_fields';
  like?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Article" */
export type Article_Stddev_Samp_Order_By = {
  like?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Article" */
export type Article_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Article_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Article_Stream_Cursor_Value_Input = {
  all_text?: InputMaybe<Scalars['String']>;
  blog_id?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  like?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_favorite_articles_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Article_Sum_Fields = {
  __typename?: 'Article_sum_fields';
  like?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Article" */
export type Article_Sum_Order_By = {
  like?: InputMaybe<Order_By>;
};

/** update columns of table "Article" */
export enum Article_Update_Column {
  /** column name */
  AllText = 'all_text',
  /** column name */
  BlogId = 'blog_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Like = 'like',
  /** column name */
  Status = 'status',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserFavoriteArticlesId = 'user_favorite_articles_id',
  /** column name */
  UserId = 'user_id'
}

export type Article_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Article_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Article_Set_Input>;
  where: Article_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Article_Var_Pop_Fields = {
  __typename?: 'Article_var_pop_fields';
  like?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Article" */
export type Article_Var_Pop_Order_By = {
  like?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Article_Var_Samp_Fields = {
  __typename?: 'Article_var_samp_fields';
  like?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Article" */
export type Article_Var_Samp_Order_By = {
  like?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Article_Variance_Fields = {
  __typename?: 'Article_variance_fields';
  like?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Article" */
export type Article_Variance_Order_By = {
  like?: InputMaybe<Order_By>;
};

/** columns and relationships of "Blog" */
export type Blog = {
  __typename?: 'Blog';
  /** An array relationship */
  Articles: Array<Article>;
  /** An aggregate relationship */
  Articles_aggregate: Article_Aggregate;
  /** An array relationship */
  blog_users: Array<Blog_User>;
  /** An aggregate relationship */
  blog_users_aggregate: Blog_User_Aggregate;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "Blog" */
export type BlogArticlesArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


/** columns and relationships of "Blog" */
export type BlogArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


/** columns and relationships of "Blog" */
export type BlogBlog_UsersArgs = {
  distinct_on?: InputMaybe<Array<Blog_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_User_Order_By>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};


/** columns and relationships of "Blog" */
export type BlogBlog_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_User_Order_By>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};

/** aggregated selection of "Blog" */
export type Blog_Aggregate = {
  __typename?: 'Blog_aggregate';
  aggregate?: Maybe<Blog_Aggregate_Fields>;
  nodes: Array<Blog>;
};

/** aggregate fields of "Blog" */
export type Blog_Aggregate_Fields = {
  __typename?: 'Blog_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Blog_Max_Fields>;
  min?: Maybe<Blog_Min_Fields>;
};


/** aggregate fields of "Blog" */
export type Blog_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blog_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Blog". All fields are combined with a logical 'AND'. */
export type Blog_Bool_Exp = {
  Articles?: InputMaybe<Article_Bool_Exp>;
  Articles_aggregate?: InputMaybe<Article_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Blog_Bool_Exp>>;
  _not?: InputMaybe<Blog_Bool_Exp>;
  _or?: InputMaybe<Array<Blog_Bool_Exp>>;
  blog_users?: InputMaybe<Blog_User_Bool_Exp>;
  blog_users_aggregate?: InputMaybe<Blog_User_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Blog" */
export enum Blog_Constraint {
  /** unique or primary key constraint on columns "id" */
  BlogPkey = 'Blog_pkey'
}

/** input type for inserting data into table "Blog" */
export type Blog_Insert_Input = {
  Articles?: InputMaybe<Article_Arr_Rel_Insert_Input>;
  blog_users?: InputMaybe<Blog_User_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Blog_Max_Fields = {
  __typename?: 'Blog_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Blog_Min_Fields = {
  __typename?: 'Blog_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "Blog" */
export type Blog_Mutation_Response = {
  __typename?: 'Blog_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Blog>;
};

/** input type for inserting object relation for remote table "Blog" */
export type Blog_Obj_Rel_Insert_Input = {
  data: Blog_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};

/** on_conflict condition type for table "Blog" */
export type Blog_On_Conflict = {
  constraint: Blog_Constraint;
  update_columns?: Array<Blog_Update_Column>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

/** Ordering options when selecting data from "Blog". */
export type Blog_Order_By = {
  Articles_aggregate?: InputMaybe<Article_Aggregate_Order_By>;
  blog_users_aggregate?: InputMaybe<Blog_User_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Blog */
export type Blog_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Blog" */
export enum Blog_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Blog" */
export type Blog_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "Blog" */
export type Blog_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blog_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blog_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "Blog" */
export enum Blog_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Blog_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blog_Set_Input>;
  where: Blog_Bool_Exp;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  Articles: Array<Article>;
  /** An aggregate relationship */
  Articles_aggregate: Article_Aggregate;
  /** An array relationship */
  blog_users: Array<Blog_User>;
  /** An aggregate relationship */
  blog_users_aggregate: Blog_User_Aggregate;
  createdAt: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  user_favorite_article_ids: Array<User_Favorite_Article_Id>;
  /** An aggregate relationship */
  user_favorite_article_ids_aggregate: User_Favorite_Article_Id_Aggregate;
};


/** columns and relationships of "User" */
export type UserArticlesArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserBlog_UsersArgs = {
  distinct_on?: InputMaybe<Array<Blog_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_User_Order_By>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserBlog_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_User_Order_By>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserUser_Favorite_Article_IdsArgs = {
  distinct_on?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Favorite_Article_Id_Order_By>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserUser_Favorite_Article_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Favorite_Article_Id_Order_By>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Articles?: InputMaybe<Article_Bool_Exp>;
  Articles_aggregate?: InputMaybe<Article_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  blog_users?: InputMaybe<Blog_User_Bool_Exp>;
  blog_users_aggregate?: InputMaybe<Blog_User_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_favorite_article_ids?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
  user_favorite_article_ids_aggregate?: InputMaybe<User_Favorite_Article_Id_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Articles?: InputMaybe<Article_Arr_Rel_Insert_Input>;
  blog_users?: InputMaybe<Blog_User_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  user_favorite_article_ids?: InputMaybe<User_Favorite_Article_Id_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Articles_aggregate?: InputMaybe<Article_Aggregate_Order_By>;
  blog_users_aggregate?: InputMaybe<Blog_User_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_favorite_article_ids_aggregate?: InputMaybe<User_Favorite_Article_Id_Aggregate_Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** columns and relationships of "blog_user" */
export type Blog_User = {
  __typename?: 'blog_user';
  /** An object relationship */
  Blog: Blog;
  /** An object relationship */
  User: User;
  blog_id: Scalars['uuid'];
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "blog_user" */
export type Blog_User_Aggregate = {
  __typename?: 'blog_user_aggregate';
  aggregate?: Maybe<Blog_User_Aggregate_Fields>;
  nodes: Array<Blog_User>;
};

export type Blog_User_Aggregate_Bool_Exp = {
  count?: InputMaybe<Blog_User_Aggregate_Bool_Exp_Count>;
};

export type Blog_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Blog_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Blog_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "blog_user" */
export type Blog_User_Aggregate_Fields = {
  __typename?: 'blog_user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Blog_User_Max_Fields>;
  min?: Maybe<Blog_User_Min_Fields>;
};


/** aggregate fields of "blog_user" */
export type Blog_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blog_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blog_user" */
export type Blog_User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blog_User_Max_Order_By>;
  min?: InputMaybe<Blog_User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "blog_user" */
export type Blog_User_Arr_Rel_Insert_Input = {
  data: Array<Blog_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Blog_User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "blog_user". All fields are combined with a logical 'AND'. */
export type Blog_User_Bool_Exp = {
  Blog?: InputMaybe<Blog_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Blog_User_Bool_Exp>>;
  _not?: InputMaybe<Blog_User_Bool_Exp>;
  _or?: InputMaybe<Array<Blog_User_Bool_Exp>>;
  blog_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "blog_user" */
export enum Blog_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  BlogUserPkey = 'Blog_User_pkey'
}

/** input type for inserting data into table "blog_user" */
export type Blog_User_Insert_Input = {
  Blog?: InputMaybe<Blog_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  blog_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Blog_User_Max_Fields = {
  __typename?: 'blog_user_max_fields';
  blog_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "blog_user" */
export type Blog_User_Max_Order_By = {
  blog_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Blog_User_Min_Fields = {
  __typename?: 'blog_user_min_fields';
  blog_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "blog_user" */
export type Blog_User_Min_Order_By = {
  blog_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "blog_user" */
export type Blog_User_Mutation_Response = {
  __typename?: 'blog_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Blog_User>;
};

/** on_conflict condition type for table "blog_user" */
export type Blog_User_On_Conflict = {
  constraint: Blog_User_Constraint;
  update_columns?: Array<Blog_User_Update_Column>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};

/** Ordering options when selecting data from "blog_user". */
export type Blog_User_Order_By = {
  Blog?: InputMaybe<Blog_Order_By>;
  User?: InputMaybe<User_Order_By>;
  blog_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: blog_user */
export type Blog_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "blog_user" */
export enum Blog_User_Select_Column {
  /** column name */
  BlogId = 'blog_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "blog_user" */
export type Blog_User_Set_Input = {
  blog_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "blog_user" */
export type Blog_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blog_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blog_User_Stream_Cursor_Value_Input = {
  blog_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "blog_user" */
export enum Blog_User_Update_Column {
  /** column name */
  BlogId = 'blog_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type Blog_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blog_User_Set_Input>;
  where: Blog_User_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Article" */
  delete_Article?: Maybe<Article_Mutation_Response>;
  /** delete single row from the table: "Article" */
  delete_Article_by_pk?: Maybe<Article>;
  /** delete data from the table: "Blog" */
  delete_Blog?: Maybe<Blog_Mutation_Response>;
  /** delete single row from the table: "Blog" */
  delete_Blog_by_pk?: Maybe<Blog>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "blog_user" */
  delete_blog_user?: Maybe<Blog_User_Mutation_Response>;
  /** delete single row from the table: "blog_user" */
  delete_blog_user_by_pk?: Maybe<Blog_User>;
  /** delete data from the table: "user_favorite_article_id" */
  delete_user_favorite_article_id?: Maybe<User_Favorite_Article_Id_Mutation_Response>;
  /** delete single row from the table: "user_favorite_article_id" */
  delete_user_favorite_article_id_by_pk?: Maybe<User_Favorite_Article_Id>;
  /** insert data into the table: "Article" */
  insert_Article?: Maybe<Article_Mutation_Response>;
  /** insert a single row into the table: "Article" */
  insert_Article_one?: Maybe<Article>;
  /** insert data into the table: "Blog" */
  insert_Blog?: Maybe<Blog_Mutation_Response>;
  /** insert a single row into the table: "Blog" */
  insert_Blog_one?: Maybe<Blog>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "blog_user" */
  insert_blog_user?: Maybe<Blog_User_Mutation_Response>;
  /** insert a single row into the table: "blog_user" */
  insert_blog_user_one?: Maybe<Blog_User>;
  /** insert data into the table: "user_favorite_article_id" */
  insert_user_favorite_article_id?: Maybe<User_Favorite_Article_Id_Mutation_Response>;
  /** insert a single row into the table: "user_favorite_article_id" */
  insert_user_favorite_article_id_one?: Maybe<User_Favorite_Article_Id>;
  /** update data of the table: "Article" */
  update_Article?: Maybe<Article_Mutation_Response>;
  /** update single row of the table: "Article" */
  update_Article_by_pk?: Maybe<Article>;
  /** update multiples rows of table: "Article" */
  update_Article_many?: Maybe<Array<Maybe<Article_Mutation_Response>>>;
  /** update data of the table: "Blog" */
  update_Blog?: Maybe<Blog_Mutation_Response>;
  /** update single row of the table: "Blog" */
  update_Blog_by_pk?: Maybe<Blog>;
  /** update multiples rows of table: "Blog" */
  update_Blog_many?: Maybe<Array<Maybe<Blog_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "blog_user" */
  update_blog_user?: Maybe<Blog_User_Mutation_Response>;
  /** update single row of the table: "blog_user" */
  update_blog_user_by_pk?: Maybe<Blog_User>;
  /** update multiples rows of table: "blog_user" */
  update_blog_user_many?: Maybe<Array<Maybe<Blog_User_Mutation_Response>>>;
  /** update data of the table: "user_favorite_article_id" */
  update_user_favorite_article_id?: Maybe<User_Favorite_Article_Id_Mutation_Response>;
  /** update single row of the table: "user_favorite_article_id" */
  update_user_favorite_article_id_by_pk?: Maybe<User_Favorite_Article_Id>;
  /** update multiples rows of table: "user_favorite_article_id" */
  update_user_favorite_article_id_many?: Maybe<Array<Maybe<User_Favorite_Article_Id_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ArticleArgs = {
  where: Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Article_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BlogArgs = {
  where: Blog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blog_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Blog_UserArgs = {
  where: Blog_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blog_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Favorite_Article_IdArgs = {
  where: User_Favorite_Article_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Favorite_Article_Id_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ArticleArgs = {
  objects: Array<Article_Insert_Input>;
  on_conflict?: InputMaybe<Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Article_OneArgs = {
  object: Article_Insert_Input;
  on_conflict?: InputMaybe<Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlogArgs = {
  objects: Array<Blog_Insert_Input>;
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_OneArgs = {
  object: Blog_Insert_Input;
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_UserArgs = {
  objects: Array<Blog_User_Insert_Input>;
  on_conflict?: InputMaybe<Blog_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_User_OneArgs = {
  object: Blog_User_Insert_Input;
  on_conflict?: InputMaybe<Blog_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Favorite_Article_IdArgs = {
  objects: Array<User_Favorite_Article_Id_Insert_Input>;
  on_conflict?: InputMaybe<User_Favorite_Article_Id_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Favorite_Article_Id_OneArgs = {
  object: User_Favorite_Article_Id_Insert_Input;
  on_conflict?: InputMaybe<User_Favorite_Article_Id_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ArticleArgs = {
  _inc?: InputMaybe<Article_Inc_Input>;
  _set?: InputMaybe<Article_Set_Input>;
  where: Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Article_By_PkArgs = {
  _inc?: InputMaybe<Article_Inc_Input>;
  _set?: InputMaybe<Article_Set_Input>;
  pk_columns: Article_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Article_ManyArgs = {
  updates: Array<Article_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BlogArgs = {
  _set?: InputMaybe<Blog_Set_Input>;
  where: Blog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_By_PkArgs = {
  _set?: InputMaybe<Blog_Set_Input>;
  pk_columns: Blog_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_ManyArgs = {
  updates: Array<Blog_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_UserArgs = {
  _set?: InputMaybe<Blog_User_Set_Input>;
  where: Blog_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_User_By_PkArgs = {
  _set?: InputMaybe<Blog_User_Set_Input>;
  pk_columns: Blog_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_User_ManyArgs = {
  updates: Array<Blog_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Favorite_Article_IdArgs = {
  _set?: InputMaybe<User_Favorite_Article_Id_Set_Input>;
  where: User_Favorite_Article_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Favorite_Article_Id_By_PkArgs = {
  _set?: InputMaybe<User_Favorite_Article_Id_Set_Input>;
  pk_columns: User_Favorite_Article_Id_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Favorite_Article_Id_ManyArgs = {
  updates: Array<User_Favorite_Article_Id_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Article" */
  Article: Array<Article>;
  /** fetch aggregated fields from the table: "Article" */
  Article_aggregate: Article_Aggregate;
  /** fetch data from the table: "Article" using primary key columns */
  Article_by_pk?: Maybe<Article>;
  /** fetch data from the table: "Blog" */
  Blog: Array<Blog>;
  /** fetch aggregated fields from the table: "Blog" */
  Blog_aggregate: Blog_Aggregate;
  /** fetch data from the table: "Blog" using primary key columns */
  Blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "blog_user" */
  blog_user: Array<Blog_User>;
  /** fetch aggregated fields from the table: "blog_user" */
  blog_user_aggregate: Blog_User_Aggregate;
  /** fetch data from the table: "blog_user" using primary key columns */
  blog_user_by_pk?: Maybe<Blog_User>;
  /** fetch data from the table: "user_favorite_article_id" */
  user_favorite_article_id: Array<User_Favorite_Article_Id>;
  /** fetch aggregated fields from the table: "user_favorite_article_id" */
  user_favorite_article_id_aggregate: User_Favorite_Article_Id_Aggregate;
  /** fetch data from the table: "user_favorite_article_id" using primary key columns */
  user_favorite_article_id_by_pk?: Maybe<User_Favorite_Article_Id>;
};


export type Query_RootArticleArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Query_RootArticle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Query_RootArticle_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBlogArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Query_RootBlog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Query_RootBlog_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBlog_UserArgs = {
  distinct_on?: InputMaybe<Array<Blog_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_User_Order_By>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};


export type Query_RootBlog_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_User_Order_By>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};


export type Query_RootBlog_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_Favorite_Article_IdArgs = {
  distinct_on?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Favorite_Article_Id_Order_By>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};


export type Query_RootUser_Favorite_Article_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Favorite_Article_Id_Order_By>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};


export type Query_RootUser_Favorite_Article_Id_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Article" */
  Article: Array<Article>;
  /** fetch aggregated fields from the table: "Article" */
  Article_aggregate: Article_Aggregate;
  /** fetch data from the table: "Article" using primary key columns */
  Article_by_pk?: Maybe<Article>;
  /** fetch data from the table in a streaming manner: "Article" */
  Article_stream: Array<Article>;
  /** fetch data from the table: "Blog" */
  Blog: Array<Blog>;
  /** fetch aggregated fields from the table: "Blog" */
  Blog_aggregate: Blog_Aggregate;
  /** fetch data from the table: "Blog" using primary key columns */
  Blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table in a streaming manner: "Blog" */
  Blog_stream: Array<Blog>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
  /** fetch data from the table: "blog_user" */
  blog_user: Array<Blog_User>;
  /** fetch aggregated fields from the table: "blog_user" */
  blog_user_aggregate: Blog_User_Aggregate;
  /** fetch data from the table: "blog_user" using primary key columns */
  blog_user_by_pk?: Maybe<Blog_User>;
  /** fetch data from the table in a streaming manner: "blog_user" */
  blog_user_stream: Array<Blog_User>;
  /** fetch data from the table: "user_favorite_article_id" */
  user_favorite_article_id: Array<User_Favorite_Article_Id>;
  /** fetch aggregated fields from the table: "user_favorite_article_id" */
  user_favorite_article_id_aggregate: User_Favorite_Article_Id_Aggregate;
  /** fetch data from the table: "user_favorite_article_id" using primary key columns */
  user_favorite_article_id_by_pk?: Maybe<User_Favorite_Article_Id>;
  /** fetch data from the table in a streaming manner: "user_favorite_article_id" */
  user_favorite_article_id_stream: Array<User_Favorite_Article_Id>;
};


export type Subscription_RootArticleArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Subscription_RootArticle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Article_Order_By>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Subscription_RootArticle_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootArticle_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Article_Stream_Cursor_Input>>;
  where?: InputMaybe<Article_Bool_Exp>;
};


export type Subscription_RootBlogArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootBlog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootBlog_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBlog_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Blog_Stream_Cursor_Input>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootBlog_UserArgs = {
  distinct_on?: InputMaybe<Array<Blog_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_User_Order_By>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};


export type Subscription_RootBlog_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_User_Order_By>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};


export type Subscription_RootBlog_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBlog_User_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Blog_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Blog_User_Bool_Exp>;
};


export type Subscription_RootUser_Favorite_Article_IdArgs = {
  distinct_on?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Favorite_Article_Id_Order_By>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};


export type Subscription_RootUser_Favorite_Article_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Favorite_Article_Id_Order_By>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};


export type Subscription_RootUser_Favorite_Article_Id_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Favorite_Article_Id_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Favorite_Article_Id_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_favorite_article_id" */
export type User_Favorite_Article_Id = {
  __typename?: 'user_favorite_article_id';
  /** An object relationship */
  Article: Article;
  /** An object relationship */
  User: User;
  article_id: Scalars['uuid'];
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_favorite_article_id" */
export type User_Favorite_Article_Id_Aggregate = {
  __typename?: 'user_favorite_article_id_aggregate';
  aggregate?: Maybe<User_Favorite_Article_Id_Aggregate_Fields>;
  nodes: Array<User_Favorite_Article_Id>;
};

export type User_Favorite_Article_Id_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Favorite_Article_Id_Aggregate_Bool_Exp_Count>;
};

export type User_Favorite_Article_Id_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_favorite_article_id" */
export type User_Favorite_Article_Id_Aggregate_Fields = {
  __typename?: 'user_favorite_article_id_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Favorite_Article_Id_Max_Fields>;
  min?: Maybe<User_Favorite_Article_Id_Min_Fields>;
};


/** aggregate fields of "user_favorite_article_id" */
export type User_Favorite_Article_Id_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Favorite_Article_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_favorite_article_id" */
export type User_Favorite_Article_Id_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Favorite_Article_Id_Max_Order_By>;
  min?: InputMaybe<User_Favorite_Article_Id_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_favorite_article_id" */
export type User_Favorite_Article_Id_Arr_Rel_Insert_Input = {
  data: Array<User_Favorite_Article_Id_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Favorite_Article_Id_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_favorite_article_id". All fields are combined with a logical 'AND'. */
export type User_Favorite_Article_Id_Bool_Exp = {
  Article?: InputMaybe<Article_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<User_Favorite_Article_Id_Bool_Exp>>;
  _not?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
  _or?: InputMaybe<Array<User_Favorite_Article_Id_Bool_Exp>>;
  article_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_favorite_article_id" */
export enum User_Favorite_Article_Id_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserFavoriteArticleIdPkey = 'user_favorite_article_id_pkey'
}

/** input type for inserting data into table "user_favorite_article_id" */
export type User_Favorite_Article_Id_Insert_Input = {
  Article?: InputMaybe<Article_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  article_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Favorite_Article_Id_Max_Fields = {
  __typename?: 'user_favorite_article_id_max_fields';
  article_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_favorite_article_id" */
export type User_Favorite_Article_Id_Max_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Favorite_Article_Id_Min_Fields = {
  __typename?: 'user_favorite_article_id_min_fields';
  article_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_favorite_article_id" */
export type User_Favorite_Article_Id_Min_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_favorite_article_id" */
export type User_Favorite_Article_Id_Mutation_Response = {
  __typename?: 'user_favorite_article_id_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Favorite_Article_Id>;
};

/** on_conflict condition type for table "user_favorite_article_id" */
export type User_Favorite_Article_Id_On_Conflict = {
  constraint: User_Favorite_Article_Id_Constraint;
  update_columns?: Array<User_Favorite_Article_Id_Update_Column>;
  where?: InputMaybe<User_Favorite_Article_Id_Bool_Exp>;
};

/** Ordering options when selecting data from "user_favorite_article_id". */
export type User_Favorite_Article_Id_Order_By = {
  Article?: InputMaybe<Article_Order_By>;
  User?: InputMaybe<User_Order_By>;
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_favorite_article_id */
export type User_Favorite_Article_Id_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_favorite_article_id" */
export enum User_Favorite_Article_Id_Select_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_favorite_article_id" */
export type User_Favorite_Article_Id_Set_Input = {
  article_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "user_favorite_article_id" */
export type User_Favorite_Article_Id_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Favorite_Article_Id_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Favorite_Article_Id_Stream_Cursor_Value_Input = {
  article_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_favorite_article_id" */
export enum User_Favorite_Article_Id_Update_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type User_Favorite_Article_Id_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Favorite_Article_Id_Set_Input>;
  where: User_Favorite_Article_Id_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetArticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetArticlesQuery = { __typename?: 'query_root', Article: Array<{ __typename?: 'Article', id: any, title: string, text: string, status: boolean, createdAt: any, updatedAt: any, Blog?: { __typename?: 'Blog', title: string } | null }> };

export type GetBlogArticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  id: Scalars['uuid'];
}>;


export type GetBlogArticlesQuery = { __typename?: 'query_root', Blog: Array<{ __typename?: 'Blog', id: any, title: string, Articles: Array<{ __typename?: 'Article', id: any, text: string, title: string, createdAt: any, all_text: string, status: boolean, User?: { __typename?: 'User', name: string, id: any, email: string } | null, Blog?: { __typename?: 'Blog', title: string } | null }> }> };

export type GetArticleQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetArticleQuery = { __typename?: 'query_root', Article: Array<{ __typename?: 'Article', id: any, title: string, text: string, createdAt: any, updatedAt: any, all_text: string, status: boolean, like?: number | null, User?: { __typename?: 'User', name: string, id: any, email: string } | null, Blog?: { __typename?: 'Blog', title: string } | null }> };

export type GetBlogsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetBlogsQuery = { __typename?: 'query_root', Blog: Array<{ __typename?: 'Blog', id: any, title: string, blog_users: Array<{ __typename?: 'blog_user', User: { __typename?: 'User', name: string, id: any } }> }> };

export type GetUserBlogsQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserBlogsQuery = { __typename?: 'query_root', Blog: Array<{ __typename?: 'Blog', id: any, title: string, blog_users: Array<{ __typename?: 'blog_user', User: { __typename?: 'User', name: string } }> }> };

export type GetBlogQueryVariables = Exact<{
  id: Scalars['uuid'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetBlogQuery = { __typename?: 'query_root', Blog: Array<{ __typename?: 'Blog', id: any, title: string, updatedAt: any, blog_users: Array<{ __typename?: 'blog_user', User: { __typename?: 'User', name: string, id: any } }>, Articles: Array<{ __typename?: 'Article', id: any, createdAt: any, title: string, text: string, all_text: string, status: boolean }> }> };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', id: any, name: string, email: string, createdAt: any }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  email: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_User_by_pk?: { __typename?: 'User', id: any, name: string, email: string } | null };

export type UpdateDeleteArticleMutationVariables = Exact<{
  id: Scalars['uuid'];
  status: Scalars['Boolean'];
}>;


export type UpdateDeleteArticleMutation = { __typename?: 'mutation_root', update_Article_by_pk?: { __typename?: 'Article', id: any, title: string, createdAt: any, status: boolean } | null };

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['uuid'];
  title: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
  all_text?: InputMaybe<Scalars['String']>;
}>;


export type UpdateArticleMutation = { __typename?: 'mutation_root', update_Article_by_pk?: { __typename?: 'Article', id: any, title: string, text: string, all_text: string } | null };

export type CreateArticleOneMutationVariables = Exact<{
  all_text: Scalars['String'];
  blog_id: Scalars['uuid'];
  text: Scalars['String'];
  title: Scalars['String'];
  user_id: Scalars['uuid'];
}>;


export type CreateArticleOneMutation = { __typename?: 'mutation_root', insert_Article_one?: { __typename?: 'Article', id: any, title: string, text: string, all_text: string, user_id?: any | null, blog_id?: any | null } | null };

export type BlogUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
}>;


export type BlogUserQuery = { __typename?: 'query_root', blog_user: Array<{ __typename?: 'blog_user', user_id: any }> };

export type GetBlogOneQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetBlogOneQuery = { __typename?: 'query_root', Blog: Array<{ __typename?: 'Blog', id: any, title: string, updatedAt: any }> };

export type UpdateBlogOneMutationVariables = Exact<{
  id: Scalars['uuid'];
  title: Scalars['String'];
}>;


export type UpdateBlogOneMutation = { __typename?: 'mutation_root', update_Blog_by_pk?: { __typename?: 'Blog', title: string } | null };

export type DeleteBlogOneMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteBlogOneMutation = { __typename?: 'mutation_root', delete_Blog_by_pk?: { __typename?: 'Blog', id: any, title: string } | null };

export type CreateUserOneMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  blog_id: Scalars['uuid'];
}>;


export type CreateUserOneMutation = { __typename?: 'mutation_root', insert_User_one?: { __typename?: 'User', id: any, name: string, email: string } | null };

export type GetBlogEditorsQueryVariables = Exact<{
  blog_id: Scalars['uuid'];
}>;


export type GetBlogEditorsQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', id: any, name: string, email: string }> };

export type DeleteUserOneMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteUserOneMutation = { __typename?: 'mutation_root', delete_User_by_pk?: { __typename?: 'User', id: any } | null };

export type GetBlogsModalQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type GetBlogsModalQuery = { __typename?: 'query_root', Blog: Array<{ __typename?: 'Blog', id: any, title: string }> };

export type GetSearchArticlesQueryVariables = Exact<{
  _iregex: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetSearchArticlesQuery = { __typename?: 'query_root', Article: Array<{ __typename?: 'Article', id: any, title: string, text: string, createdAt: any }> };

export type CreateBlogMutationVariables = Exact<{
  user_id: Scalars['uuid'];
  title: Scalars['String'];
}>;


export type CreateBlogMutation = { __typename?: 'mutation_root', insert_Blog_one?: { __typename?: 'Blog', id: any, title: string } | null };

export type DeleteFavoriteArticlesMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteFavoriteArticlesMutation = { __typename?: 'mutation_root', delete_Article_by_pk?: { __typename?: 'Article', id: any, title: string } | null };

export type CreateAdminUserOneMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateAdminUserOneMutation = { __typename?: 'mutation_root', insert_User_one?: { __typename?: 'User', id: any, name: string, email: string, createdAt: any } | null };

export type GetUserFavoritesArticlesQueryVariables = Exact<{
  id: Scalars['uuid'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserFavoritesArticlesQuery = { __typename?: 'query_root', Article: Array<{ __typename?: 'Article', id: any, text: string, title: string, status: boolean, like?: number | null, createdAt: any, updatedAt: any, all_text: string, Blog?: { __typename?: 'Blog', title: string } | null }> };

export type CreateUserFavoriteArticlesMutationVariables = Exact<{
  article_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;


export type CreateUserFavoriteArticlesMutation = { __typename?: 'mutation_root', insert_user_favorite_article_id_one?: { __typename?: 'user_favorite_article_id', id: any } | null };

export type DeleteUserFavoriteArticlesMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteUserFavoriteArticlesMutation = { __typename?: 'mutation_root', delete_user_favorite_article_id_by_pk?: { __typename?: 'user_favorite_article_id', id: any } | null };

export type UserFavoriteArticleIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserFavoriteArticleIdQuery = { __typename?: 'query_root', user_favorite_article_id: Array<{ __typename?: 'user_favorite_article_id', id: any, user_id: any, article_id: any }> };


export const GetArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"Blog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticlesQuery, GetArticlesQueryVariables>;
export const GetBlogArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"all_text"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Blog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBlogArticlesQuery, GetBlogArticlesQueryVariables>;
export const GetArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"all_text"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"like"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Blog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticleQuery, GetArticleQueryVariables>;
export const GetBlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"blog_users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBlogsQuery, GetBlogsQueryVariables>;
export const GetUserBlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserBlogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blog_users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"User"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"blog_users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserBlogsQuery, GetUserBlogsQueryVariables>;
export const GetBlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"blog_users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"all_text"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlogQuery, GetBlogQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_User_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateDeleteArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDeleteArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Article_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateDeleteArticleMutation, UpdateDeleteArticleMutationVariables>;
export const UpdateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"all_text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Article_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"all_text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"all_text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"all_text"}}]}}]}}]} as unknown as DocumentNode<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const CreateArticleOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArticleOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"all_text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blog_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Article_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"all_text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"all_text"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"blog_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blog_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"all_text"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"blog_id"}}]}}]}}]} as unknown as DocumentNode<CreateArticleOneMutation, CreateArticleOneMutationVariables>;
export const BlogUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blog_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<BlogUserQuery, BlogUserQueryVariables>;
export const GetBlogOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetBlogOneQuery, GetBlogOneQueryVariables>;
export const UpdateBlogOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBlogOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Blog_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<UpdateBlogOneMutation, UpdateBlogOneMutationVariables>;
export const DeleteBlogOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBlogOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Blog_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DeleteBlogOneMutation, DeleteBlogOneMutationVariables>;
export const CreateUserOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blog_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_User_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blog_users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blog_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blog_id"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateUserOneMutation, CreateUserOneMutationVariables>;
export const GetBlogEditorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogEditors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blog_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blog_users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blog_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blog_id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetBlogEditorsQuery, GetBlogEditorsQueryVariables>;
export const DeleteUserOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_User_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteUserOneMutation, DeleteUserOneMutationVariables>;
export const GetBlogsModalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogsModal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blog_users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"User"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetBlogsModalQuery, GetBlogsModalQueryVariables>;
export const GetSearchArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearchArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_iregex"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_iregex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_iregex"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetSearchArticlesQuery, GetSearchArticlesQueryVariables>;
export const CreateBlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBlog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Blog_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"blog_users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateBlogMutation, CreateBlogMutationVariables>;
export const DeleteFavoriteArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFavoriteArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Article_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DeleteFavoriteArticlesMutation, DeleteFavoriteArticlesMutationVariables>;
export const CreateAdminUserOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdminUserOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_User_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateAdminUserOneMutation, CreateAdminUserOneMutationVariables>;
export const GetUserFavoritesArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFavoritesArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_favorite_article_ids"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"like"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"all_text"}},{"kind":"Field","name":{"kind":"Name","value":"Blog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserFavoritesArticlesQuery, GetUserFavoritesArticlesQueryVariables>;
export const CreateUserFavoriteArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserFavoriteArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"article_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_favorite_article_id_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"article_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"article_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserFavoriteArticlesMutation, CreateUserFavoriteArticlesMutationVariables>;
export const DeleteUserFavoriteArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserFavoriteArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_user_favorite_article_id_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteUserFavoriteArticlesMutation, DeleteUserFavoriteArticlesMutationVariables>;
export const UserFavoriteArticleIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserFavoriteArticleId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_favorite_article_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"article_id"}}]}}]}}]} as unknown as DocumentNode<UserFavoriteArticleIdQuery, UserFavoriteArticleIdQueryVariables>;