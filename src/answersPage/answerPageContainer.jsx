import React from "react";
import { connect } from 'react-redux';
import AnswerPage from './answerPage';
import {clearState} from "./../redux/qanda-reducer";

class AnswerPageContainer extends React.Component {
  render() {
    return <AnswerPage qANDa={this.props.qANDa}/>
  }

  componentWillUnmount() {
    this.props.clearState();
  }
}



let mapStateToProps = (state) => {
  return {
    qANDa: state.qANDa.qANDaArray,
  }
}

export default connect(mapStateToProps, {clearState})(AnswerPageContainer);