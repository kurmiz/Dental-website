import React, { useState } from 'react';
import { Container, Paper, Tabs, Tab, Box, Typography } from '@mui/material';
import Login from './Login';
import Signup from './Signup';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Authentication() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Tabs value={value} onChange={handleChange} aria-label="authentication tabs">
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>
      </Paper>
    </Container>
  );
}

