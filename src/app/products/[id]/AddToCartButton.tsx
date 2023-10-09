"use client"

interface AddToCartButtonProps{
    productId: string,

}
export default function AddToCartButton({productId}: AddToCartButtonProps){
    return (
        <div className="flex items-center gap-2">
            <button className="btn btn-primary"
            onClick={()=>{}}
            >Add to Cart
            <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6m8.293-13.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L16.586 12 9.293 4.707a1 1 0 010-1.414z"
      />
    </svg>
    </button>
        </div>
    )
}