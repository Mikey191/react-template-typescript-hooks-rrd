import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface UserItemPageProps {
  id: string | undefined | null;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const respons = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(respons.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="">
      <h1>Страница пользователя {user?.name}</h1>
      <p>электронная почта: {user?.email}</p>
      <p>
        адрес: {user?.address.city} {user?.address.street}{" "}
        {user?.address.zipcode}
      </p>
      <button onClick={() => navigate('/users')}>К списку пользователей</button>
    </div>
  );
};

export default UserItemPage;
