import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

var itemArray = new Array(9).fill("empty");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  drawItem = itemNumber => {
    //what to be there cross or circle
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber] }, () => {});
    }
    this.winner();
  };

  chooseItemIcon = itemNumber => {
    //chossing Icon
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "fingerprint";
  };

  chooseItemColor = itemNumber => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "#6AB04A";
    }
    return "black";
  };

  resetGame = () => {
    itemArray.fill("empty");
    this.setState({ winMessage: "" });
    this.forceUpdate();
  };

  winner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" is the Winner")
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      this.setState({
        winMessage: (itemArray[3] ? "Cross" : "Circle").concat(" is the Winner")
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[6] ? "Cross" : "Circle").concat(" is the Winner")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" is the Winner")
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      this.setState({
        winMessage: (itemArray[1] ? "Cross" : "Circle").concat(" is the Winner")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" is the Winner")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" is the Winner")
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[4] &&
      itemArray[4] === itemArray[2]
    ) {
      this.setState({
        winMessage: (itemArray[6] ? "Cross" : "Circle").concat(" is the Winner")
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.GameName}>
          <Text style={styles.welcomeText}>Tic-Tac-Toe</Text>
        </View>
        <View style={styles.whoPlaysFirstSection}>
          <Text style={styles.whoPlaysFirst}>{this.state.isCross ? "Cross" : "Circle"}</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => this.drawItem(0)}
                disable={this.state.winMessage !== ""}
              >
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)}>
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)}>
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)}>
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)}>
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)}>
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)}>
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)}>
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)}>
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.winMessage}>
          <Text style={styles.winText}>{this.state.winMessage}</Text>
        </View>
        <Button
          full
          primary
          rounded
          style={styles.button}
          onPress={() => this.resetGame()}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2F363F"
  },
  welcomeText: {
    fontSize: 40,
    color: "#FFF",
    fontWeight: "bold"
  },
  GameName: {
    margin: 20,
    padding: 25
  },
  row: {
    flexDirection: "row"
  },
  grid: {},
  item: {
    borderWidth: 2,
    borderColor: "#8B78E6",
    padding: 30,
    margin: 2,
    backgroundColor: "#2C3335"
  },
  button: {
    padding: 20,
    margin: 30,
    backgroundColor: "#8B78E6"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold"
  },
  winText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 30
  },
  winMessage: {
    margin: 10,
    padding: 10
  },
  whoPlaysFirst : {
    fontSize: 20,
    color: "#FFF"
  },
  whoPlaysFirstSection : {
    padding: 5,
    margin: 5
  }
});
