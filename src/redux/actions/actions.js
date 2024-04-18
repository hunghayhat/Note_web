export const cloneNote = (text) => ({
    type: 'CLONE_NOTE',
    payload: {
        text
    }
});