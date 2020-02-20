import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    //React hook state management
    //useState is passed default values or the intial value of propertys before data load
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    //add empty array to prevent infinite loop only call on first load
    // added name to the array now it will update on url change
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);
    if (!article) return <NotFoundPage />
    const otherArticles = articleContent.filter(article => article.name !== name)
    return (
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <h3>Other Articles</h3>
            <ArticlesList articles={otherArticles} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
        </>
    );
}

export default ArticlePage;