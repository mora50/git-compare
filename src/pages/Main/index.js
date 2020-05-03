import React, { Component } from "react";
import logo from "../../assets/gitcompare.png";
import { Form, Container } from "./styles";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import moment from "moment";

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: "",
    loading: false,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      console.log(repository.pushed_at);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Git Compare" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            value={this.state.repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
            placeholder="usuário/repositório"
          />
          <button type="submit">
            {" "}
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse"></i>
            ) : (
              "OK"
            )}
          </button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
