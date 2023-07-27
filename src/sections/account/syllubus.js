import { useState } from 'react';
import * as React from 'react';
import { FormControl, FormHelperText, MenuItem,Unstable_Grid2 as Grid  } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const MyComponent = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChanges = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [selectedStream, setSelectedStream] = useState('');

  const handleChange = (event) => {
    setSelectedStream(event.target.value);
  };

  return (
    <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
      <Select
        fullWidth
        required
        name="stream"
        value={selectedStream}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        
        <MenuItem value="Biology">Biology</MenuItem>
        <MenuItem value="Physical Science">Physical Science</MenuItem>
        <MenuItem value="Commerce">Commerce</MenuItem>
        <MenuItem value="Art">Art</MenuItem>
        <MenuItem value="Technology">Technology</MenuItem>
      </Select>
      <FormHelperText>Select the Stream</FormHelperText>

      {/* Conditional rendering based on selectedStream */}
      {selectedStream === 'Biology' && (
        <div>
         <Grid
     container
     spacing={3}
   > <Grid
       xs={12}
       md={6}
     >
        <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
        <Select
        fullWidth
        required
          name='district'
          // onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            Biology
          </MenuItem>
        </Select>
        <FormHelperText>Subject 1</FormHelperText>
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
          name='district'
          // onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            Physics
          </MenuItem>
          <MenuItem value={10}>Agriculture</MenuItem>
         
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
          name='district'
          // onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            Chemistry
          </MenuItem>
          <MenuItem value={10}>Information Technology</MenuItem>
         
        </Select>
        <FormHelperText>Subject 2</FormHelperText>
      </FormControl> 
      
     </Grid>
    
    
   </Grid>
        </div>
      )}

      {selectedStream === 'Physical Science' && (
          <Grid
          container
          spacing={3}
        > <Grid
            xs={12}
            md={6}
          >
             <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
             <Select
             fullWidth
             required
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Mathematics
               </MenuItem>
             </Select>
             <FormHelperText>Subject 1</FormHelperText>
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
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Physics
               </MenuItem>
               <MenuItem value={10}>Agriculture</MenuItem>
              
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
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Chemistry
               </MenuItem>
               <MenuItem value={10}>Information Technology</MenuItem>
              
             </Select>
             <FormHelperText>Subject 2</FormHelperText>
           </FormControl> 
           
          </Grid>
         
         
        </Grid>
      )}

      {selectedStream === 'Commerce' && (
          <Grid
          container
          spacing={3}
        > <Grid
            xs={12}
            md={6}
          >
             <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
             <Select
             fullWidth
             required
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Accounts
               </MenuItem>
             </Select>
             <FormHelperText>Subject 1</FormHelperText>
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
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Business Studies
               </MenuItem>
               <MenuItem value={10}>Statistics</MenuItem>
              
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
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Economics
               </MenuItem>
               <MenuItem value={10}>Information Technology</MenuItem>
              
             </Select>
             <FormHelperText>Subject 3</FormHelperText>
           </FormControl> 
           
          </Grid>
         
         
        </Grid>
      )}

      {selectedStream === 'Art' && (
          <Grid
          container
          spacing={3}
        > 
         <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChanges}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

         
         
        </Grid>
      )}

      {selectedStream === 'Technology' && (
          <Grid
          container
          spacing={3}
        > <Grid
            xs={12}
            md={6}
          >
             <FormControl required fullWidth sx={{ m: 1, minWidth: 120 }}>
             <Select
             fullWidth
             required
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Biology
               </MenuItem>
             </Select>
             <FormHelperText>Subject 1</FormHelperText>
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
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Physics
               </MenuItem>
               <MenuItem value={10}>Agriculture</MenuItem>
              
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
               name='district'
              //  onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
             >
               <MenuItem value="">
                 Chemistry
               </MenuItem>
               <MenuItem value={10}>Information Technology</MenuItem>
              
             </Select>
             <FormHelperText>Subject 2</FormHelperText>
           </FormControl> 
           
          </Grid>
         
         
        </Grid>
      )}
    </FormControl>
  );
};

export default MyComponent;
