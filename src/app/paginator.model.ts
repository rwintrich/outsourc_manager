import { SortOrderEnum } from './sortOrder.enum';

class Paginator<T> {
  content?: T[];
  firstPage?: boolean;
  lastPage?: boolean;
  limit?: number;
  numberOfElements?: number;
  offset?: number;
  totalElements?: number;
  totalPages?: number;
}

class FiltrosPaginator {
  sortBy?: string;
  sortDirection?: number | SortOrderEnum;
  limit?: number;
  offset?: number;
}

export { Paginator, FiltrosPaginator };
