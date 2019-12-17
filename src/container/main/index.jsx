import React from 'react';
import { connect } from 'react-redux';
import { batchActions, enableBatching, batchDispatchMiddleware } from 'redux-batched-actions';

class mainApp extends React.Component {

  mockHttp = () => {
    return new Promise(res => {
      res();
    })
  }

  onReduxAdd = () => {
    this.mockHttp().then(res => {
      this.props.init(`name${String(Math.random()).slice(-2)}`)
      // this.props.onAdd();
      // this.props.onChangeName(`wanger${String(Math.random()).slice(-2)}`);
    })

  }

  onReduxMinus = () => {
    this.props.onMinus();
    this.props.onChangeName(`name${String(Math.random()).slice(-2)}`);
  }

  render() {
    console.log('App render')
    return (
      <div>
        <div>redux number: {this.props.num}</div>
        <div>redux name:{this.props.name}</div>
        <button onClick={this.onReduxAdd}>redux add</button>
        <button onClick={this.onReduxMinus}>redux minus</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    num: state.showNumber.number,
    name: state.showName.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => {
      dispatch({ type: "ADD" })
    },
    onMinus: () => {
      dispatch({ type: "MINUS" })
    },
    onChangeName: (name) => {
      dispatch({ type: 'CHANGENAME', name })
    },
    init: (name) => {
      dispatch(batchActions([dispatch({ type: "ADD" }), dispatch({ type: 'CHANGENAME', name })]))
      // dispatch(batchActions([{ type: "ADD" }, { type: 'CHANGENAME', name }]))
      // batchActions([dispatch({ type: "ADD" }), dispatch({ type: 'CHANGENAME', name })])
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mainApp);