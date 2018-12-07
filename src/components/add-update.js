import React from "react";
import jarjarImage from "../jarjar.jpg";
import PropTypes from "prop-types";
import r2Image from "../r2d2.jpg";
import c3poImage from "../3po.jpg";
import b1droidImage from "../b1droid.jpg";
import ImageButton from "./image-button";
import moment from "moment";

const TITLE = "New update";
const AVATAR_LABEL = "Avatar";
const USER_LABEL = "Username";
const MESSAGE_LABEL = "Message";
const BUTTON_TITLE = "Submit";

export default class AddUpdate extends React.PureComponent {
  static propTypes = {
    onAddUpdate: PropTypes.func.isRequired
  };

  state = {
    userName: "Anonymous",
    message: "",
    imageSrc: jarjarImage
  };

  handleSubmitUpdate = () => {
    const { onAddUpdate, close } = this.props;
    onAddUpdate(
      this.state.userName,
      this.state.message,
      this.state.imageSrc,
      moment(Date.now()).valueOf()
    );
    this.setState({
      userName: "Anonymous",
      message: "",
      imageSrc: jarjarImage
    });
    close();
  };

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value
    });
  };

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  handleImageClicked = imageSrc => {
    this.setState({
      imageSrc: imageSrc
    });
  };

  render() {
    return (
      <div className="card">
        <div className={"container"} style={{ paddingTop: 10 }}>
          <p>
            <strong>{TITLE}</strong>
          </p>
          <div>
            <label>{AVATAR_LABEL}</label>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <ImageButton
                imageSrc={jarjarImage}
                altText="jarjar"
                onClick={() => this.handleImageClicked(jarjarImage)}
                isSelected={this.state.imageSrc === jarjarImage}
              />

              <ImageButton
                imageSrc={r2Image}
                altText="r2d2"
                onClick={() => this.handleImageClicked(r2Image)}
                isSelected={this.state.imageSrc === r2Image}
              />

              <ImageButton
                imageSrc={c3poImage}
                altText="c3po"
                onClick={() => this.handleImageClicked(c3poImage)}
                isSelected={this.state.imageSrc === c3poImage}
              />

              <ImageButton
                imageSrc={b1droidImage}
                altText="b1droid"
                onClick={() => this.handleImageClicked(b1droidImage)}
                isSelected={this.state.imageSrc === b1droidImage}
              />
            </div>
          </div>
          <br />
          <div>
            <label>{USER_LABEL}</label>
            <input
              className="form-control"
              type="text"
              value={this.state.userName}
              onChange={this.handleUserNameChange}
            />

            <label style={{ paddingTop: 10 }}>{MESSAGE_LABEL}</label>
            <input
              className="form-control"
              type="textarea"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={this.handleSubmitUpdate}
              style={{ marginBottom: 15 }}
            >
              {BUTTON_TITLE}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
