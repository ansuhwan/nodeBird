import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const PostCardContent = ({ postDate }) => (
    <div>
        {postDate.split(/(#[^\s#]+)/g).map((v, i) => {
            if (v.match(/(#[^\s#]+)/)) {
                return (
                    <Link href={`/hashtap/${v.slice(1)}`} key={i}>
                        <a>{v}</a>
                    </Link>
                );
            }
            return v;
        })}
    </div>
);

PostCardContent.propTypes = {
    postDate: PropTypes.string.isRequired,
};

export default PostCardContent;
