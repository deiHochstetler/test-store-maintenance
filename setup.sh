#!/bin/bash

cd db

# Setup both src and dst DBs
for DB in etl_src etl_dst
do
  echo "Updating DB $DB"
  if [ $1 = "development" ]; then
    dropdb $DB
    createdb $DB
  fi
  NODE_ENV=$1 DB=$DB node migrate
done

# Only run the seeds file for the src DB
NODE_ENV=$1 DB=etl_src node seed
