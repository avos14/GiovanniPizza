import React from "react";
import Layout from "./../components/Layout/Layout";
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibleIcon from '@mui/icons-material/Accessible';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import WifiIcon from '@mui/icons-material/Wifi';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Giovanni's Pizza</Typography>
        <p>
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <PlaceIcon sx={{ color: "red", pt: 1 }} /> 3880 AK PUTTEN Nederland
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> Giovanni3344@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 063344586
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <AccessTimeIcon sx={{ color: "black", pt: 1 }} /> 11:00-23:00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <AccessibleIcon sx={{ color: "black", pt: 1 }} /> Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <DeliveryDiningIcon sx={{ color: "black", pt: 1 }} /> No
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <WifiIcon sx={{ color: "black", pt: 1 }} /> Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <RecordVoiceOverIcon sx={{ color: "black", pt: 1 }} /> English, Dutch, Spanish, German, Italian
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
