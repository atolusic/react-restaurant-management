import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

class UploadImage extends Component {
  state = {
    image: null
  };

  onUploadClickHandler = e => {
    const { firebase, mealDetail, firestore } = this.props;
    const { image } = this.state;
    const storage = firebase.storage().ref(`meals/${mealDetail.id}`);

    storage.put(image).then(() => {
      storage.getDownloadURL().then(img => {
        const updMeal = {
          ...mealDetail,
          img
        };
        firestore
          .update({ collection: "meals", doc: mealDetail.id }, updMeal)
          .then(() => {
            this.setState({ image: null });
          });
      });
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          className="file-field input-field"
          style={{ margin: "1rem 0 0 0" }}
        >
          <div className="btn orange darken-2">
            <span>Foto</span>
            <input
              type="file"
              onChange={event =>
                this.setState({ image: event.target.files[0] })
              }
            />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              style={{ margin: "0" }}
            />
          </div>
        </div>
        <button
          style={{ marginTop: "1rem" }}
          className="btn-small orange darken-2"
          onClick={this.onUploadClickHandler}
        >
          <i className="material-icons">file_upload</i>
        </button>
      </div>
    );
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "meals", storeAs: "meal", doc: props.mealDetail.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    meal: ordered.meal && ordered.meal[0]
  }))
)(UploadImage);
