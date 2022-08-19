import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuTemplate } from '@models/menu.interface';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class MenuTemplateService {
    constructor(private location: Location,
        private router: Router) { }


    public getMenuItems(): Array<IMenuTemplate> {
        return menuItems;
    }

    public toggleMenuItem(menuId : number){
        let menuItem = document.getElementById('menu-item-'+menuId);
        let subMenu = document.getElementById('sub-menu-'+menuId);  
        if(subMenu){
          if(subMenu.classList.contains('show')){
            subMenu.classList.remove('show');
            menuItem!.classList.remove('expanded');
          }
          else{
            subMenu.classList.add('show');
            menuItem!.classList.add('expanded');
          }      
        }
      }

}

export const menuItems = [
    new IMenuTemplate(10, 'ADMIN_NAV.DASHBOARD', '/', null, 'dashboard', null, false, 0),
    new IMenuTemplate(20, 'ADMIN_NAV.MAINTENANCE', null, null, 'grid_on', null, true, 0),
    new IMenuTemplate(27, 'ADMIN_NAV.EMPLOYEES', '/employee-list', null, 'group_add', null, false, 20),
    // new IMenuTemplate(21, 'ADMIN_NAV.CATEGORIES', '/demo', null, 'category', null, false, 20),
    // new IMenuTemplate(25, 'ADMIN_NAV.ROLES', '/maintenance/role-list', null, 'category', null, false, 20),
    // new IMenuTemplate(26, 'ADMIN_NAV.USERS', '/maintenance/user-list', null, 'category', null, false, 20),
    // new IMenuTemplate(22, 'ADMIN_NAV.PRODUCT_LIST', '/admin/products/product-list', null, 'list', null, false, 20),
    // new IMenuTemplate(23, 'ADMIN_NAV.PRODUCT_DETAIL', '/admin/products/product-detail', null, 'remove_red_eye', null, false, 20),
    // new IMenuTemplate(24, 'ADMIN_NAV.ADD_PRODUCT', '/admin/products/add-product', null, 'add_circle_outline', null, false, 20),
    // new IMenuTemplate(30, 'ADMIN_NAV.SALES', null, null, 'monetization_on', null, true, 0),
    // new IMenuTemplate(31, 'ADMIN_NAV.ORDERS', '/admin/sales/orders', null, 'list_alt', null, false, 30),
    // new IMenuTemplate(32, 'ADMIN_NAV.TRANSACTIONS', '/admin/sales/transactions', null, 'local_atm', null, false, 30),
    // new IMenuTemplate(40, 'ADMIN_NAV.USERS', '/admin/users', null, 'group_add', null, false, 0),
    // new IMenuTemplate(50, 'ADMIN_NAV.CUSTOMERS', '/admin/customers', null, 'supervisor_account', null, false, 0),
    // new IMenuTemplate(60, 'ADMIN_NAV.COUPONS', '/admin/coupons', null, 'card_giftcard', null, false, 0),
    // new IMenuTemplate(70, 'ADMIN_NAV.WITHDRAWAL', '/admin/withdrawal', null, 'credit_card', null, false, 0),
    // new IMenuTemplate(80, 'ADMIN_NAV.ANALYTICS', '/admin/analytics', null, 'multiline_chart', null, false, 0),
    // new IMenuTemplate(90, 'ADMIN_NAV.REFUND', '/admin/refund', null, 'restore', '', false, 0),
    // new IMenuTemplate(100, 'ADMIN_NAV.FOLLOWERS', '/admin/followers', null, 'follow_the_signs', null, false, 0),
    // new IMenuTemplate(110, 'ADMIN_NAV.SUPPORT', '/admin/support', null, 'support', null, false, 0),
    // new IMenuTemplate(120, 'ADMIN_NAV.REVIEWS', '/admin/reviews', '', 'insert_comment', null, false, 0),
    // new IMenuTemplate(140, 'Level 1', null, null, 'more_horiz', null, true, 0),
    // new IMenuTemplate(141, 'Level 2', null, null, 'folder_open', null, true, 140),
    // new IMenuTemplate(142, 'Level 3', null, null, 'folder_open', null, true, 141),
    // new IMenuTemplate(143, 'Level 4', null, null, 'folder_open', null, true, 142),
    // new IMenuTemplate(144, 'Level 5', null, '/', 'link', null, false, 143),
    // new IMenuTemplate(145, 'Level 1_', null, null, 'more_horiz', null, true, 0),
    // new IMenuTemplate(146, 'Level 2', null, null, 'folder_open', null, true, 145),
    // new IMenuTemplate(147, 'Level 3', null, null, 'folder_open', null, true, 146),
    // new IMenuTemplate(148, 'Level 4', null, null, 'folder_open', null, true, 147),
    // new IMenuTemplate(149, 'Level 5', null, '/', 'link', null, false, 148),
    // new IMenuTemplate(200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0)
]

