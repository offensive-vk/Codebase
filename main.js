import './styles/index.scss';
import './assets/index.js'
import './styles/index.css'
import './styles/wrapper.css';

import { loadWrapper } from './assets/index.js';
import { loadSectionFirst } from './assets/index.js';

( async() => {
    await loadWrapper('Codebase.dev ', 'Helping you with Interviews.');
    await loadSectionFirst();
})();