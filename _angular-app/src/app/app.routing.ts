import {Routes} from "@angular/router";
import {AdminLayoutComponent} from "./components/pages/admin-layout/admin-layout.component";
import {AuthLayoutComponent} from "./components/pages/auth-layout/auth-layout.component";
import {AuthGuard} from "./guards/auth.guard";

export const AppRoutes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivate: [AuthGuard],
                loadChildren: './components/pages/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'categories',
                canActivate: [AuthGuard],
                loadChildren: './components/pages/category/category-list/category-list.module#CategoryListModule'
            },
            {
                path: 'users',
                canActivate: [AuthGuard],
                loadChildren: './components/pages/user/user-list/user-list.module#UserListModule'
            },
            {
                path: 'products/:product/categories',
                canActivate: [AuthGuard],
                loadChildren: './components/pages/product-category/product-category-list/product-category-list.module#ProductCategoryListModule'
            },
            {
                path: 'products',
                canActivate: [AuthGuard],
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