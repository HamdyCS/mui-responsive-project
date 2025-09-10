import { Box, Stack } from "@mui/material";
import AddPost from "../Components/AddPost";
import Feed from "../Components/Feed";
import NavBar from "../Components/NavBar";
import Rightbar from "../Components/Rightbar";
import Sidebar from "../Components/Sidebar";

export default function LayoutRoot() {
  return (
    <div className="">
      <NavBar />
      <Stack direction={"row"} className="mt-[60px]">
        <Box className=" hidden md:block w-[240px] min-w-[240px] fixed mt-10">
          <Sidebar />
        </Box>
        <Box className="flex-grow-[6] md:ml-[240px] md:mr-[300px]">
          <Feed />
        </Box>
        <Box className=" w-[240px] hidden md:block  min-w-[300px] fixed right-0 bottom-0 top-[60px] overflow-y-scroll">
          <Rightbar />
        </Box>
      </Stack>
      <AddPost />
    </div>
  );
}
