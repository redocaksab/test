import React from "react";
import { connect } from "react-redux";
import QandANDPage from "./qANDaPage";
import { saveAnswer } from './../redux/qanda-reducer';
import { getFormValue } from './../redux/answer-selectors';
import {reset} from "redux-form";



class QandAPageContainer extends React.Component {
    render() {
      
        return (
            <QandANDPage 
            qANDa={this.props.qANDa} 
            saveAnswer={this.props.saveAnswer} 
            answer={this.props.answer}
            reset={this.props.reset}/>
        );
    }
}

let mapStateToProps = (state) => ({
    qANDa: state.qANDa.qANDaArray,
    answer: getFormValue(state),
});


export default connect(mapStateToProps, {saveAnswer, reset})(QandAPageContainer);