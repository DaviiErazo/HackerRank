import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [sortBy, setSortBy] = useState('VOTED');
    
    const sortArticles = () => {
        if (sortBy === "VOTED") {
            return articles.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1)
        } else {
            return articles.sort((a, b) => a.date < b.date ? 1 : -1)
        }
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={() => setSortBy('VOTED')} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={() => setSortBy('RECENT')} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={sortArticles()}/>
        </div>
    );

}

export default App;
