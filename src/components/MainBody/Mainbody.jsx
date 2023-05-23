/* eslint-disable react/prop-types */
import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../theme";

export const Mainbody = ({ draweropen, drawerWidth }) => {
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          overflowY: "scroll",
          flexWrap: "wrap",
          display: "flex",
          width: "100%",
          paddingX: theme.spacing(5),
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),

          height: "100vh",
          ...(draweropen && {
            ml: `${drawerWidth}px`,
            width: `calc(100% - ${drawerWidth}px)`,
          }),
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          sx={{
            width: "950px",
            height: "150px",
            objectFit: "cover",
            borderRadius: theme.spacing(5),
            transition: theme.transitions.create(["border-radius"], {
              easing: theme.transitions.easing.easing,
              duration: theme.transitions.duration.standard,
            }),
            "&:hover": {
              borderRadius: theme.spacing(0),
            },
          }}
        ></Box>
      </Box>
    </>
  );
};
