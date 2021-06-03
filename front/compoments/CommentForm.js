import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reduers/post";

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const dispatch = useDispatch();

    const [commentText, onChangeCommentText] = useInput("");

    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                content: commentText,
                postId: post.id,
                userId: id,
            },
        });
    }, [commentText, id]);

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: "relative", margin: 0 }}>
                <Input.TextArea
                    value={commentText}
                    onChange={onChangeCommentText}
                    rows={4}
                />
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ position: "absolute", right: 0, bottom: -40 }}
                >
                    삐약
                </Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;
