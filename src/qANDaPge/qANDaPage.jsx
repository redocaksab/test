import React, { useState } from "react";
import styles from "./qANDaPage.module.css";
import rightArrow from "./../images/right-arrow.png";
import leftArrow from "./../images/left-arrow.png"
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";


const QandANDPage = (props) => {
    let [count, setCount] = useState(0);

    let next = () => {
        if (props.answer.values) {
            props.saveAnswer(count, props.answer.values.answer);
        }
        if (count < props.qANDa.length - 1) {
            setCount(count + 1);
            props.reset("answers");
        }
    }
    let prev = () => {
        if (props.answer.values) {
            props.saveAnswer(count, props.answer.values.answer);
        }
        if (count > 0) {
            setCount(count - 1);
            props.reset("answers");
        }
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.question}>{props.qANDa[count][0]}</div>
                <div className={styles.formRow}><AnswerReduxForm /></div>
            </div>
            {count < props.qANDa.length - 1 &&
                <div onClick={next}><img className={styles.arrow + " " + styles.rightArrow} src={rightArrow} /></div>
            }
            {count > 0 &&
                <div onClick={prev}><img className={styles.arrow + " " + styles.leftArrow} src={leftArrow} /></div>
            }

            {count == props.qANDa.length - 1 &&
                <div><NavLink className={styles.checkButton} to="/answers" onClick={next}>check</NavLink></div>
            }

        </>
    );
}

const AnswerForm = () => {
    return (
        <form>
            <Field autocomplete="off"
                component="input"
                name="answer"
                placeholder="Enter your answer"
                type="text" />
        </form>
    )
}

const AnswerReduxForm = reduxForm({ form: "answers" })(AnswerForm);

export default QandANDPage;