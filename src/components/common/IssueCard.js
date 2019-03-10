import React from 'react'
import PropTypes, { node } from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import AdoptaUnHincha from '../../images/adopta-un-hincha-logo.svg'

const IssueCard = ({ post }) => {
    const url = `/${post.slug}/`
    // const readingTime = readingTimeHelper(post)

    return (
        <Link to={url} className="box">
            <div className="content">
                <figure className="image">
                    <img className="is-issue-icon" src={AdoptaUnHincha}/>
                </figure>
                <h1 className="title is-6">{post.title}</h1>
                <p className="subtitle is-6">{post.primary_author.name}</p>
                <p>{post.excerpt}</p>
                <progress className="progress is-small is-primary" value="54.94" max="100">54.94%</progress>
                <p>59.4% progreso de:</p>
                <p className="has-text-info">Campaña de marketing en Instagram</p>
                <hr className="hr" style={{ marginBottom: `1.5rem` }}/>
                <div className="has-text-centered">
                    <p className="is-primary is-size-7">
                        <span><strong>451{` `}</strong></span>
                        <span>promotores</span>
                    </p>
                    <p className="is-primary is-size-7">
                        <span><strong>54{` `}</strong></span>
                        <span>patrocinadores</span>
                    </p>
                </div>

            </div>
        </Link>
        // <Link to={url} className="post-card">
        //     <header className="post-card-header">
        //         {post.feature_image &&
        //             <div className="post-card-image" style={{
        //                 backgroundImage: `url(${post.feature_image})` ,
        //             }}></div>}
        //         {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
        //         {post.featured && <span>Featured</span>}
        //         <h2 className="post-card-title">{post.title}</h2>
        //     </header>
        //     <section className="post-card-excerpt">{post.excerpt}</section>
        //     <footer className="post-card-footer">
        //         <div className="post-card-footer-left">
        //             <div className="post-card-avatar">
        //                 {post.primary_author.profile_image ?
        //                     <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
        //                     <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
        //                 }
        //             </div>
        //             <span>{ post.primary_author.name }</span>
        //         </div>
        //         <div className="post-card-footer-right">
        //             <div>{readingTime}</div>
        //         </div>
        //     </footer>
        // </Link>
    )
}

IssueCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default IssueCard