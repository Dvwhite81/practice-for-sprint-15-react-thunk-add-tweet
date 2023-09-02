import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTweet } from './store/tweet';

function CreateTweet() {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const tweet = { message };
        if (tweet) {
            dispatch(postTweet(tweet));
            reset();
        }
    }

    const reset = () => {
        setMessage('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Enter a tweet..."
                name="message"
            />
            <button type='submit'>
                Submit
            </button>
        </form>
    )
};

export default CreateTweet;
