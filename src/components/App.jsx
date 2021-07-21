import React from 'react';
import '../styles.css';
import Heading from './Heading.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import notes from '../notes';

function App() {
    return (
        <div>
            <Heading />
            {notes.map(note =>
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;