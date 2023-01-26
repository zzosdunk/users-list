import type { FC } from "react";
import { Virtuoso } from "react-virtuoso";

import type { User } from "../../hooks/useUsers";
import UserItem from "../userItem";

interface PersonsListProps {
  data: User[];
  toggleId: (id: string) => void;
  selectedIds: string[];
}

const PersonsList: FC<PersonsListProps> = ({ data, toggleId, selectedIds }) => {
  return (
    <Virtuoso
      data={data ?? []}
      style={{ height: "80vh" }}
      totalCount={data.length}
      itemContent={(index, data) => (
        <UserItem
          even={index % 2 === 0}
          onClick={toggleId}
          selected={selectedIds.includes(data.id)}
          {...data}
        />
      )}
    />
  );
};

export default PersonsList;
