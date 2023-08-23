const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () => {
    const response = await fetch(URL);

    return response.json();
}

export default getCategories;