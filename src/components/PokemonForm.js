import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {



  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  const handleForm = ( e )=> {
    e.preventDefault();
    
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
  }

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    

    setFormData ( {...formData, [name]: value});
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleForm}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange} />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            value={formData.hp}
            onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
