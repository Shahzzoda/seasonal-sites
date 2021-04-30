import Form from "./Components/Form";
import SignIn from "./Components/SignIn";
import SignOut from "./Components/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";

const App = ({ auth, storage, firestore, firebase }) => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="center">
        <SignOut auth={auth} />
      </div>
      {user ? (
        <Form firestore={firestore} storage={storage} user={user} />
      ) : (
        <div className="center">
          <SignIn auth={auth} firebase={firebase} />
        </div>
      )}
    </>
  );
};

export default App;
