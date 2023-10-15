const locators = {
    LOGIN: { 
        USER: '[data-test=username]',
        PASSWORD: '[data-test=password]',
        BTN_LOGIN: '[data-test=login-button]'
    },

    HOME: {
        APP_LOGO: '.app_logo',
        TITTLE: 'Swag Labs'
    },

    ITEMS: {
      SORT_CONTAINER: '[data-test=product_sort_container]',
      SETTINGS: '[data-test=menu-settings]',
      ASCENDING_NAME_ORDER: 'Name (A to Z)',
      DESCENDING_NAME_ORDER: 'za',
      NAME_AZ: 'az',
    },

}

export default locators;