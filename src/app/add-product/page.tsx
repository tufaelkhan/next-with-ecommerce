export const metadata = {
    title: "Add Product || e-commerce"
}

export default function AddProductPage(){
    return (
        <div>
            <h1 className="text-4xl mt-5 mb-5 font-bold">Add product</h1>
            <form>
            <input type="text" required name="name" placeholder="product name" className="input input-ghost w-full mb-3" />
            <textarea required placeholder="product description" name="description" className="textarea textarea-bordered mb-3 w-full" >
            </textarea>
            <input type="url" required name="image" placeholder="image link here" className="input input-ghost w-full mb-3" />
            <input type="number" required name="price" placeholder="price" className="input input-ghost w-full mb-3" />
            <button type="submit" className="btn btn-primary btn-block">Add Product</button>
            </form>
        </div>
    )
}