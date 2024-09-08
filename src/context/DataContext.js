import { createContext, useState, useEffect } from 'react';


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([
        {
          "id": 1,
          "title": "Rhythm 1st post",
          "datetime": "July 16, 2021 11:47:39 AM",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "id": 2,
          "title": "Rhythm 2nd post",
          "datetime": "July 16, 2021 11:47:48 AM",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "id": 3,
          "title": "Rhythm 3rd post",
          "datetime": "July 16, 2021 11:48:01 AM",
          "body": "Third post... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
        },
        {
          "id": 4,
          "title": "Rhythm 4th post",
          "datetime": "August 09, 2021 4:44:22 PM",
          "body": "Test by rhythm"
        }
      ])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    

    useEffect(() => {
        setPosts(data);
    }, [data])

    useEffect(() => {
        const filteredResults = posts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    }, [posts, search])

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;