import React from "react";

export class ContactBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch( 
      "https://maps.googleapis.com/maps/api/geocode/json?address=tel-aviv&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8",
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={{ display: "flex" }}>
          <div style={styles.avatarContainer}>
            <img
              src={this.props.user.pic}
              style={{ borderRadius: 100 }}
              alt=""
            />
            <div style={styles.positionText}>{this.props.user.position}</div>
          </div>

          <div style={{ marginLeft: 15 }}>
            <div style={styles.nameText}>{this.props.user.fullName}</div>
            <div style={styles.workText}>{this.props.user.workPlace}</div>
            <div>{this.props.user.address}</div>
            <div>{this.props.user.city}</div>

            <div>p: {this.props.user.phoneNumber}</div>
          </div>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <img
            src={"/img/edit.png"}
            style={{ width: 20, marginRight: 10, cursor: "pointer" }}
            onClick={this.props.onClickEdit}
          />
          <img
            src={"/img/delete.png"}
            style={{ width: 20, cursor: "pointer" }}
            onClick={this.props.onClickDelete}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    // height: 150,
    backgroundColor: "white",
    width: 400,
    display: "flex",
    flexDirection: "column",
    margin: 15,
    padding: 15
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  positionText: {
    fontSize: 13,
    fontWeight: 500
  },
  nameText: {
    fontSize: 16,
    fontWeight: 700
  },
  workText: {
    fontSize: 14,
    fontWeight: 700
  }
};
