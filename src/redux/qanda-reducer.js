const SAVE_ANSWER = "SAVE-ANSWER";
const CLEAR_STATE = "CLEAR-STATE";

let initialState = {
    qANDaArray: [
        ["What is the capital of Ukraine?", "Kiev", null],
        ["5 + 7?", "12", null],
        ["How many oceans does our planet have?", "5", null],
        ["When did Ukraine become independent? (Format: nn.mm.yyyy)", "24.08.1991", null],
        ["In which month was Taras Shevchenko  born?", "March", null],
        ["5x + 13 = 23. Find x.", "2", null]
    ]
};


const qANDaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ANSWER: {
            return {
                ...state,
                qANDaArray: state.qANDaArray.map((item, index) => {
                    if (index === action.numberOfQuestion) {
                        if (action.value.toLowerCase() == item[1].toLowerCase()) {
                            item[2] = 1;
                        } else {
                            item[2] = 0;
                        }
                        return item;
                    }
                    return item;
                })
            }
        }
        case CLEAR_STATE: {
            return {
                qANDaArray: [
                    ["What is the capital of Ukraine?", "Kiev", null],
                    ["5 + 7?", "12", null],
                    ["How many oceans does our planet have?", "5", null],
                    ["When did Ukraine become independent? (Format: nn.mm.yyyy)", "24.08.1991", null],
                    ["In which month was Taras Shevchenko  born?", "March", null],
                    ["5x + 13 = 23. Find x.", "2", null]
                ]
            };
        }


        default:
            return state;
    }
}

export const saveAnswer = (numberOfQuestion, value) => ({ type: SAVE_ANSWER, numberOfQuestion, value });
export const clearState = () => ({ type: CLEAR_STATE});

export default qANDaReducer;