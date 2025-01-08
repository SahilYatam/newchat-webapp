import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { TiMessages } from "react-icons/ti";

const MessagesContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-black font-bold">Bonten Mikey</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessagesContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Mikey ❄️</p>
        <p>Select a chat to start messageing</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// STARTER CODE FOR THIS FILE

// import MessageInput from "./MessageInput.jsx"
// import Messages from "./Messages.jsx"

// const MessagesContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//                 <span className="label-text">To:</span> <span className="text-gray-500 font-bold">Bonten Mikey</span>
//             </div>
//             <Messages/>
//             <MessageInput/>
//         </>
//     </div>
//   )
// }

// export default MessagesContainer
