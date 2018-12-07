import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import jarjarImage from "../jarjar.jpg";
import r2Image from "../r2d2.jpg";
import c3poImage from "../3po.jpg";
import b1droidImage from "../b1droid.jpg";
import ImageButton from "./image-button";

const AVATAR_LABEL = "Avatar";
const USER_LABEL = "Username";
const COMMENT_LABEL = "Comment";
const BUTTON_TITLE = "Submit";

export default class AddComment extends React.PureComponent {
  static propTypes = {
    onAddComment: PropTypes.func.isRequired,
    updateId: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
    showComments: PropTypes.func.isRequired
  };

  state = {
    userName: "Anonymous",
    message: "",
    imageSrc: jarjarImage
  };

  handleSubmitComment = () => {
    const { onAddComment, updateId, close, showComments } = this.props;
    onAddComment(
      updateId,
      this.state.userName,
      this.state.message,
      this.state.imageSrc,
      moment(Date.now()).valueOf()
    );
    this.setState({
      userName: "",
      message: "",
      imageSrc: jarjarImage
    });
    showComments();
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
      <div className="card" style={{ margin: 10, backgroundColor: "#efebe9" }}>
        <div className="container" style={{ paddingTop: 10 }}>
          <label>{AVATAR_LABEL}</label>
          <div className="row">
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
          <br />
          <div>
            <label>{USER_LABEL}</label>
            <input
              className="form-control"
              type="text"
              value={this.state.userName}
              onChange={this.handleUserNameChange}
            />
            <div style={{ paddingTop: 10 }}>
              <label>{COMMENT_LABEL}</label>
              <input
                className="form-control"
                type="textarea"
                value={this.state.message}
                onChange={this.handleMessageChange}
              />
            </div>
            <br />
            <button
              className="btn btn-primary"
              onClick={this.handleSubmitComment}
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
