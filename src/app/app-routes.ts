import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const appRoutes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent,
    children: [
      {
        path: ':id',
        children: [
          {
            path: '',
            component: UserDetailComponent
          }
        ]
      }
    ]
  },
  { path: 'companies', component: CompaniesComponent },
];
