import { useState } from "react";
import styled from "styled-components";
import { useGetUsers } from "./features/posts/useGetUsers";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

export const NewPost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const users = useSelector((state: RootState) => state.users.users);
  useGetUsers(10);

  if (users.length == 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Add a New Post</h1>
      <Form>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="title">Author:</label>
        <select
          id="user"
          value={user}
          name="user"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        >
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="content">Content:</label>
        <TextArea
          id="content"
          value={content}
          name="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 50%;
`;

const TextArea = styled.textarea`
  resize: none;
  height: 13rem;
  margin-bottom: 1rem;
`;
