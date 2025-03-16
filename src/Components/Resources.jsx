import resources from "../ressurser";
import PageTitle from "./PageTitle"; 

const Resources = ({ category }) => {
    const filteredResources = resources.filter(res => res.category === category);

    return (
        <section id = "ressurs-liste">
            <article className="resource-tab">
            <PageTitle title={`${category.toUpperCase()} Resources`} />
            <ul>
                {filteredResources.map((res, index) => (
                    <li key={index}>
                        <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
                    </li>
                ))}
            </ul>
            </article>

        </section>
    );
};

export default Resources;
