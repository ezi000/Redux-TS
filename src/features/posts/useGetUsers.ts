import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../users/usersSlice";

type APIUser = {
  id: number;
  firstName: string;
  lastName: string;
};

type APIUserResponse = {
  users: APIUser[];
};

export type InternalUser = {
  id: number;
  name: string;
};

export const useGetUsers = (usersAmmount: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((response: APIUserResponse) => {
        const usersList = response.users.map<InternalUser>((user) => {
          return {
            id: user.id,
            name: user.firstName + " " + user.lastName,
          };
        });
        dispatch(setUsers(usersList.slice(0, usersAmmount)));
      });
  }, [usersAmmount]);
};
