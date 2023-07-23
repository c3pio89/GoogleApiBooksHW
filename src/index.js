import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const ExampleComponent = lazy(() => import('./ExampleComponent'));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <ExampleComponent />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
