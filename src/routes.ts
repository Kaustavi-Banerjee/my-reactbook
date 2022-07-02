import queryString from 'query-string';
export type Route = {
    build: (id: string, query?: unknown) => string;
    label?: string;
    match: string;
    private: boolean;
  };
  export type MakeRouteOptions = {
    label?: string;
    build?: (id: string) => string;
    private?: boolean;
  };

function makeRoute(match: string, option?: MakeRouteOptions): Route {
    return {
      match,
      label: option?.label ?? match.split('/').pop() ?? '-',
      build: option?.build ?? (() => match),
      private: option?.private ?? true,
    };
  }

  function buildUrl(route: string, query?: any) {
    if (query) {
      route = `${route}?${queryString.stringify(query)}`;
    }
    return route;
  }

export const routes = {
    bookList: makeRoute('/book-list'),
    bookCreate: makeRoute('/book/create'),
    bookEdit: {
      match:'/book/update/:id',
      build: (id: number | string) => `/book/update/${id}`,
    }
}

