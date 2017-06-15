function makeBU_ID(prodStoreNumber, testStoreNumber) {
  return 'C' + prodStoreNumber + '0000000000000' + testStoreNumber + 'TS';
}

module.exports = {
  maskBU: function(bu, testStoreNumber, knex) {

    const prodStoreNumber = bu.cmmn_bu_nm.substring(0, 4);
    const storeName = 'TST ST' + testStoreNumber;

    bu.bu_id = makeBU_ID(prodStoreNumber, testStoreNumber);
    bu.cmmn_bu_nm = testStoreNumber;
    bu.abbr_bu_nm = storeName;
    bu.s_bu_nm = storeName;
    bu.bu_nm = storeName;
    bu.last_upd_pgm_id = 'Test Store Maint';
    bu.last_upd_sysusr_id = 'DADCH';
    bu.last_upd_ts = knex.fn.now();

    return bu;
  },

  maskStore(store, testStoreNumber, knex) {

    const prodStoreNumber = store.str_nbr;

    store.str_bu_id = makeBU_ID(prodStoreNumber, testStoreNumber);
    store.str_nbr = testStoreNumber;
    store.last_upd_sysusr_id = 'DADCH';
    store.last_upd_ts = knex.fn.now();

    return store;
  }
};
