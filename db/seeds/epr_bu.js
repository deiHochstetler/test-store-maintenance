exports.seed = function(knex, Promise) {

  return knex('epr_bu').del().then(function() {
    return Promise.all([
      knex('epr_bu').insert({bu_id: 'X698600000000000005686PS', last_upd_pgm_id: 'PROC', last_upd_sysusr_id: 'DADCH',
        last_upd_ts: knex.fn.now() , orig_srsrc_id: 7010, ownr_srsrc_id: 7010, bu_typ_cd: 9, org_bu_id: '1',
        lob_cd: 1, tm_rgn_cd: 6, base_curnc_typ_cd: 'USD', eff_bgn_dt: '2005-12-08', eff_end_dt: '9999-12-31', cmmn_bu_nm: '5686',
        abbr_bu_nm: 'PRD ST5686', s_bu_nm: 'PROD ST5686', bu_nm: 'PROD ST5686',
        pref_lang_cd: 'en_US', data_src_cd: 0}),

      knex('epr_bu').insert({ bu_id: 'X028700000000000005687PS', last_upd_pgm_id: 'PROC', last_upd_sysusr_id: 'DADCH',
          last_upd_ts: knex.fn.now(), orig_srsrc_id: 1, ownr_srsrc_id: 1, bu_typ_cd: 9, org_bu_id: '1',
          lob_cd: 1, tm_rgn_cd: 6, base_curnc_typ_cd: 'USD', eff_bgn_dt: '1997-11-03', eff_end_dt: '9999-12-31', cmmn_bu_nm: '5687',
          abbr_bu_nm: 'PRD ST5687', s_bu_nm: 'PROD ST5687', bu_nm: 'PROD ST5687',
          pref_lang_cd: 'en_US', data_src_cd: 0}),

      knex('epr_bu').insert({ bu_id: 'X014900000000000005637PS', last_upd_pgm_id: 'PROC', last_upd_sysusr_id: 'DADCH',
          last_upd_ts: knex.fn.now(), orig_srsrc_id: 1, ownr_srsrc_id: 1, bu_typ_cd: 9, org_bu_id: '1',
          lob_cd: 1, tm_rgn_cd: 6, base_curnc_typ_cd: 'USD', eff_bgn_dt: '1999-04-20', eff_end_dt: '9999-12-31', cmmn_bu_nm: '5637',
          abbr_bu_nm: 'PRD ST5637', s_bu_nm: 'PROD ST5637', bu_nm: 'PROD ST5637',
          pref_lang_cd: 'en_US', data_src_cd: 0}),

      knex('epr_bu').insert({ bu_id: 'X700100000000000005638PS', last_upd_pgm_id: 'PROC', last_upd_sysusr_id: 'DADCH',
          last_upd_ts: knex.fn.now(), orig_srsrc_id: 1, ownr_srsrc_id: 1, bu_typ_cd: 9, org_bu_id: '1',
          lob_cd: 1, tm_rgn_cd: 6, base_curnc_typ_cd: 'CAD', eff_bgn_dt: '1994-08-05', eff_end_dt: '9999-12-31', cmmn_bu_nm: '5638',
          abbr_bu_nm: 'PRD ST5638', s_bu_nm: 'PROD ST5638', bu_nm: 'PROD ST5638',
          pref_lang_cd: 'en_CA', data_src_cd: 0})
        ])
      })
    }
