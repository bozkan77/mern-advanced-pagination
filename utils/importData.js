// third party libraries
import dotenv from "dotenv";
//const fs = require("fs")
import fs from "fs";
import { readFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// custom components
import Post from "../models/Posts.js"
import connectDB from "../config/db.js"
const __dirname = dirname(fileURLToPath(import.meta.url));

connectDB();

console.log(__dirname)

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'));
const importData = async () => {
  try {
    await Post.create(posts);
    console.log('Data import işlemi başarılı.')
    process.exit();
  } catch (err) {
    console.log(`ERROR!! : ${err} `);
    process.exit(1);
  }
}

const deleteData = async () => {
  try {
    await Post.deleteMany({});
    console.log('Data başarı ile silindi.');
    process.exit();
  } catch (err) {
    console.log(`ERROR!! : ${err} `);
    process.exit(1);
  }
}

if(process.argv[2] === '--import'){
  importData();
} else if (process.argv[2] === "--delete"){
  deleteData();
}