import React from "react";
import { ContactBox } from "./contact-box";
import { data } from "./data";
import Dialog from "./dialog";
import EditDialog from "./edit-dailog";

export class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      open: false,
      openEdit: false
    };
  }

  componentDidMount() {
    this.setState({ users: data });
  }

  onClickDelete = user => {
    let arr = this.state.users;
    const fillterArr = arr.filter(
      contact => contact.fullName !== user.fullName
    );
    this.setState({
      users: fillterArr
    });
  };

  renderContact() {
    return this.state.users.map(user => {
      return (
        <ContactBox
          user={user}
          onClickDelete={this.onClickDelete.bind(this, user)}
          onClickEdit={this.onClickEdit.bind(this, user)}
        />
      );
    });
  }

  onClickNewContact = () => {
    this.setState({ open: true });
  };

  onClickCancel = () => {
    this.setState({ open: false });
  };

  onClickCancelEdit = () => {
    this.setState({ openEdit: false });
  };

  onclickSave = user => {
    user.pic = "img/michael zimber.jpg";
    user.id = Math.random(100);
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }));
    this.setState({ open: false });
  };

  onClickSaveEdit = (user, userID, userPic) => {
    let usersArr = this.state.users;
    const index = usersArr.findIndex(contact => contact.id == userID);
    user.id = userID;
    user.pic = userPic;
    usersArr[index] = user;
    this.setState({ users: usersArr });
    this.setState({ openEdit: false, userToEdit: "" });
  };

  onClickEdit(user) {
    this.setState({ openEdit: true, userToEdit: user });
  }

  render() {
    return (
      <div style={styles.page}>
        {this.renderContact()}
        <div style={styles.btnContanier}>
          <img
            src="img/plus.png"
            style={{ width: 30, height: 30, cursor: "pointer" }}
            onClick={this.onClickNewContact}
          />
        </div>
        <Dialog
          open={this.state.open}
          closeDialog={this.onClickCancel}
          onClickCreate={this.onclickSave}
        />
        <EditDialog
          open={this.state.openEdit}
          closeDialog={this.onClickCancelEdit}
          user={this.state.userToEdit}
          onClickSaveEdit={this.onClickSaveEdit}
        />
      </div>
    );
  }
}
const styles = {
  btnContanier: {
    width: 400,
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  page: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};
