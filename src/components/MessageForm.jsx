import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import {SendOutlined, PictureOutlined} from '@ant-design/icons';

const MessageForm = (props) => {
    const [value, setValue] = useState('')
    const {chatId, creds} = props;


    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, { text })

        setValue('');
    }

    const handleChange = (event) => {
         setValue(event.target.value);

         isTyping(props, chatId);
    }

    const handleUpload = (events) => {
        sendMessage( creds, chatId,{files: events.target.files, text: ''})
    }
    return(
        <form className = "message-form" onSubmit = {handleSubmit}>
            <input
            className = "message-input"
            placeholder = "Your msg ...."
            value = {value}
            onChange = {handleChange}
            onSubmit = {handleSubmit}
            />
        <label htmlFor="upload-button">
             <span className = "image-button">
                 <PictureOutlined className='picture-icon' />
             </span>
             <input 
             id = "upload-button" 
             type="file"
             multiple = {false}
             style = {{display: 'none'}}
             onChange = {handleUpload}
             />
        </label>
        <button
        type="submit"
        class = "send-button"
        >
            <SendOutlined className = "send-icon" />
        </button>
        </form>

    );
}
export default MessageForm;