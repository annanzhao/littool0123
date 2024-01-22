const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { db, genid } = require("../db/DbUtils");

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 检查是否存在相同的用户名或邮箱
        const checkUserExists = await db.async.get(
            "SELECT * FROM `admin` WHERE `account` = ? OR `email` = ?",
            [username, email]
        );

        if (checkUserExists) {
            return res.status(400).json({
                code: 400,
                msg: "用户名或邮箱已存在",
            });
        }

        // 生成唯一的用户ID
        const userId = genid();

        // 插入新用户数据
        const insertUser = await db.async.run(
            "INSERT INTO `admin` (`id`, `account`, `password`, `email`) VALUES (?, ?, ?, ?)",
            [userId, username, password, email]
        );

        if (insertUser) {
            return res.status(201).json({
                code: 201,
                msg: "用户注册成功",
            });
        } else {
            return res.status(500).json({
                code: 500,
                msg: "注册失败，请重试",
            });
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({
            code: 500,
            msg: "注册失败，请重试",
        });
    }
});

module.exports = router;
