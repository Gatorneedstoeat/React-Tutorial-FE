import React from 'react';

const UpvotesSection = ({articleName,upvotes,setArticleInfo}) => {
    const upvoteArticle = async () => {
        console.log(articleName.articleName);
        console.log(`articleName: ${articleName}, upvotes: ${upvotes}, setArticleInfo: ${setArticleInfo}`);
       const result = await fetch(`/api/articles/${articleName}/upvotes`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <div id="upvotes-section">
            <button onClick={()=> upvoteArticle()} className="btn btn-info">Add Upvote</button>
            <p>This post has been upvoteted {upvotes} times</p>
        </div>
    );
}

export default UpvotesSection