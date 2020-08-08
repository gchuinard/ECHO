import { HANDLE_ECHO_CREATION_INPUT, CATCH_ECHO_CREATION_ERROR, CONFIRM_ECHO_CREATION, RESET_MESSAGE } from 'src/store/actions';

const initialState = {
    image: '',
    message: '',
    errorMessage: '',
    adress: '',
};


export default (state = initialState, action) => {

    switch (action.type) {

        case HANDLE_ECHO_CREATION_INPUT: {
            // When selecting tags in the form, action.name generate an array that has to be selected separately
            if (action.name === 'tags') {
                const tags = action.tags;
                const allTags = tags.map((tag) => tag.id)

                state = {
                    ...state,
                    tags: [...allTags]
                }

            } else if (action.name === 'latitude' || action.name === 'longitude') {
                state = {
                    ...state,
                    [action.name]: action.coordinate
                }
            } else if (action.name === 'autoloc') {
                state = {
                    ...state,
                    latitude: action.lat,
                    longitude: action.lng,
                    adress: action.adress
                }
            }
            else {
                state = {
                    ...state,
                    [action.name]: action.event.target.value
                }
            }
            return state
        }

        case CONFIRM_ECHO_CREATION: {

            const message = 'Votre echo a bien été créé'
            state = {
                ...state,
                message: message
            }
        }

            return state;

        case CATCH_ECHO_CREATION_ERROR: {

            const errorMessage = action.message

            return {
                ...state,
                errorMessage: errorMessage
            };

        }
        default: {
            return state;
        }

    }
};
