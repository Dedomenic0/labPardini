import { Routes } from '@angular/router';
import { GuiaExames } from './guia-exames/guia-exames';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'guia-exames',
        component: GuiaExames
    },
    {
        path: '',
        component: Home
    }
];
