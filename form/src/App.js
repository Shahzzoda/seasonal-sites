import Form from "./Components/Form";
import SignIn from "./Components/SignIn";
import SignOut from "./Components/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";

const App = ({ auth, storage, firestore, firebase }) => {
  // Google user object. Contains many userful attributes we can use
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <Form firestore={firestore} storage={storage} user={user} />
      ) : (
        <div className="center  sign-in">
          <SignIn auth={auth} firebase={firebase} />
        </div>
      )}

      <div className="center">
        <SignOut auth={auth} />
      </div>
    </>
  );
};

export default App;
