

import * as pg from 'pg';
import { Logger } from '@nestjs/common'

import { config } from 'config/index';


const { db: { db_name, user_name, host, password, port } } = config;
const Client = pg.Client;

export async function initPgDataBase() {
  const client = new Client({
    user: user_name,
    host: host,
    database: "postgres",
    password: password,
    port: port,
  });
  try {
    await client.connect();
  } catch (e) {
    Logger.error(e.message);
    throw e
  }
  try {
    await client.query(`create database ${db_name}`);
    Logger.log(`Create database ${db_name} success`);
  } catch (e) {
    Logger.log(`Database ${db_name} already exists`);
  } finally {
    await client.end();
  }
} 
