import useGetConversation from "../../hooks/useGetConversation.js"
import { getRandomEmoji } from "../../utils/emoji.js";
import Conversation from "./Conversation.jsx"

const Conversations = () => {

  const {loading, conversations} = useGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto">

      {
        conversations.map((conversation, idx)=>(
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIndex={idx === conversations.length - 1}
          />
        ))

      }

      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations

// STARTER CODE FOR THIS FILE

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations