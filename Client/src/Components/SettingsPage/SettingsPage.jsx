import React, { useState } from 'react';
import { Switch, Select, MenuItem, FormControl, InputLabel, Typography, Container, Box } from '@mui/material';

const SettingsPage = () => {
  const [language, setLanguage] = useState('Tamil');
  const [explicitContent, setExplicitContent] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [streamingQuality, setStreamingQuality] = useState('Low');
  const [downloadQuality, setDownloadQuality] = useState('High');
  const [autoAdjustQuality, setAutoAdjustQuality] = useState(true);
  const [normalizeVolume, setNormalizeVolume] = useState(true);

  const styles = {
    Settings:{
        background: '#1d1e26',
    },
    container: {
      background: '#2a2b34',
      padding: '20px',
    
      color: 'white',
      maxWidth: '800px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif'
    },
    section: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontWeight: 'bold',
      fontSize: '16px'
    },
    select: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: '#333',
      color: 'white'
    },
    switchContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    switchLabel: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: '16px'
    },
    switchInput: {
      transform: 'scale(1.5)',
      marginLeft: '10px'
    }
  };

  return (
    <body style={styles.Settings}>
    <Container style={styles.container}>
      <Typography variant="h4" gutterBottom>Settings</Typography>
      <Box style={styles.section}>
        <Typography style={styles.label}>Language</Typography>
        <FormControl fullWidth>
          <InputLabel style={{ color: 'white' }}>Language</InputLabel>
          <Select value={language} onChange={(e) => setLanguage(e.target.value)} style={styles.select}>
            <MenuItem value="Tamil">Tamil</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindi">Spanish</MenuItem>
            <MenuItem value="French">French</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box style={styles.section}>
        <Typography style={styles.label}>Explicit content</Typography>
        <Switch checked={explicitContent} onChange={(e) => setExplicitContent(e.target.checked)} />
      </Box>

      <Box style={styles.section}>
        <Typography style={styles.label}>Autoplay</Typography>
        <Switch checked={autoplay} onChange={(e) => setAutoplay(e.target.checked)} />
      </Box>

      <Box style={styles.section}>
        <Typography style={styles.label}>Audio quality</Typography>
        <Typography style={styles.label}>Streaming quality</Typography>
        <FormControl fullWidth>
          <InputLabel style={{ color: 'white' }}>Streaming quality</InputLabel>
          <Select value={streamingQuality} onChange={(e) => setStreamingQuality(e.target.value)} style={styles.select}>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box style={styles.section}>
        <Typography style={styles.label}>Download quality</Typography>
        <FormControl fullWidth>
          <InputLabel style={{ color: 'white' }}>Download quality</InputLabel>
          <Select value={downloadQuality} onChange={(e) => setDownloadQuality(e.target.value)} style={styles.select}>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box style={styles.section}>
        <Typography style={styles.label}>Auto adjust quality</Typography>
        <Switch checked={autoAdjustQuality} onChange={(e) => setAutoAdjustQuality(e.target.checked)} />
      </Box>

      <Box style={styles.section}>
        <Typography style={styles.label}>Normalize volume</Typography>
        <Switch checked={normalizeVolume} onChange={(e) => setNormalizeVolume(e.target.checked)} />
      </Box>
    </Container>
    </body>
  );
};

export default SettingsPage;
