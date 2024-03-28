import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Container,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const CreateAdForm = () => {
  const classes = useStyles();
  const [adDetails, setAdDetails] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    // If it's a file input, handle it differently
    if (name === 'image') {
      setAdDetails({ ...adDetails, [name]: files[0] });
    } else {
      setAdDetails({ ...adDetails, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to submit the ad details
    console.log(adDetails);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={adDetails.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={adDetails.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={adDetails.category}
                onChange={handleChange}
              >
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="furniture">Furniture</MenuItem>
                {/* Add more categories as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={adDetails.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              id="image-picker"
              type="file"
              name="image"
              onChange={handleChange}
            />
            <label htmlFor="image-picker">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                component="span"
                className={classes.button}
              >
                Choose Image
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Create Ad
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateAdForm;
