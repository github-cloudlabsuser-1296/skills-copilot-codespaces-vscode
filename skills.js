// Create a new file `pages/index.js` and add the following code:

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    // Extract names from the data array
    const data = [
        [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 }
        ],
        [
            { name: 'Bob', age: 40 }
        ]
    ];

    const names = data.flat().map(person => person.name);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <h1>Markdown Editor</h1>
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px', fontSize: '16px' }}
                value={markdown}
                onChange={handleChange}
            />
            <h2>Preview</h2>
            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <h2>Names</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}