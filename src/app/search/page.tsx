import SimpleFilter from '../../components/search/SimpleFilter';
import Card from '../../components/search/Card';
import ComplexFilter from '../../components/search/ComplexFilter';
import List from '../../components/search/List';
import SearchNavbar from '../../components/search/SearchNavbar';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
    return (
        <div data-bs-theme="light" className="d-flex flex-column flex-grow-1 g-1">
            <SearchNavbar />
            <div className="d-flex pdx-5w pdy-2w g-2">
                <div className="filter-container pd-1">
                    <ComplexFilter />
                </div>
                <div className="d-flex flex-column flex-grow-1 g-1">
                    <List />
                <div className="d-flex g-05">
                    <SimpleFilter />
                </div>
                    <Card />
                
                </div>
                
            </div>
        </div>
    );
}
