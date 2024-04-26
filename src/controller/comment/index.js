import PostModel from "../../model/post/index.js";
import UserModel from "../../model/user/index.js";
import CommentModel from "../../model/comment/index.js";
import Joi from "joi";
const CommentController = {
  create: async (req, res) => {
    const payload = req.body;
    const userId = req.user.id;

    const schema = Joi.object({
      commentBody: Joi.string()
    });

    const response = schema.validate(req.body);
    if (response.error) {
      return res
        .status(400)
        .json({ message: "Invalid data", error: response.error });
    }

    const comment = await CommentModel.create({
      commentBody: payload.commentBody,
      UserId: userId,
    });

    res.json({
      message: "Comment created",
      comment,
    });
  },

  update: async (req, res) => {
    const payload = req.body;
    const params = req.params;

    const comment = await CommentModel.findByPk(params.commentId);
    if (!comment) {
      return res.status(404).json({
        message: "NO data found",
      });
    }

    comment.commentBody = payload.commentBody;

    await comment.save();

    res.json({
      message: "comment updated",
      comment,
    });
  },

  getAll: async (req, res) => {
    const comments = await CommentModel.findAll({
      include: [UserModel],
    });
    res.json({
      comments,
    });
  },
  getOne: async (req, res) => {
    const params = req.params;
    console.log(params);

    const comment = await CommentModel.findByPk(params.commentId, {
      include: [UserModel],
    });
    if (!comment) {
      return res.status(404).json({ message: "NO Data found" });
    }
    res.json({
      comment,
    });
  },
};

export default CommentController;
