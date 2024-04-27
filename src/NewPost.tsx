import styled from "styled-components";
import { useGetUsers } from "./features/posts/useGetUsers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { PostsList } from "./components/PostsList";
import { useGetPosts } from "./features/posts/useGetPosts";
import { savePost } from "./features/posts/postsSlice";
import { useFormik } from "formik";

export const NewPost = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      user: "",
      content: "",
    },
    onSubmit: (values) => {
      dispatch(
        savePost({
          id: Math.random().toString(),
          title: values.title,
          body: values.content,
          userId: Number(values.user),
        })
      );
      formik.resetForm();
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.title) {
        errors.title = "Required";
      }
      if (!values.user) {
        errors.user = "Required";
      }
      if (!values.content) {
        errors.content = "Required";
      }
      return errors;
    },
  });

  const users = useSelector((state: RootState) => state.users.users);
  useGetUsers(10);
  useGetPosts(2);
  const dispatch = useDispatch();

  if (users.length == 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Add a New Post</h1>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          value={formik.values.title}
          name="title"
          onChange={formik.handleChange}
        />

        {formik.errors.title && formik.touched.title && (
          <div>{formik.errors.title}</div>
        )}
        <label htmlFor="user">Author:</label>
        <select
          id="user"
          value={formik.values.user}
          name="user"
          onChange={formik.handleChange}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        {formik.errors.user && formik.touched.user && (
          <div>{formik.errors.user}</div>
        )}
        <label htmlFor="content">Content:</label>
        <TextArea
          id="content"
          value={formik.values.content}
          name="content"
          onChange={formik.handleChange}
        />
        {formik.errors.content && formik.touched.content && (
          <div>{formik.errors.content}</div>
        )}
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </Form>
      <PostsList />
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 50vw;
  height: 60vh;
  margin-top: 2rem;
`;

const TextArea = styled.textarea`
  resize: none;
  height: 13rem;
  margin-bottom: 1rem;
`;
