import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminBlogs } from "./components/8.adminBlogs/adminBlogs";
import { AdminBlogsId } from "./components/9.adminBlogsId/adminBlogsId";
import { AdminBlogsIdArticlesCreate } from "./components/12.AdminBlogsIdArticlesCreate/AdminBlogsIdArticlesCreate";
import { AdminBlogsIdArticlesId } from "./components/10.adminBlogsIdArticlesId/AdminBlogsIdArticlesId";
import { AdminBlogsIdConfig } from "./components/13.adminBlogsIdConfig/AdminBlogsIdConfig";
import { AdminBlogsIdEditors } from "./components/11.adminBlogsIdEditors/AdminBlogsIdEditors";

import BlogArticle from "./components/2.articles/blogArticle";
import BlogIdArticle from "./components/3.blogIdArticleId/BlogIdArticle";
import BlogIdArticleId from "./components/4.blogIdArticles/BlogIdArticleId";
import Favorites from "./components/5.favorites/favorites";
import { FormComponent } from "./components/1.form/FormComponent";
import Mypage from "./components/7.mypage/mypage";
import Searches from "./components/6.search/serches";
import { AdminBlogIdArticlesIdEdit } from "./components/14.AdminBlogsIdArticlesIdEdit/AdminBlogIdArticlesIdEdit";
import { ResultSearch } from "./components/6.search/ResultSearch";
import { Nologin } from "./components/Base/nologin";
import { Login } from "./components/Base/login";
import { Register } from "./components/authentication/resister";
import { Authentication } from "./components/authentication/authentication";
import { RecoilRoot } from "recoil";




function App() {
  return (
    <div>
      <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/form" element={<FormComponent />} />{/* 1 */}
          <Route path="/nologin" element={<Nologin />} />{/* 1 */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/" element={<BlogArticle />} />{/* 2 */}
           <Route path="/blogs/:id/articles" element={<BlogIdArticle />} />{/* 3 */}
           <Route path="/blogs/:id/articles/:articleId" element={<BlogIdArticleId />} />{/* 4 */}
           <Route path="/favorites" element={<Favorites />} />{/* 5 */}
           <Route path="/search/:text" element={<Searches />} />{/* 6 */}
           <Route path="/search" element={<ResultSearch />} />{/* 6 */}

           <Route path="/mypage" element={<Mypage />} />{/* 7 */}
           <Route path="/admin/blogs" element={<AdminBlogs />} />{/* 8 */}
           <Route path="/admin/blogs/:id" element={<AdminBlogsId />} />{/* 9 */}
           <Route path="/admin/blogs/:id/articles/:articleId" element={<AdminBlogsIdArticlesId />} />{/* 10 */}

          {/*  以下はクエリ作ってない */}
          <Route path="/admin/blogs/:id/articles/:id/edit" element={<AdminBlogsIdEditors />} />{/* 11 */}
           <Route path="/admin/blogs/:id/articles/create" element={<AdminBlogsIdArticlesCreate />} />{/* 12 */}
           <Route path="/admin/blogs/:id/config" element={<AdminBlogsIdConfig />} />{/* 13 */}
           <Route path="/admin/blogs/:id/editors" element={<AdminBlogIdArticlesIdEdit />} />{/* 14 */}
        </Routes>
      </Router>
      </RecoilRoot>
    </div>
  );
}











export default App;
