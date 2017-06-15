
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("epr_bu", function(table) {
    // table.increments().primary();  // adds an auto incrementing PK column
    table.string('bu_id',[24]).primary().notNullable();
    table.string('last_upd_pgm_id',[18]).notNullable();
    table.string('last_upd_sysusr_id',[24]);
    table.timestamp('last_upd_ts', true).notNullable();
    table.integer('orig_srsrc_id').notNullable();
    table.integer('ownr_srsrc_id').notNullable();
    table.specificType('bu_typ_cd', 'smallint').notNullable();
    table.string('org_bu_id',[24]).notNullable();
    table.specificType('lob_cd', 'smallint');
    table.specificType('tm_rgn_cd', 'smallint');
    table.string('base_curnc_typ_cd',[3]);
    table.date('eff_bgn_dt').notNullable();
    table.date('eff_end_dt');
    table.string('cmmn_bu_nm',[20]);
    table.string('abbr_bu_nm',[10]);
    table.string('s_bu_nm',[20]);
    table.string('bu_nm',[100]);
    table.string('pref_lang_cd',[5]);
    table.specificType('data_src_cd','smallint').notNullable();
    // table.timestamps(true, true);  // adds created_at and updated_at
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("EPR_BU");
};
