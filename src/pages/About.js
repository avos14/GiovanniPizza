import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "4rem",
          },
          "& p": {
            textAlign: "center",
            fontSize: "2rem",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Giovanni's Pizza</Typography>
        
        <p>
        Giovanni's Pizza is aN authentic pizza restaurant creating homemade pizzas.
        It is restaurant run by a family - father, mother, sons, and daughters. 
        </p>
        <br />
        <p>
        All pizzas are homemade - dough and sauce - and all the toppings are fresh.
        </p>
        <br />
        <p>
        <h2> Our slogans are:</h2>

        <ul>
        <li>Eat to live, live for pizzas</li>
        <li>Less drama — more pizza</li>
       <li>The party can't start without pizza</li>
       <li>Good to the last slice</li>
       <li>Pizza for foodies</li>
       <li>Love at first slice</li>
       <li>Family, friends, and pizza</li>

       </ul>

        </p>

      </Box>
    </Layout>
  );
};

export default About;
