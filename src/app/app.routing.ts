import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { ManageProductsComponent } from './admin/components/manage-products/manage-products.component';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { CheckOutComponent } from './shopping/check-out/check-out.component';
import { LoginComponent } from './core/login/login.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { AuthGuard } from './shared/services/auth/auth-guard.service';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './shopping/order-success/order-success.component';
import { MyOrdersComponent } from './shopping/my-orders/my-orders.component';
import { ProductsComponent } from './shopping/products/products.component';



export const appRouting = [
  { path: '', component: ProductsComponent }, 
  // { path: 'products', component: ProductsComponent},
  // { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'login', component: LoginComponent},

  // { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  // { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  // { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  // { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  // { path: 'admin/products', component: ManageProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  // { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] },

]