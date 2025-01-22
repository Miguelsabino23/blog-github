import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter, Route, Routes } from "react-router";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Home } from "./pages/home";
import { PostDetails } from "./pages/postDetails";
import { GlobalStyle } from "./styles/global";
import { BlogProvider } from "./context/BlogProvider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path='/post' element={<PostDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </ThemeProvider>
  );
}
