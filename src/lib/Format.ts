export default function formatPrice(price: number){
    return (price / 100).toLocaleString("en-OS",{
        style: "currency",
        currency: "USD"
    })
}