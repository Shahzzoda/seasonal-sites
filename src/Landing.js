import './App.scss';
import AttentionSeeker from 'react-awesome-reveal';

function Landing() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <AttentionSeeker effect='flash'>
                <h1 className='h1'>Happy Holidays, <br /> Friend!</h1>
            </AttentionSeeker>
        </div>
    );
}

export default Landing;
