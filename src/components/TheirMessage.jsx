const TheirMessage = (lastMessage, message) => {
    const isFistMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username ;

    return(
        <div className="message-row">
            {isFistMessageByUser && (
                <div 
                className="message-avatar"
                style = {{
                    backgroundImage : 'url(${message?.sender?.avatar})'
                }}
                />
            )}
            {(message?.attachments?.length > 0 )
                    ?(
                        <img 
                        src = {message.attachments[0].file}
                        alt = 'an-image'
                        className = 'message-image'
                        style = {{marginLeft : isFistMessageByUser ? '4px' : '48px'}}
                        />
                    ):(
                        <div className = "message" style = {{float : 'left',color : 'brown', backgroundColor : '#CABCDC', marginLeft : isFistMessageByUser ? '4px' : '48px'}}>
                             {message.text}
                        </div>
                    )
                } 
        </div>
    );
}
export default TheirMessage;