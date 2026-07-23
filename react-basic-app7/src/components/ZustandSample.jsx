import useCartStore from "../stores/useCartStore"

function ZustandSample() {
    // const items = useCartStore((state) => state.items)
    const addItem = useCartStore((state) => state.addItem)
    return (
        <div>
            <button onClick={() => addItem()}>누른다!</button>
        </div >
    )
}

export default ZustandSample
