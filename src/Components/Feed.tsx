import { Box, Stack } from "@mui/material";
import Post from "./Post";

export default function Feed() {
  return (
    <Box className="p-5 flex flex-col justify-center items-center gap-8">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
