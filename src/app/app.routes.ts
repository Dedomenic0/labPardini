import { Routes } from '@angular/router';
import { GuiaExames } from './guia-exames/guia-exames';
import { Home } from './home/home';
import { About } from './about/about';
import { Contato } from './contato/contato';

export const routes: Routes = [
    {
        path: 'guia-exames',
        component: GuiaExames
    },
    {
        path: '',
        component: Home
    },
    {
        path: 'sobre',
        component: About
    },
    {
        path: 'contato',
        component: Contato
    }
];
