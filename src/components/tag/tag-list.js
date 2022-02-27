const TagList = ({list}) => {
    if (!list || !Array.isArray(list)) list = [];

    return (
        <ul className="tag-list">
            {list.map((item) => {
                return <li className="tag-item" key={item.id}>
                    {item.name}
                </li>
            })}
        </ul>
    )
}

export default TagList;