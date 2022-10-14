import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminBlogs } from "./components/8.adminBlogs/adminBlogs";
import { AdminBlogsId } from "./components/9.adminBlogsId/adminBlogsId";
import { AdminBlogsIdArticlesCreate } from "./components/12.AdminBlogsIdArticlesCreate/AdminBlogsIdArticlesCreate";
import { AdminBlogsIdArticlesId } from "./components/10.adminBlogsIdArticlesId/AdminBlogsIdArticlesId";
import { AdminBlogsIdConfig } from "./components/13.adminBlogsIdConfig/AdminBlogsIdConfig";
import { AdminBlogsIdEditors } from "./components/11.adminBlogsIdEditors/AdminBlogsIdEditors";

import BlogArticle from "./pages/Articles/blogArticle";
import BlogIdArticle from "./pages/BlogIdArticle/BlogIdArticle";
import BlogIdArticleId from "./components/4.blogIdArticles/BlogIdArticleId";
import Favorites from "./components/5.favorites/favorites";
import { FormComponent } from "./pages/form/FormComponent";
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
            <Route path="/form" element={<FormComponent />} />
            <Route path="/nologin" element={<Nologin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/" element={<BlogArticle />} />
            <Route path="/blogs/:id/articles" element={<BlogIdArticle />} />
            <Route
              path="/blogs/articles/:articleId"
              element={<BlogIdArticleId />}
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search/:text" element={<Searches />} />
            <Route path="/search" element={<Searches />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/blogs/:id" element={<AdminBlogsId />} />
            <Route
              path="/admin/blogs/:id/articles/:articleId"
              element={<AdminBlogsIdArticlesId />}
            />
            <Route
              path="/admin/blogs/:id/articles/:id/edit"
              element={<AdminBlogsIdEditors />}
            />
            <Route
              path="/admin/blogs/:id/articles/create"
              element={<AdminBlogsIdArticlesCreate />}
            />
            <Route
              path="/admin/blogs/:id/config"
              element={<AdminBlogsIdConfig />}
            />
            <Route
              path="/admin/blogs/:id/editors"
              element={<AdminBlogIdArticlesIdEdit />}
            />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
