    
import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select, 
  Slider, 
  Checkbox, 
  FormGroup, 
  FormControlLabel, 
  Button, 
  Typography 
} from '@mui/material';

const DataGathering = () => {
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState('');
  const [employees, setEmployees] = useState('');
  const [revenue, setRevenue] = useState('');
  const [itPersonnel, setItPersonnel] = useState(false);
  const [cyberBudget, setCyberBudget] = useState('');
  const [riskPerception, setRiskPerception] = useState(5);
  const [digitalAssetSensitivity, setDigitalAssetSensitivity] = useState(5);
  const [practices, setPractices] = useState({
    firewalls: false,
    antivirus: false,
    encryption: false,
    mfa: false,
    employeeTraining: false,
  });
  const [incidentHistory, setIncidentHistory] = useState(false);

  const handleCompanySizeChange = (event) => setCompanySize(event.target.value);
  const handleIndustryChange = (event) => setIndustry(event.target.value);
  const handleEmployeesChange = (event) => setEmployees(event.target.value);
  const handleRevenueChange = (event) => setRevenue(event.target.value);
  const handleItPersonnelChange = (event) => setItPersonnel(event.target.checked);
  const handleCyberBudgetChange = (event) => setCyberBudget(event.target.value);
  const handleRiskPerceptionChange = (event, newValue) => setRiskPerception(newValue);
  const handleDigitalAssetSensitivityChange = (event, newValue) => setDigitalAssetSensitivity(newValue);
  const handlePracticesChange = (event) => {
    setPractices({ ...practices, [event.target.name]: event.target.checked });
  };
  const handleIncidentHistoryChange = (event) => setIncidentHistory(event.target.checked);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      companySize,
      industry,
      employees,
      revenue,
      itPersonnel,
      cyberBudget,
      riskPerception,
      digitalAssetSensitivity,
      practices,
      incidentHistory
    });
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" mb={2}>SME Cybersecurity Data Collection</Typography>

      {/* Company Size */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Company Size</InputLabel>
        <Select value={companySize} onChange={handleCompanySizeChange}>
          <MenuItem value="Small">Small</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Large">Large</MenuItem>
        </Select>
      </FormControl>

      {/* Industry Type */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Industry Type</InputLabel>
        <Select value={industry} onChange={handleIndustryChange}>
          <MenuItem value="Finance">Finance</MenuItem>
          <MenuItem value="Healthcare">Healthcare</MenuItem>
          <MenuItem value="Retail">Retail</MenuItem>
          <MenuItem value="Manufacturing">Manufacturing</MenuItem>
          {/* Add more industries as needed */}
        </Select>
      </FormControl>

      {/* Number of Employees */}
      <TextField
        fullWidth
        label="Number of Employees"
        value={employees}
        onChange={handleEmployeesChange}
        type="number"
        sx={{ mb: 2 }}
      />

      {/* Annual Revenue */}
      <TextField
        fullWidth
        label="Annual Revenue (Optional)"
        value={revenue}
        onChange={handleRevenueChange}
        type="number"
        sx={{ mb: 2 }}
      />

      {/* IT Personnel */}
      <FormControlLabel
        control={<Checkbox checked={itPersonnel} onChange={handleItPersonnelChange} />}
        label="Dedicated IT Personnel"
        sx={{ mb: 2 }}
      />

      {/* Cybersecurity Budget */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Cybersecurity Budget</InputLabel>
        <Select value={cyberBudget} onChange={handleCyberBudgetChange}>
          <MenuItem value="No budget">No budget</MenuItem>
          <MenuItem value="Minimal">Minimal</MenuItem>
          <MenuItem value="Moderate">Moderate</MenuItem>
          <MenuItem value="Significant">Significant</MenuItem>
        </Select>
      </FormControl>

      {/* Digital Asset Sensitivity */}
      <Typography gutterBottom>Digital Asset Sensitivity</Typography>
      <Slider
        value={digitalAssetSensitivity}
        onChange={handleDigitalAssetSensitivityChange}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        sx={{ mb: 4 }}
      />

      {/* Cybersecurity Practices */}
      <Typography variant="h6" gutterBottom>Current Cybersecurity Practices</Typography>
      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={practices.firewalls} onChange={handlePracticesChange} name="firewalls" />}
          label="Firewalls"
        />
        <FormControlLabel
          control={<Checkbox checked={practices.antivirus} onChange={handlePracticesChange} name="antivirus" />}
          label="Antivirus"
        />
        <FormControlLabel
          control={<Checkbox checked={practices.encryption} onChange={handlePracticesChange} name="encryption" />}
          label="Encryption"
        />
        <FormControlLabel
          control={<Checkbox checked={practices.mfa} onChange={handlePracticesChange} name="mfa" />}
          label="Multi-Factor Authentication"
        />
        <FormControlLabel
          control={<Checkbox checked={practices.employeeTraining} onChange={handlePracticesChange} name="employeeTraining" />}
          label="Employee Training"
        />
      </FormGroup>

      {/* Incident History */}
      <FormControlLabel
        control={<Checkbox checked={incidentHistory} onChange={handleIncidentHistoryChange} />}
        label="Past Data Breaches"
        sx={{ mb: 2 }}
      />

      {/* Risk Perception */}
      <Typography gutterBottom>Risk Perception (1 - Low Risk, 10 - High Risk)</Typography>
      <Slider
        value={riskPerception}
        onChange={handleRiskPerceptionChange}
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={10}
        sx={{ mb: 4 }}
      />

      {/* Submit Button */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="primary" type='submit'>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default DataGathering;

