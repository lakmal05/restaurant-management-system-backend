export const PermissionsHierarchyObj = {
  CATEGORY: {
    PARENT: {
      PERMISSION_NAME: 'CATEGORY',
      DESCRIPTION: 'Category',
    },
    CHILDREN: {
      VIEW_CATEGORY: {
        PERMISSION_NAME: 'VIEW_CATEGORY',
        DESCRIPTION: 'View Information ',
      },
      CREATE_CATEGORY: {
        PERMISSION_NAME: 'CREATE_CATEGORY',
        DESCRIPTION: 'Create',
      },
      UPDATE_CATEGORY: {
        PERMISSION_NAME: 'UPDATE_CATEGORY',
        DESCRIPTION: 'Update',
      },
      DELETE_CATEGORY: {
        PERMISSION_NAME: 'DELETE_CATEGORY',
        DESCRIPTION: 'Delete',
      },
    },
  },

  STAFF: {
    PARENT: {
      PERMISSION_NAME: 'STAFF',
      DESCRIPTION: 'Staff',
    },
    CHILDREN: {
      VIEW_STAFF: {
        PERMISSION_NAME: 'VIEW_STAFF',
        DESCRIPTION: 'View Infomation',
      },
      CREATE_STAFF: {
        PERMISSION_NAME: 'CREATE_STAFF',
        DESCRIPTION: 'Create',
      },
      UPDATE_STAFF: {
        PERMISSION_NAME: 'UPDATE_STAFF',
        DESCRIPTION: 'Update',
      },
      DELETE_STAFF: {
        PERMISSION_NAME: 'DELETE_STAFF',
        DESCRIPTION: 'Delete',
      },
    },
  },

  CUSTOMER: {
    PARENT: {
      PERMISSION_NAME: 'CUSTOMER',
      DESCRIPTION: 'Customer',
    },
    CHILDREN: {
      VIEW_DASHBOARD: {
        PERMISSION_NAME: 'VIEW_CUSTOMER',
        DESCRIPTION: 'View Infomation',
      },
    },
  },
  PRODUCT: {
    PARENT: {
      PERMISSION_NAME: 'PRODUCT',
      DESCRIPTION: 'Product',
    },
    CHILDREN: {
      CREATE_PRODUCT: {
        PERMISSION_NAME: 'CREATE_PRODUCT',
        DESCRIPTION: 'Create',
      },
      UPDATE_PRODUCT: {
        PERMISSION_NAME: 'UPDATE_PRODUCT',
        DESCRIPTION: 'Update',
      },
      DELETE_PRODUCT: {
        PERMISSION_NAME: 'DELETE_PRODUCT',
        DESCRIPTION: 'Delete ',
      },
      VIEW_PRODUCT: {
        PERMISSION_NAME: 'VIEW_PRODUCT',
        DESCRIPTION: 'View',
      },
    },
  },

  ORDER: {
    PARENT: {
      PERMISSION_NAME: 'ORDER',
      DESCRIPTION: 'Order',
    },
    CHILDREN: {
      UPDATE_ORDER: {
        PERMISSION_NAME: 'UPDATE_ORDER',
        DESCRIPTION: 'Update',
      },
    },
  },
  PAYMENT: {
    PARENT: {
      PERMISSION_NAME: 'PAYMENT',
      DESCRIPTION: 'Payment',
    },
    CHILDREN: {
      VIEW_PAYMENT: {
        PERMISSION_NAME: 'VIEW_PAYMENT',
        DESCRIPTION: 'View',
      },
    },
  },

  BRANCH: {
    PARENT: {
      PERMISSION_NAME: 'BRANCH',
      DESCRIPTION: 'Branch',
    },
    CHILDREN: {
      VIEW_BRANCH: {
        PERMISSION_NAME: 'VIEW_BRANCH',
        DESCRIPTION: 'View',
      },
      UPDATE_BRANCH: {
        PERMISSION_NAME: 'UPDATE_BRANCH',
        DESCRIPTION: 'Update',
      },
      DELETE_BRANCH: {
        PERMISSION_NAME: 'DELETE_BRANCH',
        DESCRIPTION: 'Delete',
      },
      CREATE_BRANCH: {
        PERMISSION_NAME: 'CREATE_BRANCH',
        DESCRIPTION: 'Create',
      },
    },
  },
  INQUIRY: {
    PARENT: {
      PERMISSION_NAME: 'INQUIRY',
      DESCRIPTION: 'Inquiry',
    },
    CHILDREN: {
      VIEW_INQUIRY: {
        PERMISSION_NAME: 'VIEW_INQUIRY',
        DESCRIPTION: 'View',
      },
      REPLY_INQUIRY: {
        PERMISSION_NAME: 'REPLY_INQUIRY',
        DESCRIPTION: 'Reply',
      },
    },
  },
  RESERVATION: {
    PARENT: {
      PERMISSION_NAME: 'RESERVATION',
      DESCRIPTION: 'Rervation',
    },
    CHILDREN: {
      VIEW_RESERVATION: {
        PERMISSION_NAME: 'VIEW_RESERVATION',
        DESCRIPTION: 'View',
      },
      UPDATE_RESERVATION: {
        PERMISSION_NAME: ' UPDATE_RESERVATION',
        DESCRIPTION: 'Update',
      },
    },
  },
};
