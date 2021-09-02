import './App.css';
import {Provider}  from "react-redux";
import QandAPageContainer from './qANDaPge/qANDaPageContainer';
import store from './redux/store';
import { BrowserRouter, Route } from 'react-router-dom';
import AnswerPageContainer from './answersPage/answerPageContainer';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Route path="/questions" component={QandAPageContainer}/>
      <Route path="/answers" component={AnswerPageContainer}/>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
