"use client"
import { formatPrice } from "@/lib/Format";
import { ShoppingCart } from "@/lib/db/cart";
import Link from "next/link";

interface ShoppingCartButtonProps{
    cart: ShoppingCart | null
}

export default function ShoppingCartButton({cart}: ShoppingCartButtonProps){
    function closeDropDown(){
        const elem = document.activeElement as HTMLElement
        if(elem){
            elem.blur()
        }
    }
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
    <span className="badge badge-sm indicator-item">{cart?.slice || 0}</span>
                </div>
            </label>
            <div tabIndex={0} className="card dropdown-content card-compact mt-3 w--52 bg-base-100 drop-shadow z-30">
                <div className="card-body">
                    <span className="text-lg font-bold">{cart?.slice || 0} items</span>
                    <span className="text-info">
                        subtotal: {formatPrice(cart?.subtotal || 0)}
                    </span>
                    <div className="card-actions">
                        <Link href="/cart"
                        onClick={closeDropDown}
                         className="btn btn-primary btn-block">view cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}