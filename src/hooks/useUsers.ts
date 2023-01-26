import {
  useInfiniteQuery,
  QueryKey,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import mockData from "../mockData.json";

export interface User {
  id: string;
  jobTitle: string;
  emailAddress: string;
  firstNameLastName: string;
}

const size = 10;

export async function getUsersPaginated({ pageParam = 0 }): Promise<User[]> {
  const start = pageParam * size;
  const end = pageParam * size + size;

  const usersData = mockData.slice(start, end);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersData);
    }, 2000);
  });
}

export const queryKey: QueryKey = ["users"];

export default function useUsers(): UseInfiniteQueryResult<User[], Error> {
  return useInfiniteQuery<User[], Error>({
    queryKey,
    queryFn: getUsersPaginated,
    placeholderData: {
      pages: [],
      pageParams: [],
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
  });
}
