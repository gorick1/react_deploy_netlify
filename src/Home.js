import Feed from './Feed';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Home = () => {
    const { searchResults } = useContext(DataContext);

    return (
        <main className="Home">
           
           
             <Feed posts={searchResults} /> : <p className="statusMsg">No posts to display.</p>
        </main>
    )
}

export default Home