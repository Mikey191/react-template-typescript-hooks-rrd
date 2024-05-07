import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import List from "../components/List";
import UserItem from "../components/UserItem";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const respons = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(respons.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(user) => navigate("/users/"+user.id)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UserPage;
