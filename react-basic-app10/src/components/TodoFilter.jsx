import { FILTER_LABELS, TODO_FILTERS } from "../utils/todo";

const filters = [
    TODO_FILTERS.ALL,
    TODO_FILTERS.ACTIVE,
    TODO_FILTERS.COMPLETED,
];

function TodoFilter({ currentFilter, onChangeFilter }) {
    return (
        <section className="filterCard">
            {filters.map((filter) => (
                <button
                    key={filter}
                    type="button"
                    className={currentFilter === filter ? "active" : ""}
                    onClick={() => onChangeFilter(filter)}
                >
                    {FILTER_LABELS[filter]}
                </button>
            ))}
        </section>
    );
}

export default TodoFilter;