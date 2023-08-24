const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;


const getProduct = async (id) => {
    const response = await fetch(`${URL}/${id}`);

    return response.json();
}

export default getProduct;