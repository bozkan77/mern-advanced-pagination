import Post from "../models/Posts.js";

export const getAllPosts = async (req, res) => {
  try {
    let query = Post.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 12;
    const skip = (page -1) * pageSize; 
    const total = await Post.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query= query.skip(skip).limit(pageSize);

    if(page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "Sayfa bulunamadı",
      })
    }

    const result = await query;

    res.status(200).json({
      status: 'success',
      count: result.length,
      page,
      pages,
      data: result
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Server Error", 
    })
  }
};