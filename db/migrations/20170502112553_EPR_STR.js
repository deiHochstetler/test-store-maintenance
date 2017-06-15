
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("epr_str", function(table) {
    // table.increments().primary();  // adds an auto incrementing PK column
    table.string('str_bu_id',[24]).primary().notNullable();
    table.string('str_nbr',[4]).notNullable();
    table.specificType('str_sz_cd', 'smallint').notNullable();
    table.string('str_typ_ind',[1]).notNullable();
    table.string('lbr_str_typ_cd',[2]).notNullable();
    table.string('sis_str_bu_id',[24]);
    table.decimal('sis_str_ftr',[7],[4]);
    table.date('str_open_dt').notNullable();
    table.date('str_cls_dt');
    table.date('ovrd_str_open_dt');
    table.string('relo_to_str_bu_id',[24]);
    table.string('relo_fr_str_bu_id',[24]);
    table.date('cmptr_onln_dt');
    table.date('soq_dt');
    table.decimal('bldg_sz_area',[11],[4]);
    table.specificType('area_uom_cd', 'smallint');
    table.string('rdistr_hrs_flg',[1]).notNullable();
    table.specificType('lbr_trnd_wks', 'smallint').notNullable();
    table.specificType('lt_fcst_mths', 'smallint').notNullable();
    table.specificType('ops_wk_offset_days', 'smallint').notNullable();
    table.specificType('gecc_dlr_nbr', 'smallint');
    table.specificType('gl_mkt_nbr', 'smallint').notNullable();
    table.date('open_24_hrs_bgn_dt');
    table.date('open_24_hrs_end_dt');
    table.string('last_upd_sysusr_id',[24]).notNullable();
    table.timestamp('last_upd_ts').notNullable();
    table.string('str_mgr_empl_id',[12]);
    table.string('hrc_empl_id',[12]);
    table.string('isc_empl_id',[12]);
    table.specificType('str_typ_cd', 'smallint').notNullable();
    // table.timestamps(true, true);  // adds created_at and updated_at
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("EPR_STR");
};
