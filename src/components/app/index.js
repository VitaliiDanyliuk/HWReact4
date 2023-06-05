import { Component } from "react";

import "./app.css";

export class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const getItems = async () => {
      const apiUrl = await fetch("https://fakestoreapi.com/products");
      const data = await apiUrl.json();
      console.log(data);
      this.setState({
        items: data,
      });
      return data;
    };
    getItems();
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { items } = this.state;
    return (
      <div className="app">
        {items.map((el) => {
          return (
            <div className="item">
              <div className="item-image">
                <img src={el.image} alt={el.title}></img>
              </div>
              <div className="item-text">
                <div className="item-text-title">{el.title}</div>
                <div className="item-text-price">{el.price}$</div>
                <div className="item-text-discription">{el.description}</div>
                <div className="item-text-category">{el.category}</div>
                <div className="rating">
                  Rating:
                  <div>rate:{el.rating.rate}</div>
                  <div>count:{el.rating.count}</div>
                </div>
              </div>
              <button className="btn">Купити</button>
            </div>
          );
        })}
      </div>
    );
  }
}
