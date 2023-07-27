

import { useCallback, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Typography
} from '@mui/material';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MyComponent from './syllubus';


// Define different card components based on the selected radio value
const AdvancedLevelCard = ({ handleChange, values, handleSave }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = (event) => {
    // Implement your form validation logic here for Advanced Level card
    // Set the isFormValid state based on the validation status
    // For example, check if the required fields are filled correctly
    // and set setIsFormValid accordingly
  };

  return (
    <Card>
    <CardHeader subheader="Advanced Level Stream" title="Course Registration" />

    <CardContent sx={{ pt: 0 }}>
      <Box sx={{ m: -1.5 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <MyComponent />
          </Grid>
        </Grid>
      </Box>
    </CardContent>
    <Divider />
    <CardActions sx={{ justifyContent: 'flex-end' }}>
      <Button variant="contained" onClick={handleSave} disabled={!isFormValid}>
        Save details
      </Button>
    </CardActions>
  </Card>
);
  };

  const OrdinaryLevelCard = ({ handleChange, values, handleSave }) => {
    const [selectedSubjects, setSelectedSubjects] = useState({}); // State to keep track of selected subjects
    const [isFormValid, setIsFormValid] = useState(false); // State to track overall form validity
  
    const handleSubjectChange = (subjectNo, event) => {
      const { value } = event.target;
      setSelectedSubjects((prevSelectedSubjects) => ({
        ...prevSelectedSubjects,
        [subjectNo]: value,
      }));
    };
  
    useEffect(() => {
      // Check if all subjects are selected (9 subjects in total)
      const selectedCount = Object.keys(selectedSubjects).length;
      setIsFormValid(selectedCount === 9);
    }, [selectedSubjects]);
  
    return (
  <Card>
           <CardHeader
          subheader="Ordinary Level Stream"
          title="Course Registration"
        />
        
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
          <Grid container spacing={3}>
            {/* Subject 1 */}
            <Grid xs={12} md={6}>
              <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject1"
                  value={selectedSubjects['subject1'] || ''}
                  onChange={(event) => handleSubjectChange('subject1', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="Buddhism">Buddhism</MenuItem>
                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 1</FormHelperText>
              </FormControl>
            </Grid>
            {/* Subject 2 */}
            <Grid xs={12} md={6}>
              <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject2"
                  value={selectedSubjects['subject2'] || ''}
                  onChange={(event) => handleSubjectChange('subject2', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="History">History</MenuItem>
                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 2</FormHelperText>
              </FormControl>
            </Grid>
          <Grid
            xs={12}
            md={6}
          >
             <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject3"
                  value={selectedSubjects['subject3'] || ''}
                  onChange={(event) => handleSubjectChange('subject3', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="Maths">Mathematics</MenuItem>
                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 3</FormHelperText>
              </FormControl>
           
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject4"
                  value={selectedSubjects['subject4'] || ''}
                  onChange={(event) => handleSubjectChange('subject4', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="Science">Science</MenuItem>
                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 4</FormHelperText>
              </FormControl>
           
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
             <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject5"
                  value={selectedSubjects['subject5'] || ''}
                  onChange={(event) => handleSubjectChange('subject5', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 5</FormHelperText>
              </FormControl>
           
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
             <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject6"
                  value={selectedSubjects['subject6'] || ''}
                  onChange={(event) => handleSubjectChange('subject6', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="Sinhala">Sinhala</MenuItem>
                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 6</FormHelperText>
              </FormControl> 
           
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject7"
                  value={selectedSubjects['subject7'] || ''}
                  onChange={(event) => handleSubjectChange('subject7', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="Art">Art</MenuItem>
                  <MenuItem value="Dancing">Dancing</MenuItem>
                  <MenuItem value="Music">Music</MenuItem>

                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 7</FormHelperText>
              </FormControl> 
           
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject8"
                  value={selectedSubjects['subject8'] || ''}
                  onChange={(event) => handleSubjectChange('subject8', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="Commerce">Commerce</MenuItem>
                  <MenuItem value="blaa">blaa</MenuItem>
                  
                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 8</FormHelperText>
              </FormControl> 
           
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
             <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
                <Select
                  fullWidth
                  required
                  name="subject9"
                  value={selectedSubjects['subject9'] || ''}
                  onChange={(event) => handleSubjectChange('subject9', event)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="IT">Information Technology</MenuItem>
                  <MenuItem value="Health">Health</MenuItem>
                  
                  {/* Add other subjects */}
                </Select>
                <FormHelperText>Subject 9</FormHelperText>
              </FormControl> 
           
          </Grid>
         
         
        </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button variant="contained" onClick={handleSave} disabled={!isFormValid}>
          Save details
        </Button>
      </CardActions>
      </Card>
);
    };

    export const AccountProfileDetails = () => {
      const [values, setValues] = useState();
      const [selectedRadio, setSelectedRadio] = useState('AL');
    
      const handleChange = useCallback((event) => {
        setSelectedRadio(event.target.value);
      }, []);
    
      const handleSubmit = useCallback((event) => {
        event.preventDefault();
         // Handle the save logic here
    if (isFormValid) {
      console.log('Selected subjects:', selectedSubjects);
      handleSave();
    }
      }, []);
    
      const handleSave = () => {
        // Implement your logic to save the data based on the selected card here
        console.log('Save details clicked for:', selectedRadio);
        // ...
      };
    
      // Map the selectedRadio value to the corresponding card component
      const cardComponents = {
        AL: <AdvancedLevelCard handleChange={handleChange} values={values} handleSave={handleSave} />,
        OL: <OrdinaryLevelCard handleChange={handleChange} values={values} handleSave={handleSave} />,
      };

      return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <FormControl style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom component="div">
              Select Your Stream
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedRadio}
              onChange={handleChange}
            >
              <FormControlLabel value="AL" control={<Radio />} label="Advanced Level" />
              <FormControlLabel value="OL" control={<Radio />} label="Ordinary Level" />
            </RadioGroup>
          </FormControl>
          {cardComponents[selectedRadio]}
          <Card>{/* Rest of your code for the user profile details form */}</Card>
        </form>
      );
    };

export default AccountProfileDetails;
