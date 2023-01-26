import { useMemo, useState } from "react";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

import useUsers from "./hooks/useUsers";
import PersonsList from "./components/userList/UserList";
import Layout from "./components/layout";
import Loader from "./components/loader";
import styled from "@emotion/styled";

function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useUsers();

  const toggleId = (id: string): void => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const sortedData = useMemo(() => {
    const flatten = data?.pages?.flat() ?? [];

    if (selectedIds.length > 0) {
      return flatten.sort((a, b) => {
        if (selectedIds.includes(a.id) && !selectedIds.includes(b.id)) {
          return -1;
        }
        if (!selectedIds.includes(a.id) && selectedIds.includes(b.id)) {
          return 1;
        }
        return 0;
      });
    }

    return flatten;
  }, [data, selectedIds]);

  if (isLoading) return <Loader />;

  return (
    <Layout>
      {isFetchingNextPage && <LinearProgress />}
      {isLoading && <Loader />}
      <PersonsList
        data={sortedData}
        toggleId={toggleId}
        selectedIds={selectedIds}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        sx={{ margin: "5px 0", bgcolor: "#ffcf31" }}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </Button>
    </Layout>
  );
}

export default App;
