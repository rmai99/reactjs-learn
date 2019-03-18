import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

{/*const items = ['Merah ', 'Kuning ', 'Hjau ', 'Biru '];*/}
const items = [
    {
        name : 'Apel',
        color : 'merah',
        img : 'merah.jpg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque ipsum vitae turpis blandit, ac venenatis ipsum faucibus. Etiam ullamcorper mattis erat in posuere. Etiam turpis neque, imperdiet at mi semper, dignissim rhoncus purus.',
    },
    {
        name : 'Banana',
        color : 'Kuning',
        img : 'kuning.jpg',
        desc : 'Pisang merupakan salah satu buah yang mengandung banyak manfaat. Buah pisang dipercaya dapat mencegah kanker karena memiliki kandungan antikarsionogen. maybe. im not sure too',
    },
    {
        name : 'Daun',
        color : 'Hjau',
        img : 'hjau.jpg',
        desc : 'test2',
    },
    {
        name : 'Laut',
        color : 'Biru',
        img : 'biru.jpg',
        desc : 'test3',
    }

];

ReactDOM.render(<App items ={items}/>,
     document.getElementById('root'));
serviceWorker.register();
