import {Routes} from "@angular/router";
import {AdminLayoutComponent} from "./components/pages/admin-layout/admin-layout.component";
import {AuthLayoutComponent} from "./components/pages/auth-layout/auth-layout.component";

export const AppRoutes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './components/pages/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'categories',
                loadChildren: './components/pages/category/category-list/category-list.module#CategoryListModule'
            },
            {
                path: 'users',
                loadChildren: './components/pages/user/user-list/user-list.module#UserListModule'
            },
            {
                path: 'products/:product/categories',
                loadChildren: './components/pages/product-category/product-category-list/product-category-list.module#ProductCategoryListModule'
            },
            {
                path: 'products',
                loadChildren: './components/pages/product/product-list/product-list.module#ProductListModule'
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [{
            path: 'login',
            loadChildren: './components/pages/authentication/authentication.module#AuthenticationModule'
        }]
    },

    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
];