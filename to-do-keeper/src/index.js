import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import Notes from './posts';

const createPostit = (info) => {
    return <Note title={info.title} content={info.content} key={info.key}/>
}


ReactDOM.render(
    <div>
        <Header />
        {Notes.map(createPostit)}
        <Footer />
    </div>,
    document.getElementById("root")
)