import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

import TemporaryDrawer from '../components/TemporaryDrawer';

import '../css/home.css'

export default function Home() {
    return (
        <div>
            <TemporaryDrawer />
            <div className='main-content'>
                <h1>Your expense control app</h1>
                <p>By Sandy Dutra</p>
            </div>
            <div className='home-categories'>
                <Link to="/groceries"><Button>Groceries</Button></Link>
                <Link to="/clothing"><Button>Clothing</Button></Link>
                <Link to="/electronics"><Button>Electronics</Button></Link>
            </div>
        </div>
    );
}