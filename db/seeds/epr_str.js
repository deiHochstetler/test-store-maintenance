exports.seed = function(knex, Promise) {

return knex('epr_str').del().then(function() {
  return Promise.all([
    knex('epr_str').insert( { str_bu_id: 'X014900000000000005637PS', str_nbr: '5637', str_sz_cd: 2, str_typ_ind: 'N', lbr_str_typ_cd: '',
        sis_str_bu_id: '7444984420599368750009MV', sis_str_ftr: 0.8200, str_open_dt: '1999-12-02', str_cls_dt: '9999-12-31',
        ovrd_str_open_dt: null, relo_to_str_bu_id: '', relo_fr_str_bu_id: '',
        cmptr_onln_dt: '1999-09-22', soq_dt: '1999-11-25', bldg_sz_area: 117659.0000, area_uom_cd: 17,rdistr_hrs_flg: '',
        lbr_trnd_wks: 0, lt_fcst_mths: 0, ops_wk_offset_days: 1, gecc_dlr_nbr: 0, gl_mkt_nbr: 0,
        open_24_hrs_bgn_dt: null, open_24_hrs_end_dt: null, last_upd_sysusr_id: 'DADCH',
        last_upd_ts: knex.fn.now(), str_mgr_empl_id: '000001663953', hrc_empl_id: '000000713347',
        isc_empl_id: '', str_typ_cd: 1}),

    knex('epr_str').insert( { str_bu_id: 'X028700000000000005687PS', str_nbr: '5687', str_sz_cd: 2, str_typ_ind: 'N', lbr_str_typ_cd: '',
        sis_str_bu_id: '7444984420599368750009MV', sis_str_ftr: 1.1300, str_open_dt: '1998-09-10', str_cls_dt: '9999-12-31',
        ovrd_str_open_dt: null, relo_to_str_bu_id: '', relo_fr_str_bu_id: '',
        cmptr_onln_dt: '1998-07-07', soq_dt: '1998-09-03', bldg_sz_area: 101860.0000, area_uom_cd: 17,rdistr_hrs_flg: '',
        lbr_trnd_wks: 0, lt_fcst_mths: 0, ops_wk_offset_days: 1, gecc_dlr_nbr: 8718, gl_mkt_nbr: 0,
        open_24_hrs_bgn_dt: null, open_24_hrs_end_dt: null, last_upd_sysusr_id: 'DADCH',
        last_upd_ts: knex.fn.now(), str_mgr_empl_id: '000000414111', hrc_empl_id: '000000899439',
        isc_empl_id: '', str_typ_cd: 1}),

    knex('epr_str').insert( { str_bu_id: 'X698600000000000005686PS', str_nbr: '5686', str_sz_cd: 1, str_typ_ind: 'N', lbr_str_typ_cd: '',
        sis_str_bu_id: '7444984420599368750009MV', sis_str_ftr: 1.0000, str_open_dt: '2006-04-13', str_cls_dt: '9999-12-31',
        ovrd_str_open_dt: null, relo_to_str_bu_id: '', relo_fr_str_bu_id: '7444984420588368750005MV',
        cmptr_onln_dt: '2006-02-08', soq_dt: '2006-04-06', bldg_sz_area: 122852.0000, area_uom_cd: 17,rdistr_hrs_flg: 'N',
        lbr_trnd_wks: 0, lt_fcst_mths: 0, ops_wk_offset_days: 1, gecc_dlr_nbr: 0, gl_mkt_nbr: 0,
        open_24_hrs_bgn_dt: null, open_24_hrs_end_dt: null, last_upd_sysusr_id: 'DADCH',
        last_upd_ts: knex.fn.now(), str_mgr_empl_id: '000000030669', hrc_empl_id: '',
        isc_empl_id: '', str_typ_cd: 1}),

    knex('epr_str').insert( { str_bu_id: 'X700100000000000005638PS', str_nbr: '5638', str_sz_cd: 0, str_typ_ind: 'N', lbr_str_typ_cd: '',
        sis_str_bu_id: '7444984420599368750009MV', sis_str_ftr: 1.0000, str_open_dt: '1992-02-04', str_cls_dt: '9999-12-31',
        ovrd_str_open_dt: '1994-11-23', relo_to_str_bu_id: '', relo_fr_str_bu_id: '',
        cmptr_onln_dt: '1994-11-14', soq_dt: '1994-08-05', bldg_sz_area: 131000.0000, area_uom_cd: 17,rdistr_hrs_flg: '',
        lbr_trnd_wks: 0, lt_fcst_mths: 0, ops_wk_offset_days: 1, gecc_dlr_nbr: 0, gl_mkt_nbr: 0,
        open_24_hrs_bgn_dt: '1998-05-01', open_24_hrs_end_dt: '2002-03-31', last_upd_sysusr_id: 'DADCH',
        last_upd_ts: knex.fn.now(), str_mgr_empl_id: 'C00000013715', hrc_empl_id: '',
        isc_empl_id: '', str_typ_cd: 1})
      ])
    })
}

