import './App.scss';
import { AttentionSeeker, Bounce } from 'react-awesome-reveal';

function Landing() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <Bounce>
                <h1 className='h1'>Happy Holidays, <br /> Friend!</h1>
            </Bounce>
        </div>
    );
}

export default Landing;
