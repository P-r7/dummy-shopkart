import React from "react";
import "./navbar.jsx";
import Navbar from "./navbar.jsx";

const image = [
  {
    src:
      "https://rukminim1.flixcart.com/image/416/416/k65d18w0pkrrdj/mobile/r/x/z/realme-5i-rmx2030-original-imafnsx5pakdfdpb.jpeg?q=70",
    name: "Realme 5i (Aqua Blue, 64 GB)  (4 GB RAM)",
    price: "₹8,999",
    buds: "Buy"
  },
  {
    src:
      "https://rukminim1.flixcart.com/image/312/312/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70",
    name: "Redmi 8 (Ruby Red, 64 GB)  (4 GB RAM)",
    price: "₹7,999",
    buds: "Buy"
  },
  {
    src:
      "https://rukminim1.flixcart.com/image/416/416/k612pow0/mobile/b/s/r/realme-c3-rmx2027-original-imafzkzhts5kfmxt.jpeg?q=70",
    name: "Realme C3 (Frozen Blue, 64 GB)  (4 GB RAM)",
    price: "₹7,999",
    buds: "Buy"
  },
  {
    src:
      "https://rukminim1.flixcart.com/image/416/416/k0y6cnk0/mobile/u/e/p/mi-redmi-8a-mzb8458in-original-imafkmhycvhcsrzm.jpeg?q=70",
    name: "Redmi 8A (Ocean Blue, 32 GB)  (3 GB RAM)",
    price: "₹6,999",
    buds: "Buy"
  },
  {
    src:
      "https://rukminim1.flixcart.com/image/416/416/k0lbdzk0pkrrdj/mobile/q/t/v/mi-redmi-note-7-pro-mzb7467in-original-imafhvrd6mbtyaax.jpeg?q=70",
    name: "Redmi Note 7 Pro (Neptune Blue, 64 GB)  (6 GB RAM)",
    price: "₹10,999",
    buds: "Buy"
  },
  {
    src:
      "https://rukminim1.flixcart.com/image/416/416/k3ncakw0pkrrdj/mobile/u/u/n/realme-5-pro-rmx1971-original-imafjhk3aqsdtkfz.jpeg?q=70",
    name: "Realme 5 Pro (Sparkling Blue, 128 GB)  (8 GB RAM)",
    price: "₹15,999",
    buds: "Buy"
  },
  {
    src:
      "https://rukminim1.flixcart.com/image/416/416/jl2m7ww0/mobile/f/z/x/xiaomi-pocophone-f1-na-original-imaf8afka7srhfwq.jpeg?q=70",
    name: "POCO F1 (Steel Blue, 256 GB)  (8 GB RAM)",
    price: "₹16,999",
    buds: "Buy"
  },
  {
    src:
      "https://rukminim1.flixcart.com/image/416/416/k12go7k0/mobile/7/e/e/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpeg?q=70",
    name: "Apple iPhone 7 (Black, 32 GB)",
    price: "₹27,999",
    buds: "Buy"
  },
  {
    src:
      "https://rukminim1.flixcart.com/image/416/416/jsyyufk0/mobile/e/t/q/samsung-galaxy-a50-sm-a505fzbgins-original-imafefghgjpvhxkq.jpeg?q=70",
    name: "Samsung Galaxy A50 (Blue, 64 GB)  (4 GB RAM)",
    price: "₹14,999",
    buds: "Buy"
  }
];
class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="img3">
        <img src={this.props.src} />
        <h1>{this.props.name}</h1>
        <h2>{this.props.price}</h2>
        <button>{this.props.buds}</button>
      </div>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      searchString: event.target.value.substr(0, 20)
    });
  }
  render() {
    var image2 = image.filter(el => {
      return (
        el.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !==
        -1
      );
    });
    return (
      <div>
        <div id="search">
          <img
            id="item"
            src="https://pigment.github.io/fake-logos/logos/large/color/fast-banana.png"
          />
          <input
            onChange={this.handleChange}
            class="form-control"
            type="text"
            placeholder="Search"
            value={this.state.searchString}
          />
          <button id="text1" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <div id="img">
            {image2.map(el => (
              <Image
                src={el.src}
                name={el.name}
                price={el.price}
                buds={el.buds}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
