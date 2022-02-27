import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import Link from 'next/link';
import TagList from '../tag/tag-list';
import { Button } from 'antd';

const WorkItem = ({style, className, item}) => {
    const wrapAttributes = {
        ...(style ? {style} : {}),
        ...(className ? {className} : {}),
    }

    return (
        <div  {...wrapAttributes} className="work-item">
            <div className="work-item-left">
                <div className="work-item-header">
                    <Link href="/">
                        <a><h3 className="work-item-title">{item.title}</h3></a>
                    </Link>
                    <div className="work-item-meta">
                        <ul className="work-item-meta-list">
                            <li className="work-item-meta-item">
                                <IoLocationOutline className="meta-icon"/>
                                <span>{item.location}</span>
                            </li>
                            <li className="work-item-meta-item">
                                <IoTimeOutline className="meta-icon"/>
                                <span>{item.published_at}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="work-item-desc">
                    {item.description}
                </div>
                <div className="work-item-footer">
                    <TagList list={item.tags}></TagList>
                </div>
            </div>
            <div className="work-item-right">
                <div className="bid-infor">
                    <p className="price"><strong>{item.price}</strong></p>
                    <p className="desc">{item.price_type}</p>
                    <Link href={'/work/' + item.slug}>
                        <a className="action">
                        <Button type="primary" shape="round" size="large">
                            Chi tiết
                        </Button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WorkItem;
