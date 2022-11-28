import React from "react"; 
import "./home.css"; 
import { Grid, Paper, Button, Box, styled, Typography } from "@mui/material"; 
import logobig from "../Assets/logo/image 1 (1).png"


const LogoBig = styled('img')(() => ({
    width: '85rem',
    minWidth: '20rem',
})); 

function Home(){

    
    return (
        <div>
          <Box
            display = "flex-end"
            margin = "auto"
            justifyContent = "center"
            alignItems = "justify-end"
            textAlign = "center" >
        <LogoBig src={logobig} /> 
        <Button href = "https://www.prof-becker.de/" variant="contained" color ="inherit" sx={{ }}> Jetzt starten </Button>
        </Box>
        <Typography align="center" variant="h2">
            Der Sozialkompass führt sie barrierefrei und multilingual durch den Antragsalbtraum. 
        </Typography>
        </div>
    )
}

export default Home; 