import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     image: [],
        // },
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;

        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';

        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        setPhotosToActiveNote: (state, action) => {
            state.isSaving = false;
            state.active.imageURLs = [ ...state.active.imageURLs, ...action.payload ];
        },
        updateNote: (state, action) => {

            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;
            })

            state.messageSaved = `${ action.payload.title }, actualizada correctamente.`;
            
            state.isSaving = false;

        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {

            state.isSaving = false;
            state.notes = state.notes.filter( note => note.id !== action.payload.id );
            state.active = null;

        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    setPhotosToActiveNote,
    updateNote,
    clearNotesLogout,
    deleteNoteById
} = journalSlice.actions;