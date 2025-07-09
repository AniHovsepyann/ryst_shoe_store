import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { ABOUT, BLOG, ERRORPAGE, HOME, LOGIN, PRODUCT, SEARCHRESULTS, SHOPNOW } from './routes'
// import About, { getPosts } from './pages/About/About'
import Layouts from './components/Layouts/Layouts'
import Post, { getSpeacialPost } from './pages/Post/Post'
import { About, Blog, ErrorPage, Home, Login, Product, SearchResults, ShopNow } from './pages'
import { getPosts } from './pages/About/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<Layouts />}>
      <Route index element={<Home />} />
      <Route element={<About />} path={ABOUT} loader={getPosts} />
      <Route element={<Blog />} path={BLOG} />
      <Route element={<Post />} path={`${ABOUT}/:id`} loader={getSpeacialPost} />
      <Route element={<ErrorPage />} path={ERRORPAGE} />
      <Route element={<Login />} path={LOGIN} />
      <Route element={<ShopNow />} path={SHOPNOW} />
      <Route element={<SearchResults />} path={SEARCHRESULTS} />
      <Route element={<Product />} path={PRODUCT} />
    </Route>
  )
)

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

