import React, { Component } from "react";
import customers from "../customers.json";
import Customer from "./customerLayout"
import Title from "../../components/Title";

class customer extends Component {
    // Setting this.state.customers to the customers json array
    state = {
      customers
    };
  
    removeCustomers = id => {
      // Filter this.state.customers for customers with an id not equal to the id being removed
      const customers = this.state.customers.filter(customers => customers.id !== id);
      // Set this.state.customers equal to the new customers array
      this.setState({ customers });
    };
  
    // Map over this.state.customers and render a customersCard component for each customers object
    render() {
      return (
        <div>
          <Title>Customers List</Title>
          {this.state.customers.map(customers => (
            <Customer
              removeCustomers={this.removeCustomers}
              id={customers.id}
              key={customers.id}
              name={customers.name}
              order={customers.occupation}
              location={customers.location}
            />
          ))}
        </div>
      );
    }
  }

  export default customer;
  