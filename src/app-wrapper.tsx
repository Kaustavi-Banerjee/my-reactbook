import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routes } from "./routes";

const BookList = React.lazy(() => import("./pages/BookList"));
const BookForm = React.lazy(() => import("./pages/BookForm"));

export default function AppWrapper() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path={routes.initialPage.match} element={<BookList />} />
          <Route path={routes.bookList.match} element={<BookList />} />
          <Route path={routes.bookCreate.match} element={<BookForm />} />
          <Route path={routes.bookEdit.match} element={<BookForm />} />
        </Routes>
      </Suspense>
    </div>
  );
}
