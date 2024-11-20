import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Slider,
} from "@mui/material";

const DataGatheringForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      organizationName: "",
      industryType: "",
      employees: "",
      annualRevenue: "",
      itStaffSize: "",
      dataHandled: {
        "Personal Data": false,
        "Financial Data": false,
        "Proprietary Data": false,
        "Public Data": false,
      },
      dataVolume: "",
      sensitivityLevel: "",
      regulations: {
        GDPR: false,
        HIPAA: false,
        ISO27001: false,
        other: "",
      },
      securityLayers: "",
      integrationComplexity: "",
      scalability: "",
      customization: "",
      managementInvolvement: "",
      budgetAllocation: "",
      policyEnforcement: "",
      trainingSupport: "",
      digitalOperations: "",
      // risks: {
      //   Malware: false,
      //   Phishing: false,
      //   Ransomware: false,
      //   "Insider Threats": false,
      //   "Supply Chain Attacks": false,
      // },
      regulatoryRequirements: "",
      breachFrequency: "",
      incidentResponse: "",
      threats: {
        Malware: false,
        Phishing: false,
        Ransomware: false,
        "Insider Threats": false,
        other: "",
      },
      processStandardization: "",
      securityAutomation: "",
      trainingPrograms: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{ p: 4, maxWidth: 800, margin: "0 auto" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" mb={3}>
        SME Cybersecurity Data Collection
      </Typography>
      {/* Step 1: Basic Organization Information */}
      <Typography variant="h6" gutterBottom>
        Step 1: Basic Organization Information
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.industryType}>
        <InputLabel>Industry Type</InputLabel>
        <Controller
          name="industryType"
          control={control}
          rules={{ required: "Industry type is required." }}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Retail">Retail</MenuItem>
              <MenuItem value="Manufacturing">Manufacturing</MenuItem>
            </Select>
          )}
        />
        {errors.industryType && (
          <Typography color="error">{errors.industryType.message}</Typography>
        )}
      </FormControl>
      <Controller
        name="employees"
        control={control}
        rules={{ required: "Number of employees is required." }}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Number of Employees"
            type="number"
            placeholder="Enter the total number of employees"
            sx={{ mb: 2 }}
          />
        )}
      />
      <Controller
        name="annualRevenue"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Annual Revenue (Optional)"
            type="number"
            placeholder="Enter annual revenue in LKR"
            sx={{ mb: 2 }}
          />
        )}
      />
      <Controller
        name="itStaffSize"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="IT Staff Size"
            type="number"
            placeholder="Number of dedicated IT/security personnel"
            sx={{ mb: 3 }}
          />
        )}
      />
      {/* Step 2: Digital Asset Sensitivity */}
      <Typography variant="h6" gutterBottom>
        Step 2: Digital Asset Sensitivity
      </Typography>
      <Typography fontWeight={500} mt={2}>
        Type of Data Handled (select multiple if applicable)
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        {[
          "Personal Data",
          "Financial Data",
          "Proprietary Data",
          "Public Data",
        ].map((type) => (
          <Controller
            key={type}
            name={`dataHandled.${type}`}
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label={type}
              />
            )}
          />
        ))}
      </FormGroup>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Volume of Data Stored</InputLabel>
        <Controller
          name="dataVolume"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="Low">Low (Less than 1 TB)</MenuItem>
              <MenuItem value="Medium">Medium (1–10 TB)</MenuItem>
              <MenuItem value="High">High (More than 10 TB)</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Sensitivity Level</InputLabel>
        <Controller
          name="sensitivityLevel"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormGroup sx={{ mb: 3 }}>
        {["GDPR", "HIPAA", "ISO 27001"].map((reg) => (
          <Controller
            key={reg}
            name={`regulations.${reg}`}
            control={control}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} />} label={reg} />
            )}
          />
        ))}
        <Controller
          name="regulations.other"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Other (Specify)"
              placeholder="Specify other regulation"
              sx={{ mt: 2 }}
            />
          )}
        />
      </FormGroup>
      {/* Step 3: Cybersecurity Complexity */}
      <Typography variant="h6" gutterBottom>
        Step 3: Cybersecurity Complexity
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Number of Security Layers</InputLabel>
        <Controller
          name="securityLayers"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="1-3 Layers">1–3 Layers</MenuItem>
              <MenuItem value="4-6 Layers">4–6 Layers</MenuItem>
              <MenuItem value="More than 6 Layers">More than 6 Layers</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Integration Complexity</InputLabel>
        <Controller
          name="integrationComplexity"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="Easy">Easy</MenuItem>
              <MenuItem value="Moderate">Moderate</MenuItem>
              <MenuItem value="Complex">Complex</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Scalability of Security Measures</InputLabel>
        <Controller
          name="scalability"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="Easily Scalable">Easily Scalable</MenuItem>
              <MenuItem value="Moderately Scalable">
                Moderately Scalable
              </MenuItem>
              <MenuItem value="Not Scalable">Not Scalable</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Customization Requirements</InputLabel>
        <Controller
          name="customization"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      {/* Step 4: Management Engagement */}
      <Typography variant="h6" gutterBottom>
        Step 4: Management Engagement
      </Typography>
      <Controller
        name="managementInvolvement"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Involvement in Cybersecurity Decisions</InputLabel>
            <Select {...field}>
              <MenuItem value="High">
                High (Top management actively involved)
              </MenuItem>
              <MenuItem value="Medium">
                Medium (Occasional involvement)
              </MenuItem>
              <MenuItem value="Low">Low (Minimal involvement)</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="budgetAllocation"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Budget Allocation for Cybersecurity"
            type="number"
            placeholder="Enter the annual cybersecurity budget in LKR"
            sx={{ mb: 2 }}
          />
        )}
      />
      <Controller
        name="policyEnforcement"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Policy Enforcement by Management</InputLabel>
            <Select {...field}>
              <MenuItem value="Strict">Strict</MenuItem>
              <MenuItem value="Moderate">Moderate</MenuItem>
              <MenuItem value="Minimal">Minimal</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="trainingSupport"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Support for Training Programs</InputLabel>
            <Select {...field}>
              <MenuItem value="Regular">
                Regular training programs conducted
              </MenuItem>
              <MenuItem value="When Required">
                Training conducted only when required
              </MenuItem>
              <MenuItem value="None">No formal training programs</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      {/* Step 5: Industry-Specific Risks */}
      <Typography variant="h6" gutterBottom>
        Step 5: Industry-Specific Risks
      </Typography>
      <Typography fontWeight={500} mt={2}>
        How digitalized is your organization?
      </Typography>
      <Controller
        name="digitalOperations"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Digital Operations</InputLabel>
            <Select {...field}>
              <MenuItem value="Fully Digital">Fully Digital</MenuItem>
              <MenuItem value="Partially Digital">Partially Digital</MenuItem>
              <MenuItem value="Minimal Digitalization">
                Minimal Digitalization
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
      {/* <Typography fontWeight={500} mt={2}>
        Current risks associated with your industry.
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        {[
          "Malware",
          "Phishing",
          "Ransomware",
          "Insider Threats",
          "Supply Chain Attacks",
        ].map((risk) => (
          <Controller
            key={risk}
            name={`risks.${risk}`}
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label={risk}
              />
            )}
          />
        ))}
      </FormGroup> */}
      <Controller
        name="regulatoryRequirements"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Regulatory Requirements by Sector</InputLabel>
            <Select {...field}>
              <MenuItem value="Strict">Strict</MenuItem>
              <MenuItem value="Moderate">Moderate</MenuItem>
              <MenuItem value="Minimal">Minimal</MenuItem>
              <MenuItem value="None">None</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      {/* Step 6: Incident and Threat Details */}
      <Typography variant="h6" gutterBottom>
        Step 6: Incident and Threat Details
      </Typography>
      <Controller
        name="breachFrequency"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Frequency of Security Breaches</InputLabel>
            <Select {...field}>
              <MenuItem value="Regular">Regular (Monthly)</MenuItem>
              <MenuItem value="Occasional">Occasional (Quarterly)</MenuItem>
              <MenuItem value="Rare">Rare (Annually)</MenuItem>
              <MenuItem value="None">None</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="incidentResponse"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Incident Response Effectiveness</InputLabel>
            <Select {...field}>
              <MenuItem value="Effective">
                Effective (Resolved within 24 hours)
              </MenuItem>
              <MenuItem value="Moderate">
                Moderate (Resolved within 1–7 days)
              </MenuItem>
              <MenuItem value="Poor">Poor (Takes more than a week)</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Typography fontWeight={500}>
        Types of Cyber Threats Faced (select multiple)
      </Typography>
      <FormGroup sx={{ mb: 3 }}>
        {["Malware", "Phishing", "Ransomware", "Insider Threats"].map(
          (threat) => (
            <Controller
              key={threat}
              name={`threats.${threat}`}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={threat}
                />
              )}
            />
          )
        )}
        <Controller
          name="threats.other"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Other (Specify)"
              placeholder="Specify other threat"
              sx={{ mt: 2 }}
            />
          )}
        />
      </FormGroup>
     
      {/* Submit Button */}
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default DataGatheringForm;
