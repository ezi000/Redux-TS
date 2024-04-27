import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import styled from "styled-components";
import { InternalUser } from "../features/posts/useGetUsers";

export const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const usersList = useSelector((state: RootState) => state.users.users);

  if (posts.length == 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StyledUL>
        <H1>Posts: </H1>
        {posts.map((post) => {
          const user = usersList.find(
            (user: InternalUser) => user.id === post.userId
          );
          return (
            <StyledLI key={post.id}>
              <h2>{post.title}</h2>
              {user ? <H6>Author: {user.name}</H6> : <H6>Author: Unknown</H6>}
              <p>{post.body}</p>
            </StyledLI>
          );
        })}
      </StyledUL>
    </>
  );
};

const StyledUL = styled.ul`
  list-style-type: none;
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 40vh;
  margin: 0;
`;
const StyledLI = styled.li`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 2rem;
`;

const H6 = styled.h6`
  margin: 0;
  color: grey;
`;
