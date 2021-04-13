import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Lütfen başlık giriniz.']
  },
  author: {
    type: String,
    required: [true, 'Lütfen isim giriniz.']
  },
  body: {
    type: String,
    required: [true, 'Lütfen içerik giriniz.']
  }
});

const Post = mongoose.model('Post', postSchema);

export default Post;