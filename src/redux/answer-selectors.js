export const getFormValue = (state) => {
    if("answers" in state.form) {
        return state.form.answers
    }

    return null;
}