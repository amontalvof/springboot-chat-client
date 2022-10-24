import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatRoom from './components/ChatRoom';

function App() {
    return (
        <>
            <ToastContainer />
            <ChatRoom />
        </>
    );
}

export default App;
