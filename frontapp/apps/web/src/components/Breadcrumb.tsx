import { NavLink } from "react-router-dom";

interface Props {
    items: Array<{ title: string; link: string }>;
}

function Breadcrumb({items}: Props) {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {items.map((item, index) => (
                        <li
                        className={`breadcrumb-item ${index === items.length -1 ? 'active' : ''}`}
                        key={index}
                        aria-current={index === items.length - 1 ? 'page' : undefined}
                        >
                            {index == items.length - 1 ? (
                                item.title
                            ) : (
                                <NavLink to={item.link}>{item.title}</NavLink>
                                )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    )
};

export default Breadcrumb;