import React from "react";
import styles from "./answerPage.module.css";

const AnswerPage = (props) => {
  let results = props.qANDa.map((item, index) => {
    let t;
    if (item[2]) {
      t = <><div  className={styles.correctAnswer}>{index + 1}. {item[0]}</div><div>Your answer is correct</div></>
      
    } else if (item[2] === 0){
      t = <><div className={styles.wrongAnswer}>{index + 1}. {item[0]}</div><div >Your answer is wrong, correct answer - {item[1]}</div></>
      
    } else {
      t = <><div className={styles.noAnswer}>{index + 1}. {item[0]}</div><div>No answer</div></> 
    
    }
    return t;
  })
  return (
    <>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.allAnswers}>{results}</div>
        </div>
      </div>
    </>
  )
}

export default AnswerPage;