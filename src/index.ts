import { AllSeries } from './components/all.series.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { UnwatchedSeries } from './components/unwatched.series.js';

new Header('.container');
new Main('.container');
new AllSeries('main');
new UnwatchedSeries('.section-title');
