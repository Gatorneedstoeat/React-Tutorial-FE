import React from 'react';
import { Link } from 'react-router-dom';
const ArticlesList = ({articles}) => (
    <>
        {articles.map((article, key) => (
            <div className="row" key={key}  style={{ margin: "20px" }}>
                <div className="col-12">
                    <Link to={`/article/${article.name}`} style={{ color: "black" }}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.content[0].substring(0, 150)}...</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        ))}
 </>
);

export default ArticlesList;