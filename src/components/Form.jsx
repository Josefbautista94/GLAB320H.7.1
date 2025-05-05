import { useState } from "react";

export default function Form({ moviesearch }) { // Defining a Form component, it receives a prop called moviesearch, afunction from App.jsx
  const [formData, setFormData] = useState({ searchterm: "" }); // creates state named formData, starts as an object with one key : searchterm: "", setFormData is used to update it

  const handleChange = (e) => { // This is triggered everytime a user types in the input field
    setFormData({ ...formData, [e.target.name]: e.target.value }); // e.target.name = "searchterm" (the name of the input), e.target.value = whatever the user typed
  };

  const handleSubmit = (e) => { // Triggered when the form is submitted
    e.preventDefault(); // e.preventDefault() stops the page from reloading.
    moviesearch(formData.searchterm); // calls the moviesearch function with the current search term
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchterm"
        onChange={handleChange}
        value={formData.searchterm}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
