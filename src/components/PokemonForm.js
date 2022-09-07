import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setPokemon, pokemon }) {

  const [newPokemon, setNewPokemon] = useState({})

  const onChangeHandler = (e) => {
    if (e.target.name === "back" || e.target.name === "front") {
      console.log(e.target.name, e.target.value)
      setNewPokemon({...newPokemon, sprites: {...newPokemon.sprites,
        [e.target.name]: e.target.value
      }})
    } else {
    setNewPokemon({...newPokemon, [e.target.name]: e.target.value})
    }}
    const onSubmitHandler = (e) => {
      e.preventDefault();
      fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(newPokemon)
  });
    setPokemon([...pokemon, newPokemon])
    }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onSubmitHandler}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={onChangeHandler} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={onChangeHandler} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={onChangeHandler} />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={onChangeHandler} />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
