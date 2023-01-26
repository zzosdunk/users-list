import type { FC } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import type { User } from "src/hooks/useUsers";

import { ListItem } from "./UserItem.styles";

const prepareInitials = (name: string): string => {
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0]}${lastName[0]}`;
};

interface UserItemProps extends User {
  onClick: (id: string) => void;
  even?: boolean;
  selected?: boolean;
}

const UserItem: FC<UserItemProps> = ({
  emailAddress,
  firstNameLastName,
  id,
  jobTitle,
  onClick,
  even = false,
  selected = false,
}) => (
  <ListItem
    key={id}
    data-testid={`user-item-${id}`}
    even={even}
    onClick={(e) => onClick(id)}
    selected={selected}
  >
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: "#ffcf31" }}>
        {prepareInitials(firstNameLastName)}
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={firstNameLastName}
      secondary={
        <>
          <Typography variant="body1">{jobTitle}</Typography>
          <Typography variant="body2">{emailAddress}</Typography>
        </>
      }
    />
  </ListItem>
);

export default UserItem;
