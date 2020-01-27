
enum CRUDTypes { 'SELECT', 'SELECT_ONE' , 'DELETE' , 'UPDATE', 'INSERT'}
enum EenvetTypes { 'CLICK' , 'CHANGED' }

const category_service_prefix = 'CTG';
const money_service_prefix = 'MONEY';


const type_joinner  = (...types : string[]) : string => {
    return types.join('_');
}

export const CTG_INSERT = type_joinner(category_service_prefix , CRUDTypes.INSERT.toString());
export const CTG_DELETE = type_joinner(category_service_prefix , CRUDTypes.DELETE.toString());
export const CTG_UPDATE = type_joinner(category_service_prefix , CRUDTypes.UPDATE.toString());
export const CTG_SELECT = type_joinner(category_service_prefix , CRUDTypes.SELECT.toString());
export const CTG_SELECT_ONE = type_joinner(category_service_prefix , CRUDTypes.SELECT_ONE.toString());

export const MONEY_INSERT = type_joinner(money_service_prefix , CRUDTypes.INSERT.toString());
export const MONEY_DELETE = type_joinner(money_service_prefix , CRUDTypes.DELETE.toString());
export const MONEY_UPDATE = type_joinner(money_service_prefix , CRUDTypes.UPDATE.toString());
export const MONEY_SELECT = type_joinner(money_service_prefix , CRUDTypes.SELECT.toString());
export const MONEY_SELECT_ONE = type_joinner(money_service_prefix , CRUDTypes.SELECT_ONE.toString());



export const MENU_CLICK = type_joinner('MENU' , EenvetTypes.CLICK.toString())