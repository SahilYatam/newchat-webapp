import MessagesContainer from "../../components/message/MessagesContainer.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      <MessagesContainer/>
    </div>
  )
}

export default Home
