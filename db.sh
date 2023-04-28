#!/bin/bash

psql -U postgres << EOF
CREATE DATABASE gen_tech;
\c gen_tech
\i ./db.sql

EOF