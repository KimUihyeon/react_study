
enum CRUDTypes { 'SELECT', 'SELECT_ONE' , 'DELETE' , 'UPDATE', 'INSERT' , 'CREATE' }
enum EenvetTypes { 'CLICK' , 'CHANGED' }
enum UIAction { 'test', 'SWITCH'  }; 

const category_service_prefix = 'CTG';
const money_service_prefix = 'MONEY';
const ui_service_prefix = 'UI';
const menu_service_prefix = 'MENU';


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
export const MONEY_CREATE = type_joinner(money_service_prefix , CRUDTypes.CREATE.toString());

export const MONEY_FlagChange = type_joinner(money_service_prefix , EenvetTypes.CHANGED.toString());

export const reload = "모두변경";
// export const MENU_CLICK = type_joinner(menu_service_prefix , EenvetTypes.CLICK.toString())


export const UI_ANIMATION = type_joinner( ui_service_prefix , UIAction.test.toString());
export const UI_MODAL_SWITCH = type_joinner( ui_service_prefix , UIAction.SWITCH.toString());
export const UI_MENU_SWITCH = type_joinner( menu_service_prefix , UIAction.SWITCH.toString());
export const UI_REG_MODAL_SWITCH = type_joinner( money_service_prefix , "REG" , UIAction.SWITCH.toString());