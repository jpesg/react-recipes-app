import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    recipes: recipeData,
    search: ""
  };

  handleChane = e => {
    console.log("handlechange");
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  render() {
    return (
      <React.Fragment>
        Recipe page
        <Search
          search={this.state.search}
          handleChange={this.handleChane}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </React.Fragment>
    );
  }
}
