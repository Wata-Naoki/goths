import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminBlogs } from "./components/adminBlogs/adminBlogs";
import { AdminBlogsId } from "./pages/adminBlogsId/adminBlogsId";
import { AdminBlogsIdArticlesCreate } from "./components/adminBlogsIdArticlesCreate/AdminBlogsIdArticlesCreate";
import { AdminBlogsIdArticlesId } from "./pages/adminBlogsIdArticlesId/AdminBlogsIdArticlesId";
import { AdminBlogsIdConfig } from "./components/adminBlogsIdConfig/AdminBlogsIdConfig";
import BlogIdArticleId from "./pages/blogIdArticles/BlogIdArticleId";
import Favorites from "./pages/favorites/favorites";
import Mypage from "./pages/mypage/mypage";
import Searches from "./components/search/serches";
import { AdminBlogIdArticlesIdEdit } from "./components/adminBlogsIdArticlesIdEdit/AdminBlogIdArticlesIdEdit";
import { Register } from "./components/authentication/resister";
import { Authentication } from "./components/authentication/authentication";
import { RecoilRoot } from "recoil";
import BlogIdArticle from "./pages/blogIdArticle/BlogIdArticle";
import { AuthProvider } from "./AuthContext";
import { ToastContainerWrapper } from "./components/loading/ToastContainerWrapper";
import { AdminBlogsIdEditors } from "./pages/adminBlogsIdEditors/AdminBlogsIdEditors";
import { BlogArticle } from "./pages/articles/blogArticle";

function App() {
  return (
    <AuthProvider>
      <RecoilRoot>
        <Router>
          <Routes>
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
              path="/admin/blogs/:id/articles/:articleId/edit"
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
        <ToastContainerWrapper />
      </RecoilRoot>
    </AuthProvider>
  );
}

export default App;
