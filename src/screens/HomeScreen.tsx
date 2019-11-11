import React, { Component } from 'react';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { FlatList, StyleSheet, TextStyle } from 'react-native';
import { FetchButton } from '../components/FetchButton';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { Colors, IconButton, List } from 'react-native-paper';

interface HomeProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface HomeState {
  loading: boolean;
}
interface Styles {
  textStyle: TextStyle
}

const styles = StyleSheet.create<Styles>({
  textStyle: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 20
  }
})

class HomeScreen extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidUpdate(prevProps: HomeProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false });
    }
  }

  handleDeleteTodo = (id: number): void => {
    this.props.deleteTodo(id);
  }

  handleFetch = (): void => {
    this.setState({ loading: true });
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <>
        <FetchButton
          title = { "Fetch"}
          onPress = { this.handleFetch }
          loading = { this.state.loading }
        />
        <FlatList
          data = { todos }
          keyExtractor = { (todo) => todo.id.toString() }
          renderItem = {({ item }) => {
            return (
            <List.Item
              title = { `${item.title.charAt(0).toUpperCase()}${item.title.slice(1)}` }
              description = { item.completed ? "Completed" : "Incompleted" }
              left = { (props) => <List.Icon { ...props } icon = "arrow-right-bold-circle" /> }
              right = {
                () => (
                  <IconButton
                    icon = "delete"
                    color = { Colors.grey500 }
                    onPress = {() => this.handleDeleteTodo(item.id) }
                  />)
              }
            />
            );
          }}
        />
      </>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[]} => {
  return { todos }
}

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
  )(HomeScreen);
