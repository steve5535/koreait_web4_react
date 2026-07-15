function ConceptCard({ title, description, example }) {

    return(
        <article className="conceptCard">
            <h3>{title}</h3>
            <p>{description}</p>
            <code>{example}</code>
        </article>
    );
}



export default ConceptCard;