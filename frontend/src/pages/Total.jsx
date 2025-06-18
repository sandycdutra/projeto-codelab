import DashboardTable from '../components/DashboardTable';
import TemporaryDrawer from '../components/TemporaryDrawer';

import '../css/home.css'

export default function Home() {
    return (
        <div>
            <TemporaryDrawer />
            <DashboardTable />
        </div>
    );
}