//  Bookshelf setup - requires ID field to be used
// const epr_str = require('../../../models/EPR_STR');
//
// // DELETE the old EPR_STR rows
// epr_str.where('str_bu_id', '!=', 0).destroy()
// .then( () => {
//   // CREATE EPR_STR rows
//   return Promise.all([
//     epr_str.forge( { str_bu_id: 'X014900000000000005637PS', str_nbr: '5637', str_sz_cd: 2, str_typ_ind: 'N', lbr_str_typ_cd: '',
//         sis_str_bu_id: '7444984420599368750009MV', sis_str_ftr_: 0.8200, str_open_dt: '1999-12-02', str_cls_dt: '9999-12-31',
//         ovrd_str_open_dt: '', relo_to_str_bu_id: '', relo_fr_str_bu_id: '',
//         cmptr_onln_dt: '1999-09-22', soq_dt: '1999-11-25', bldg_sz_area: 117659.0000, area_uom_cd: 17,rdistr_hrs_flg: '',
//         lbr_trnd_wks: 0, lt_fcst_mths: 0, ops_wk_offset_days: 1, gecc_dlr_nbr: 0, gl_mkt_nbr: 0,
//         open_24_hrs_bgn_dt: '', open_24_hrs_end_dt: '', last_upd_sysusr_id: 'DADCH',
//         last_upd_ts: '2017-03-29-18.48.00.694004', str_mgr_empl_id: '000001663953', hrc_empl_id: '000000713347',
//         isc_empl_id: '', str_typ_cd: 1}).save()
//     ,
// epr_str.forge( { str_bu_id: 'X028700000000000005687PS', str_nbr: '5687', str_sz_cd: 2, str_typ_ind: 'N', lbr_str_typ_cd: '',
//     sis_str_bu_id: '7444984420599368750009MV', sis_str_ftr: 1.1300, str_open_dt: '1998-09-10', str_cls_dt: '9999-12-31',
//     ovrd_str_open_dt: '', relo_to_str_bu_id: '', relo_fr_str_bu_id: '',
//     cmptr_onln_dt: '1998-097-07', soq_dt: '1998-09-03', bldg_sz_area: 101860.0000, area_uom_cd: 17,rdistr_hrs_flg: '',
//     lbr_trnd_wks: 0, lt_fcst_mths: 0, ops_wk_offset_days: 1, gecc_dlr_nbr: 8718, gl_mkt_nbr: 0,
//     open_24_hrs_bgn_dt: '', open_24_hrs_end_dt: '', last_upd_sysusr_id: 'DADCH',
//     last_upd_ts: '2017-03-29-18.47.17.697301', str_mgr_empl_id: '000000414111', hrc_empl_id: '000000899439',
//     isc_empl_id: '', str_typ_cd: 1}).save(),
// epr_str.forge( { str_bu_id: 'X698600000000000005686PS', str_nbr: '5686', str_sz_cd: 1, str_typ_ind: 'N', lbr_str_typ_cd: '',
//     sis_str_bu_id: '7444984420599368750009MV', sis_str_ftr: 1.0000, str_open: '2006-04-13', str_cls: '9999-12-31',
//     ovrd_str_open: '', relo_to_str_bu_id: '', relo_fr_str_bu_id: '7444984420588368750005MV',
//     cmptr_onln_dt: '2006-02-08', soq_dt: '2006-04-06', bldg_sz_area: 122852.0000, area_uom_cd: 17,rdistr_hrs_flg: 'N',
//     lbr_trnd_wks: 0, lt_fcst_mths: 0, ops_wk_offset_days: 1, gecc_dlr_nbr: 0, gl_mkt_nbr: 0,
//     open_24_hrs_bgn_dt: '', open_24_hrs_end_dt: '', last_upd_sysusr_id: 'DADCH',
//     last_upd_ts: '2017-03-29-18.46.27.457355', str_mgr_empl_id: '000000030669', hrc_empl_id: '',
//     isc_empl_id: '', str_typ_cd: 1}).save(),
// epr_str.forge( { str_bu_id: 'X700100000000000005638PS', str_nbr: '5638', str_sz_cd: 0, str_typ_ind: 'N', lbr_str_typ_cd: '',
//     sis_str_bu_id: '7444984420599368750009MV', sis_str_ftr: 1.0000, str_open_dt: '1992-02-04', str_cls_dt: '9999-12-31',
//     ovrd_str_open_dt: '1994-11-23', relo_to_str_bu_id: '', relo_fr_str_bu_id: '',
//     cmptr_onln_dt: '1994-11-14', soq_dt: '1994-08-05', bldg_sz_area: 131000.0000, area_uom_cd: 17,rdistr_hrs_flg: '',
//     lbr_trnd_wks: 0, lt_fcst_mths: 0, ops_wk_offset_days: 1, gecc_dlr_nbr: 0, gl_mkt_nbr: 0,
//     open_24_hrs_bgn_dt: '1998-05-01', open_24_hrs_end_dt: '2002-03-31', last_upd_sysusr_id: 'DADCH',
//     last_upd_ts: '2017-03-29-18.48.46.391258', str_mgr_empl_id: 'C00000013715', hrc_empl_id: '',
//     isc_empl_id: '', str_typ_cd: 1}).save()
//   ]);
// })
// .then( () => {
//   // GET all EPR_STR rows
//   return epr_str.forge().orderBy('str_bu_id').fetchAll();
// })
// .then( epr_str=> {
//   console.log(epr_str.toJSON());
//   process.exit();
// })
// .catch( err => {
//   console.error(err);
//   process.exit(1);
// });
